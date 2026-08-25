<template>
    <span class="frame" :style="style" aria-hidden="true">

        <span class="frame-line frame-line--v"></span>

        <span class="frame-line frame-line--top"></span>

        <span v-if="bottom" class="frame-line frame-line--bottom">
            <span v-if="node" class="frame-node"></span>
        </span>

        <svg class="frame-cut frame-cut--top" viewBox="0 0 24 24">
            <line x1="0" y1="24" x2="24" y2="0" />
        </svg>

        <svg class="frame-cut frame-cut--bottom" viewBox="0 0 24 24">
            <line x1="0" y1="0" x2="24" y2="24" />
        </svg>

    </span>
</template>

<script setup>
    import { computed } from 'vue'

    // Декоративная «скоба»: вертикаль слева со срезанными углами,
    // короткая линия сверху и длинная снизу с кружком-терминатором.
    const props = defineProps({
        // Длина верхней линии, px
        top: {
            type: Number,
            default: 60,
        },
        // Длина нижней линии, px. 0 — рисуем скобу без нижней линии
        bottom: {
            type: Number,
            default: 320,
        },
        // Кружок на конце нижней линии
        node: {
            type: Boolean,
            default: true,
        },
    })

    const style = computed(() => ({
        '--frame-top': props.top + 'px',
        '--frame-bottom': props.bottom + 'px',
    }))
</script>
