<template>
    <section class="starting" id="starting">
        <div class="starting__menu">

            <button class="starting__menu-btn" @click="props.scrollToAnchor('company')">О компании</button>

            <div
                class="starting__dropdown"
                @mouseenter="!isMobile && openServices()"
                @mouseleave="!isMobile && closeServices()"
            >

                <button
                    class="starting__menu-btn"
                    @click="handleServicesClick"
                >
                    Услуги

                    <img
                        class="starting__menu-btn-corner"
                        src="@/assets/sprites/arrowCorner.svg"
                        alt="Corner"
                    >
                </button>

                <div
                    class="starting__dropdown-menu"
                    :class="{
                        'starting__dropdown-menu--open': isServicesOpen
                    }"
                >
                    <button
                        class="starting__dropdown-item"
                        @click="props.scrollToAnchor('footer')"
                    >Продукты 1C</button>

                    <button
                        class="starting__dropdown-item"
                        @click="props.scrollToAnchor('footer')"
                    >Аренда серверов</button>

                    <button
                        class="starting__dropdown-item"
                        @click="props.scrollToAnchor('footer')"
                    >CRM Битрикс 24</button>

                    <button
                        class="starting__dropdown-item"
                        @click="props.scrollToAnchor('footer')"
                    >Аудит отдела продаж</button>
                </div>
            </div>

            <button class="starting__menu-btn" @click="props.scrollToAnchor('cases')">Кейсы</button>
            <!-- <button class="starting__menu-btn" @click="props.scrollToAnchor('callback')">Обратная связь</button> -->
            <button class="starting__menu-btn" @click="props.scrollToAnchor('footer')">Контакты</button>
        </div>

        <canvas ref="canvas" class="starting__canvas"></canvas>

        <div class="starting-container">
            <div class="starting__shadow"></div>

            <div class="starting__title">
                <span class="starting__title-text">IT решения</span>
                <span class="starting__title-text starting__title-text--accent">для вашего бизнеса</span>
                <span class="starting__title-text">на базе 1С и CRM систем</span>
            </div>

            <p class="starting__subtitle">
                Помогаем компаниям связать продажи, учёт, аналитику и внутренние процессы в единую систему без хаоса и ручной работы
            </p>
        </div>

        <img class="starting__corner" src="@/assets/sprites/arrowCorner.svg" alt="Corner">

        <div class="starting__btn" @click="props.scrollToAnchor('callback')">Получить консультацию</div>
    </section>
</template>

<script setup>
const props = defineProps({
    scrollToAnchor: {
        type: Function,
        required: true,
    }
});
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isServicesOpen = ref(false)
const windowWidth = ref(1920)

const isMobile = computed(() => windowWidth.value <= 768)

let servicesTimeout = null

const canvas = ref(null);
let ctx;
let animationFrameId;
let windowWidthOld = 0

// ─── НАСТРОЙКИ ───────────────────────────────────────────────
const CONFIG = {
    // Количество звёзд по брейкпоинтам
    starsCount: { phone: 60, tablet: 100, laptop: 140, desktop: 200 },

    // Размер звёзд (min и max)
    starSizeMin: 4.4,
    starSizeMax: 7.2,

    // Соотношение inner/outer луча звёздочки
    starInnerRatio: 0.25,

    // Доля 4-конечных звёзд (остальные — точки)
    starShapeRatio: 0.55,

    // Цвет звёзд (r, g, b)
    starColor: '255, 140, 50',

    // Свечение вокруг звёздочки (множитель от outer-радиуса)
    starGlowRadius: 2.5,
    starGlowOpacity: 0.25,

    // Скорость дрейфа (min и max)
    starSpeedMin: 0.05,
    starSpeedMax: 0.35,

    // Вертикальный разброс скорости (±)
    starDriftY: 0.15,

    // Мерцание
    twinkleSpeedMin: 0.005,
    twinkleSpeedMax: 0.025,
    twinkleBrightness: 0.4, // нижняя граница яркости (0–1)

    // Линии
    lineMaxDistance: 280,      // макс. дистанция для рисования линии
    lineMaxDistanceMobile: 120,
    lineColor: '255, 140, 50', // оранжевый (r, g, b)
    lineWidthMin: 0.3,
    lineWidthMax: 2.4,         // макс. толщина (у близких точек)
    lineOpacityMax: 0.45,      // макс. прозрачность линии
};
// ─────────────────────────────────────────────────────────────

const points = [];

function getStarsCount() {
    const w = window.innerWidth;
    if (w <= 500)  return CONFIG.starsCount.phone;
    if (w <= 768)  return CONFIG.starsCount.tablet;
    if (w <= 1024) return CONFIG.starsCount.laptop;
    return CONFIG.starsCount.desktop;
}

function getLineMaxDistance() {
    return window.innerWidth <= 768
        ? CONFIG.lineMaxDistanceMobile
        : CONFIG.lineMaxDistance;
}

function resize() {
    canvas.value.width  = canvas.value.clientWidth;
    canvas.value.height = canvas.value.clientHeight;
}

function createStar(fromEdge = false) {
    const size = Math.random() * (CONFIG.starSizeMax - CONFIG.starSizeMin) + CONFIG.starSizeMin;
    const speed = Math.random() * (CONFIG.starSpeedMax - CONFIG.starSpeedMin) + CONFIG.starSpeedMin;
    return {
        x: fromEdge ? -20 : Math.random() * canvas.value.width,
        y: Math.random() * canvas.value.height,
        size,
        opacity: Math.random() * 0.5 + 0.4,
        vx: speed,
        vy: (Math.random() - 0.5) * CONFIG.starDriftY * 2,
        twinkleSpeed:  Math.random() * (CONFIG.twinkleSpeedMax - CONFIG.twinkleSpeedMin) + CONFIG.twinkleSpeedMin,
        twinkleOffset: Math.random() * Math.PI * 2,
        isStar: Math.random() > CONFIG.starShapeRatio,
    };
}

function initPoints() {
    points.length = 0;
    const count = getStarsCount();
    for (let i = 0; i < count; i++) points.push(createStar(false));
}

function drawStarShape(x, y, outerR, innerR, opacity) {
    const spikes = 4;
    const step = Math.PI / spikes;
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.rotate(-Math.PI / 4);
    for (let i = 0; i < spikes * 2; i++) {
        const r = i % 2 === 0 ? outerR : innerR;
        const angle = i * step;
        if (i === 0) ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r);
        else         ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
    }
    ctx.closePath();
    ctx.fillStyle = `rgba(${CONFIG.starColor}, ${opacity})`;
    ctx.fill();
    ctx.restore();
}

function drawLines() {
    const maxDist = getLineMaxDistance();
    for (let i = 0; i < points.length; i++) {
        if (!points[i].isStar) continue; // пропускаем кружки
        for (let j = i + 1; j < points.length; j++) {
            if (!points[j].isStar) continue; // пропускаем кружки

            const dx = points[i].x - points[j].x;
            const dy = points[i].y - points[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist >= maxDist) continue;

            const t = 1 - dist / maxDist;
            const opacity = t * CONFIG.lineOpacityMax;
            const lineWidth = CONFIG.lineWidthMin + t * (CONFIG.lineWidthMax - CONFIG.lineWidthMin);

            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(${CONFIG.lineColor}, ${opacity})`;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
        }
    }
}

function animate() {
    if (canvas.value.style.opacity < 1) {
        canvas.value.style.opacity = Math.min(1, Number(canvas.value.style.opacity) + 0.005);
    }

    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

    const time = performance.now() * 0.001;

    // Двигаем точки
    for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x > canvas.value.width + 30) points[i] = createStar(true);
    }

    // Сначала линии (под звёздами)
    drawLines();

    // Потом звёзды
    for (const p of points) {
        const twinkle = 0.5 + 0.5 * Math.sin(time * p.twinkleSpeed * 60 + p.twinkleOffset);
        const opacity = p.opacity * (CONFIG.twinkleBrightness + (1 - CONFIG.twinkleBrightness) * twinkle);

        if (p.isStar) {
            const outer = p.size * 2.2;
            const inner = outer * CONFIG.starInnerRatio;

            // Свечение
            ctx.save();
            const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, outer * CONFIG.starGlowRadius);
            grd.addColorStop(0, `rgba(${CONFIG.starColor}, ${opacity * CONFIG.starGlowOpacity})`);
            grd.addColorStop(1, `rgba(${CONFIG.starColor}, 0)`);
            ctx.beginPath();
            ctx.arc(p.x, p.y, outer * CONFIG.starGlowRadius, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();
            ctx.restore();

            drawStarShape(p.x, p.y, outer, inner, opacity);
        } else {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${CONFIG.starColor}, ${opacity * 0.7})`;
            ctx.fill();
        }
    }

    animationFrameId = requestAnimationFrame(animate);
}

function handleResize() {
    if(windowWidthOld != canvas.value.clientWidth) {
        resize()
        initPoints()
    }
    windowWidth.value = window.innerWidth
}

function openServices() {
    clearTimeout(servicesTimeout)
    isServicesOpen.value = true
}

function closeServices() {
    servicesTimeout = setTimeout(() => {
        isServicesOpen.value = false
    }, 150)
}

function handleServicesClick() {

    if (isMobile.value) {
        isServicesOpen.value = !isServicesOpen.value
        return
    }

    props.scrollToAnchor('advantages')
}

onMounted(() => {
    
    canvas.value.style.opacity = 0;
    
    ctx = canvas.value.getContext('2d');

    handleResize()

    windowWidthOld = canvas.value.clientWidth

    window.addEventListener('resize', handleResize);
    animate();
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
    cancelAnimationFrame(animationFrameId);
});
</script>