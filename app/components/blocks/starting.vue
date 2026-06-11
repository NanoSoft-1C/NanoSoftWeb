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
                    :class="{ 'starting__dropdown-menu--open': isServicesOpen }"
                >
                    <button class="starting__dropdown-item" @click="props.scrollToAnchor('footer')">Продукты 1C</button>
                    <button class="starting__dropdown-item" @click="props.scrollToAnchor('footer')">Аренда серверов</button>
                    <button class="starting__dropdown-item" @click="props.scrollToAnchor('footer')">CRM Битрикс 24</button>
                    <button class="starting__dropdown-item" @click="props.scrollToAnchor('footer')">Аудит отдела продаж</button>
                </div>
            </div>

            <button class="starting__menu-btn" @click="props.scrollToAnchor('cases')">Кейсы</button>
            <button class="starting__menu-btn" @click="props.scrollToAnchor('callback')">Обратная связь</button>
            <button class="starting__menu-btn" @click="props.scrollToAnchor('footer')">Контакты</button>
        </div>

        <canvas ref="canvas" class="starting__canvas"></canvas>

        <div class="starting-container">
            <div class="starting__shadow"></div>

            <img class="starting__logo" src="@/assets/sprites/NSLogoGorizont.svg" alt="Логотип">

            <div class="starting__title">
                <p class="starting__title-text--mobile title-h3">
                    IT-решения для вашего бизнеса<br>
                    на базе 1С и CRM систем
                </p>

                <span class="starting__title-main">
                    IT-решения для вашего бизнеса
                </span>

                <div class="starting__title-second-line">
                    <span>на базе</span>

                    <div class="starting__title-transfer">
                        <span class="starting__title-transfer-item">1С</span>
                    </div>

                    <span>и CRM систем</span>
                </div>
            </div>
        </div>

        <img class="starting__corner" src="@/assets/sprites/arrowCorner.svg" alt="Corner">
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
    scrollToAnchor: {
        type: Function,
        required: true,
    }
});

const isServicesOpen = ref(false);
const windowWidth = ref(1920);
const isMobile = computed(() => windowWidth.value <= 768);

let servicesTimeout = null;

const canvas = ref(null);
let ctx;
let animationFrameId;
let windowWidthOld = 0;

const points = [];

function getPointsCount() {
    const width = window.innerWidth;

    if (width <= 425) return 25;
    if (width <= 768) return 30;
    if (width <= 1024) return 40;

    return 80;
}

function dynamicMaxDistance() {
    const width = window.innerWidth;

    if (width <= 425) return 300;
    if (width <= 768) return 400;
    if (width <= 1024) return 420;

    return 450;
}

function resize() {
    if (!canvas.value) return;

    canvas.value.width = canvas.value.clientWidth;
    canvas.value.height = canvas.value.clientHeight;
}

function initPoints() {
    if (!canvas.value) return;

    points.length = 0;

    const currentPointsCount = getPointsCount();

    for (let i = 0; i < currentPointsCount; i++) {
        points.push({
            x: Math.random() * canvas.value.width,
            y: Math.random() * canvas.value.height,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            radius: 2.4,

            isStar: Math.random() < 0.14,
            twinklePhase: Math.random() * Math.PI * 2,
            twinkleSpeed: 0.018 + Math.random() * 0.025,
        });
    }
}

function drawLine(p1, p2, opacity) {
    const whiteRgb = getComputedStyle(document.documentElement)
        .getPropertyValue('--color-white-rgb')
        .trim() || '255, 255, 255';

    ctx.strokeStyle = `rgba(${whiteRgb}, ${opacity})`;
    ctx.lineWidth = 0.5;

    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
}

function animate() {
    if (!canvas.value || !ctx) return;

    if (Number(canvas.value.style.opacity) < 1) {
        canvas.value.style.opacity = Number(canvas.value.style.opacity) + 0.005;
    }

    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

    const maxDistance = dynamicMaxDistance();

    for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= canvas.value.width) p.vx *= -1;
        if (p.y <= 0 || p.y >= canvas.value.height) p.vy *= -1;
    }

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const dx = points[i].x - points[j].x;
            const dy = points[i].y - points[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDistance) {
                const opacity = 1 - dist / maxDistance;
                drawLine(points[i], points[j], opacity);
            }
        }
    }

    for (const p of points) {
        let alpha = 0.85;
        let radius = p.radius;

        if (p.isStar) {
            p.twinklePhase += p.twinkleSpeed;

            const twinkle = Math.pow((Math.sin(p.twinklePhase) + 1) / 2, 5);

            alpha = 0.45 + twinkle * 0.55;
            radius = p.radius + twinkle * 1.8;

            const glowRadius = 8 + twinkle * 18;

            const gradient = ctx.createRadialGradient(
                p.x,
                p.y,
                0,
                p.x,
                p.y,
                glowRadius
            );

            gradient.addColorStop(0, `rgba(255, 255, 255, ${1 * twinkle})`);
            gradient.addColorStop(0.3, `rgba(255, 255, 255, ${0.45 * twinkle})`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
    }

    animationFrameId = requestAnimationFrame(animate);
}

function handleResize() {
    if (!canvas.value) return;

    if (windowWidthOld !== canvas.value.clientWidth) {
        resize();
        initPoints();
        windowWidthOld = canvas.value.clientWidth;
    }

    windowWidth.value = window.innerWidth;
}

function openServices() {
    clearTimeout(servicesTimeout);
    isServicesOpen.value = true;
}

function closeServices() {
    servicesTimeout = setTimeout(() => {
        isServicesOpen.value = false;
    }, 150);
}

function handleServicesClick() {
    if (isMobile.value) {
        isServicesOpen.value = !isServicesOpen.value;
        return;
    }

    props.scrollToAnchor('advantages');
}

onMounted(() => {
    if (!canvas.value) return;

    canvas.value.style.opacity = 0;

    ctx = canvas.value.getContext('2d');

    handleResize();

    window.addEventListener('resize', handleResize);

    animate();
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);

    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
});
</script>