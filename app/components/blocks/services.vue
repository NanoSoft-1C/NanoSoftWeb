<template>
  <section class="services">
    <div class="services__header">
      <h2 class="services__header-title title-h2">что мы умеем делать</h2>
      <p class="services__header-text text-medium">Самое главное, мы умеем делать качественно</p>
    </div>

    <canvas class="services__canvas" ref="canvas"></canvas>
  </section>
</template>

<script setup>

const props = defineProps({
  servicesData: {
    type: Object,
    required: true,
  }
});

import { onMounted, onBeforeUnmount, ref } from 'vue'

// ====== НАСТРОЙКИ ======
const CONFIG = {
  BASE_WIDTH: 140,
  BASE_HEIGHT: 80,

  MAX_SCALE: 1.0,
  MIN_SCALE: 0.6,

  GRID_SPACING_X: 250,
  GRID_SPACING_Y: 120,

  FLOAT_AMPLITUDE: 10,
  FLOAT_SPEED: 0.002,

  PARALLAX_STRENGTH: 0.0055,
  SCALE_DISTANCE: 350,

  GLOW_MIN: 1,
  GLOW_MAX: 35,
  GLOW_STRENGTH: 25,

  OPACITY_MIN: 0.5,
  OPACITY_MAX: 1
}

const canvas = ref(null)
let ctx
let width, height
let animationId
let time = 0

const mouse = { x: 0, y: 0 }
const blocks = []

// ====== API ДЛЯ СОЗДАНИЯ БЛОКОВ ======
function createBlock(
  text = '',
  image = null,
  width = 250,
  height = 100,
  onClick = () => { }
) {
  blocks.push({
    text,
    image,
    width,
    height,
    onClick
  })
}

class Block {
  constructor(x, y, data, index, isCenter = false) {
    this.originX = x
    this.originY = y
    this.x = x
    this.y = y

    this.data = data

    this.baseWidth = data.width || CONFIG.BASE_WIDTH
    this.baseHeight = data.height || CONFIG.BASE_HEIGHT

    this.width = this.baseWidth
    this.height = this.baseHeight

    this.isCenter = isCenter

    // детерминированные значения
    this.depth = isCenter ? 0.2 : (0.6 + (index % 5) * 0.25)
    this.offset = index * 0.7
  }

  update() {
    const dx = mouse.x - this.x
    const dy = mouse.y - this.y

    if (!this.isCenter) {
      this.x -= dx * CONFIG.PARALLAX_STRENGTH * this.depth
      this.y -= dy * CONFIG.PARALLAX_STRENGTH * this.depth
    }

    const floatX = Math.sin(time + this.offset) * CONFIG.FLOAT_AMPLITUDE
    const floatY = Math.cos(time + this.offset) * CONFIG.FLOAT_AMPLITUDE

    this.x += (this.originX + floatX - this.x) * 0.05
    this.y += (this.originY + floatY - this.y) * 0.05

    const dist = distanceToRect(
      mouse.x,
      mouse.y,
      this.x,
      this.y,
      this.baseWidth,
      this.baseHeight
    )

    // нормализация (0 = на границе, 1 = далеко)
    const proximity = Math.max(0, 1 - dist / CONFIG.SCALE_DISTANCE)
    const eased = proximity * proximity // easeOut

    // SCALE — максимум уже у границы
    const scale = CONFIG.MIN_SCALE + (CONFIG.MAX_SCALE - CONFIG.MIN_SCALE) * eased

    this.width = this.baseWidth * scale
    this.height = this.baseHeight * scale

    // GLOW — теперь с минимумом
    this.glow =
      CONFIG.GLOW_MIN +
      (CONFIG.GLOW_MAX - CONFIG.GLOW_MIN) * eased

    // OPACITY
    this.opacity =
      CONFIG.OPACITY_MIN +
      (CONFIG.OPACITY_MAX - CONFIG.OPACITY_MIN) * eased
  }

  draw(ctx) {
    const w = this.width
    const h = this.height

    ctx.save()

    // opacity
    ctx.globalAlpha = this.opacity

    // glow
    ctx.shadowColor = 'rgb(255, 188, 108)'
    ctx.shadowBlur = this.glow

    // фон
    ctx.fillStyle = 'rgb(255, 188, 108)'
    ctx.beginPath()
    ctx.roundRect(
      this.x - w / 2,
      this.y - h / 2,
      w,
      h,
      12
    )
    ctx.fill()

    // ⚠️ сбрасываем тень, чтобы текст не "мылся"
    ctx.shadowBlur = 0

    // картинка
    if (this.data.image && this.data.image.complete && this.data.image.naturalWidth > 0) {
      const imgSize = h * 0.75
      const imgX = this.x - w / 2 + 10
      const imgY = this.y - imgSize / 2

      ctx.save()

      ctx.beginPath()
      ctx.roundRect(
        imgX,
        imgY,
        imgSize,
        imgSize,
        8 // радиус скругления
      )
      ctx.clip()

      // ctx.drawImage(
      //   this.data.image,
      //   imgX,
      //   imgY,
      //   imgSize,
      //   imgSize
      // )

      const img = this.data.image

      const containerW = imgSize
      const containerH = imgSize

      const imgW = img.naturalWidth
      const imgH = img.naturalHeight

      // коэффициент cover
      const scale = Math.max(
        containerW / imgW,
        containerH / imgH
      )

      // размер обрезки из оригинала
      const cropW = containerW / scale
      const cropH = containerH / scale

      // центрируем обрезку
      const cropX = (imgW - cropW) / 2
      const cropY = (imgH - cropH) / 2

      ctx.drawImage(
        img,
        cropX, cropY,      // откуда брать
        cropW, cropH,      // сколько брать
        imgX, imgY,        // куда вставить
        containerW, containerH // итоговый размер
      )

      ctx.restore()
    }

    // текст
    ctx.fillStyle = 'rgb(73, 73, 73)'
    ctx.font = `${h * 0.3}px sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    if (this.data.image) {
      const textAreaWidth = w - (h * 0.6 + 20)
      const centerX = this.x - w / 2 + (h * 0.6 + 20) + textAreaWidth / 2

      ctx.fillText(this.data.text, centerX, this.y)
    } else {
      ctx.fillText(this.data.text, this.x, this.y)
    }

    ctx.restore()
  }
}

function loadImage(nameImg) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = `/images/services/${nameImg}`

    img.onload = () => resolve(img)
    img.onerror = reject
  })
}




let renderedBlocks = []

function layoutGrid() {
  const centerX = width / 2
  const centerY = height / 2

  renderedBlocks = []

  if (!blocks.length) return

  let index = 0
  let layer = 0

  while (index < blocks.length) {
    for (let y = -layer; y <= layer; y++) {
      for (let x = -layer; x <= layer; x++) {
        if (Math.abs(x) !== layer && Math.abs(y) !== layer) continue
        if (index >= blocks.length) return

        const offsetX = (y % 2 === 0) ? 0 : CONFIG.GRID_SPACING_X / 2

        const posX = centerX + x * CONFIG.GRID_SPACING_X + offsetX
        const posY = centerY + y * CONFIG.GRID_SPACING_Y

        // renderedBlocks.push(new Block(posX, posY, blocks[index]))
        renderedBlocks.push(
          new Block(posX, posY, blocks[index], index)
        )

        index++
      }
    }

    layer++
  }
}

function distanceToRect(px, py, rx, ry, rw, rh) {
  const dx = Math.max(Math.abs(px - rx) - rw / 2, 0)
  const dy = Math.max(Math.abs(py - ry) - rh / 2, 0)
  return Math.sqrt(dx * dx + dy * dy)
}

function resize() {
  width = canvas.value.width = canvas.value.offsetWidth
  height = canvas.value.height = canvas.value.offsetHeight
  layoutGrid()
}

function animate() {
  time += CONFIG.FLOAT_SPEED

  ctx.clearRect(0, 0, width, height)

  renderedBlocks.forEach(block => {
    block.update()
    block.draw(ctx)
  })

  animationId = requestAnimationFrame(animate)
}

function handleMouseMove(e) {
  const rect = canvas.value.getBoundingClientRect()

  mouse.x = e.clientX - rect.left
  mouse.y = e.clientY - rect.top
}

function handleClick(e) {
  const rect = canvas.value.getBoundingClientRect()

  const mx = e.clientX - rect.left
  const my = e.clientY - rect.top

  renderedBlocks.forEach(block => {
    if (
      mx > block.x - block.width / 2 &&
      mx < block.x + block.width / 2 &&
      my > block.y - block.height / 2 &&
      my < block.y + block.height / 2
    ) {
      block.data.onClick()
    }
  })
}

onMounted(async () => {
  ctx = canvas.value.getContext('2d')

  for (const key in props.servicesData) {
    const service = props.servicesData[key]

    const img = service.icon ? await loadImage(service.icon) : null

    createBlock(
      service.name,
      img,
      service.width,
      null,
      () => navigateTo(service.link)
    )
  }

  resize()

  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('click', handleClick)

  animate()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('click', handleClick)
  cancelAnimationFrame(animationId)
})
</script>