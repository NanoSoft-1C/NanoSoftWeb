<template>
    <section class="servicesHead" id="servicesHead">
        <canvas ref="canvas" class="servicesHead__canvas"></canvas>
        <div class="servicesHead__glow"></div>
        <div class="servicesHead__veil"></div>

        <div class="servicesHead__inner wrapper">
            <div class="servicesHead__lead">

                <div class="servicesHead__frame">
                    <span class="servicesHead__frame-line servicesHead__frame-line--v"></span>
                    <span class="servicesHead__frame-line servicesHead__frame-line--top"></span>
                    <span class="servicesHead__frame-line servicesHead__frame-line--bottom"></span>
                    <svg class="servicesHead__frame-cut servicesHead__frame-cut--top" viewBox="0 0 24 24">
                        <line x1="0" y1="24" x2="24" y2="0" />
                    </svg>
                    <svg class="servicesHead__frame-cut servicesHead__frame-cut--bottom" viewBox="0 0 24 24">
                        <line x1="0" y1="0" x2="24" y2="24" />
                    </svg>
                    <span class="servicesHead__node"></span>
                </div>

                <div class="servicesHead__content">
                    <span class="servicesHead__label">
                        <span class="servicesHead__label-dots"><i></i><i></i><i></i></span>
                        Наши услуги
                    </span>

                    <h2 class="servicesHead__title">
                        Что мы делаем<br>
                        <span class="servicesHead__title-accent">для вашего бизнеса</span>
                    </h2>

                    <p class="servicesHead__text">
                        Предлагаем полный спектр услуг по автоматизации
                        и цифровизации бизнеса на базе 1С, CRM.
                        Индивидуальный подход и комплексное
                        сопровождение на каждом этапе.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const canvas = ref(null);
let ctx;
let animationFrameId;
let widthOld = 0;

const points = [];

function getPointsCount() {
    const width = window.innerWidth;

    if (width <= 425) return 20;
    if (width <= 768) return 26;
    if (width <= 1024) return 36;

    return 70;
}

function dynamicMaxDistance() {
    const width = window.innerWidth;

    if (width <= 425) return 260;
    if (width <= 768) return 340;
    if (width <= 1024) return 380;

    return 420;
}

function resize() {
    if (!canvas.value) return;

    canvas.value.width = canvas.value.clientWidth;
    canvas.value.height = canvas.value.clientHeight;
}

function initPoints() {
    if (!canvas.value) return;

    points.length = 0;

    const count = getPointsCount();

    for (let i = 0; i < count; i++) {
        points.push({
            // облако смещено в правую часть (под референс)
            x: (0.4 + Math.random() * 0.65) * canvas.value.width,
            y: Math.random() * canvas.value.height,
            vx: (Math.random() - 0.5) * 1.2,
            vy: (Math.random() - 0.5) * 1.2,
            radius: 2.2,

            isStar: Math.random() < 0.16,
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
        canvas.value.style.opacity = Number(canvas.value.style.opacity) + 0.006;
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

            const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);

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

    if (widthOld !== canvas.value.clientWidth) {
        resize();
        initPoints();
        widthOld = canvas.value.clientWidth;
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
