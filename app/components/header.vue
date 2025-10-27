<template>
    <header class="header">
        <div class="header__menu">
            <button class="header__menu-btn" @click="props.scrollToAnchor('company')">О компании</button>
            <button class="header__menu-btn" @click="props.scrollToAnchor('advantages', 50)">Услуги</button>
            <button class="header__menu-btn" @click="props.scrollToAnchor('cases')">Кейсы</button>
            <button class="header__menu-btn" @click="props.scrollToAnchor('footer')">Контакты</button>
        </div>

        <canvas ref="canvas" class="header__canvas"></canvas>

        <div class="header-container">
            <div class="header__shadow"></div>

            <div class="header__subtitle">разработка / внедрение / поддержка</div>

            <img class="header__logo" src="@/assets/sprites/NSLogo.svg" alt="Логотип">

            <div class="header__title">
                <div class="header__title-container">
                    <p class="header__title-text--mobile title-h3">Экспертные решения для вашего бизнеса</p>

                    <span class="header__title-text">Экспертные решения</span>
                    <div class="header__title-transfer">
                        <span class="header__title-transfer-item">1С</span>
                        <span class="header__title-transfer-item">CRM</span>
                    </div>
                </div>

                <span class="header__title-text">для вашего бизнеса</span>
            </div>
        </div>

        <img class="header__corner" src="@/assets/sprites/arrowCorner.svg" alt="Corner">
    </header>
</template>

<script setup>
const props = defineProps({
    scrollToAnchor: {
        type: Function,
        required: true,
    }
});
import { ref, onMounted, onBeforeUnmount } from 'vue';

const canvas = ref(null);
let ctx;
let animationFrameId;
let windowWidthOld = 0

const points = [];

function getPointsCount() {
    const width = window.innerWidth;
    if (width <= 425) {
        return 25;
    } else if (width <= 768) {
        return 30;
    } else if (width <= 1024) {
        return 40;
    } else {
        return 80;
    }
}

function dynamicMaxDistance() {
    const width = window.innerWidth;
    if (width <= 425) {
        return 300;
    } else if (width <= 768) {
        return 400;
    } else if (width <= 1024) {
        return 420;
    } else {
        return 450;
    }
}

function resize() {
    canvas.value.width = canvas.value.clientWidth;
    canvas.value.height = canvas.value.clientHeight;
}

function initPoints() {
    points.length = 0;
    const currentPointsCount = getPointsCount();
    for (let i = 0; i < currentPointsCount; i++) {
        points.push({
            x: Math.random() * canvas.value.width,
            y: Math.random() * canvas.value.height,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            radius: 3,
        });
    }
}

function drawLine(p1, p2, opacity) {
    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
}

function animate() {
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
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    animationFrameId = requestAnimationFrame(animate);
}

function handleResize() {
    if(windowWidthOld != canvas.value.clientWidth) {
        resize()
        initPoints()
    }
}

onMounted(() => {

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
