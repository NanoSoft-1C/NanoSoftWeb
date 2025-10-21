<template>
    <footer class="footer">
        <div ref="mapContainer" class="footer__map"></div>

        <div class="footer__info-container">
          <div class="footer__info-wrapper wrapper">
            <div class="footer__info">
              <h2 class="title-h3">Контакты ООО "НАНО СОФТ"</h2>

              <p class="text-small">ИНН: 3500005965</p>
              <p class="text-small">КПП: 350001001</p>
              <p class="text-small">ОГРН: 1243500004000</p>
              <br>
              <p class="text-medium">Юридический адрес: </p>
              <p class="text-small">Вологодская область, г. Вологда, ул. Фрязиновская, д. 27А/16</p>
              <br>
              <p class="text-medium">Фактический адрес:</p>
              <p class="text-small">Вологодская область, г. Вологда, ул. Октябрьская, д. 27</p>
              <br>
              <p class="text-medium">Телефон:</p>
              <a class="text-small" href="tel:+78124071767">+7 (812) 407-17-67</a>
              <br>
              <p class="text-medium">Email:</p>
              <a class="text-small" href="mailto:nanosoft-1c@yandex.ru">nanosoft-1c@yandex.ru</a>
            </div>
          </div>
        </div>

        <div class="footer__signature">
          <p class="footer__signature-text">© 2025 Nano-Soft<br> Все права защищены</p>

          <button 
            class="footer__signature-developers"
            :class="{ 'footer__signature-developers--open': blockDevVisible }" 
            @click="changeVisibleDevBlock"
          >
            <p class="footer__signature-developers-preview text-small">Сайт разработан организацией "Нано Софт"</p>

            <img class="footer__signature-developers-gif" src="@/assets/video/KaeruYami.gif" alt="">

            <p class="footer__signature-developers-dev">Совместно с разработчиком <a href="https://KaeruYami.wtf">KaeruYami.wtf</a></p>

          </button>
        </div>
    </footer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { fromLonLat } from 'ol/proj'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import { Icon, Style, Text, Fill, Stroke } from 'ol/style'
import XYZ from 'ol/source/XYZ'

const mapContainer = ref(null)
const countClickDev = ref(0)
const blockDevVisible = ref(false)

onMounted(() => {
  // Координаты Вологды, ул. Ленинградская, д. 136
  const coords = fromLonLat([39.870026, 59.220050]) 

  // Создаем фичу (точку)
  const pointFeature = new Feature({
    geometry: new Point(coords)
  })

  // Стили: иконка + подпись
  pointFeature.setStyle(
    new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: '/images/markers/marker-map-NanoSoft.png',
        scale: 0.7
      }),
      text: new Text({
        text: 'Вологодская область,\nг. Вологда, ул. Октябрьская, д. 27',
        offsetY: -60,
        font: 'bold 14px Arial',
        fill: new Fill({ color: '#000' }),
        stroke: new Stroke({ color: '#fff', width: 3 })
      })
    })
  )

  const vectorLayer = new VectorLayer({
    source: new VectorSource({
      features: [pointFeature]
    })
  })

  const grayLayer = new TileLayer({
    source: new XYZ({
      url: 'https://{a-d}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      attributions:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    }),
  })

  // Создаем карту
  const map = new Map({
    target: mapContainer.value,
    layers: [grayLayer, vectorLayer],
    view: new View({
      center: coords,
      zoom: 16
    })
  })

  map.once('postrender', () => {
    const pixel = map.getPixelFromCoordinate(coords)

    let shiftedPixel

    if (window.innerWidth <= 425) {
      // 📱 Мобильный режим: центр по X, чуть выше по Y
      shiftedPixel = [pixel[0], pixel[1] + 100] // +100 = вверх (регулируй значение)
    } else {
      // 💻 Десктоп: смещаем вправо
      shiftedPixel = [pixel[0] - 200, pixel[1]]
    }

    const shiftedCoords = map.getCoordinateFromPixel(shiftedPixel)
    map.getView().setCenter(shiftedCoords)
  })

})

function changeVisibleDevBlock(){
  countClickDev.value++  

  if(countClickDev.value > 4) {
    blockDevVisible.value = true

    setTimeout(() => {
      blockDevVisible.value = false
      countClickDev.value = 0
    }, 5000);
  }
}

</script>

<style scoped>
.map {
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
}
</style>
