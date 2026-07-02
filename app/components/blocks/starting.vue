<template>
    <section class="starting" id="starting">
        <canvas ref="canvas" class="starting__canvas"></canvas>
        <div class="starting__glow"></div>
        <div class="starting__veil"></div>

        <div class="starting-container">
            <div class="starting__hero">

                <div class="starting__frame">
                    <span class="starting__frame-line starting__frame-line--v"></span>
                    <span class="starting__frame-line starting__frame-line--top"></span>
                    <svg class="starting__frame-cut starting__frame-cut--top" viewBox="0 0 24 24">
                        <line x1="0" y1="24" x2="24" y2="0" />
                    </svg>
                    <svg class="starting__frame-cut starting__frame-cut--bottom" viewBox="0 0 24 24">
                        <line x1="0" y1="0" x2="24" y2="24" />
                    </svg>
                    <span class="starting__dots starting__dots--corner"><i></i><i></i><i></i></span>
                    <span class="starting__node starting__node--bottom"></span>
                </div>

                <div class="starting__content">
                    <!-- <div class="starting__topline">
                        <span class="starting__dots"><i></i><i></i><i></i></span>
                        <span class="starting__rule"></span>
                        <span class="starting__node"></span>
                    </div> -->

                    <h1 class="starting__title">
                        <span class="starting__title-line">IT решения</span>
                        <span class="starting__title-line starting__title-line--accent">для вашего бизнеса</span>
                        <span class="starting__title-line">на базе 1С и CRM систем</span>
                    </h1>

                    <p class="starting__subtext">
                        Помогаем компаниям связать продажи, учёт, аналитику<br>
                        и внутренние процессы в единую систему без хаоса<br>
                        и ручной работы
                    </p>

                    <button class="starting__cta" @click="props.scrollToAnchor('company')">
                        <span class="starting__cta-text">Узнать больше</span>
                        <span class="starting__cta-line">
                            <span class="starting__rule"></span>
                            <span class="starting__node"></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
    scrollToAnchor: {
        type: Function,
        required: true,
    }
});

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
            // смещаем облако точек в правую часть экрана (референс)
            x: (0.35 + Math.random() * 0.7) * canvas.value.width,
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

function cssRgb(name, fallback) {
    return getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim() || fallback;
}

let accentRgb = '255, 177, 26';
let accentLightRgb = '255, 200, 91';

function drawLine(p1, p2, opacity) {
    ctx.strokeStyle = `rgba(${accentRgb}, ${opacity * 0.7})`;
    ctx.lineWidth = 0.6;

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

            gradient.addColorStop(0, `rgba(${accentLightRgb}, ${1 * twinkle})`);
            gradient.addColorStop(0.3, `rgba(${accentRgb}, ${0.45 * twinkle})`);
            gradient.addColorStop(1, `rgba(${accentRgb}, 0)`);

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.fillStyle = `rgba(${accentLightRgb}, ${alpha})`;
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
}

onMounted(() => {
    if (!canvas.value) return;

    canvas.value.style.opacity = 0;

    ctx = canvas.value.getContext('2d');

    accentRgb = cssRgb('--color-accent-rgb', '255, 177, 26');
    accentLightRgb = cssRgb('--color-accent-light-rgb', '255, 200, 91');

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