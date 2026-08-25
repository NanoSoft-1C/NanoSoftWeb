<template>
    <section class="ctaBanner wrapper" id="ctaBanner">
        <div class="ctaBanner__inner cutCorners">

            <span class="ctaBanner__dots" aria-hidden="true"></span>

            <div class="ctaBanner__text">
                <h2 class="ctaBanner__title">Готовы обсудить ваш проект?</h2>
                <p class="ctaBanner__subtext">Расскажите о своей задаче, и мы предложим оптимальное решение.</p>
            </div>

            <button class="ctaBanner__btn btn" @click="scrollToAnchor('callback')">
                Получить консультацию
                <svg class="btn__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                </svg>
            </button>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    scrollToAnchor: {
        type: Function,
        required: true,
    },
});
</script>
