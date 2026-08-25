<template>
    <section class="serverHero wrapper wrapper--hero" id="serverHero">
        <div class="serverHero__inner">

            <UiFrame :bottom="380" />

            <div class="serverHero__content">
                <span class="label"><span class="label-dots"><i></i><i></i><i></i></span>Облачная инфраструктура</span>

                <h1 class="serverHero__title title-h1">Аренда<br>серверов</h1>

                <p class="serverHero__text text-medium">
                    Выделенные серверы и VPS для бизнеса,
                    1С, CRM, сайтов и высоконагруженных проектов
                </p>

                <button class="serverHero__btn btn" @click="props.scrollToAnchor('callback')">
                    Подобрать сервер
                    <svg class="btn__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                    </svg>
                </button>
            </div>

            <div class="serverHero__image">
                <img class="serverHero__image-img" src="/images/server-rent/server-hero.png" alt="Аренда серверов">
            </div>

        </div>
    </section>
</template>

<script setup>
    const props = defineProps({
        scrollToAnchor: {
            type: Function,
            required: true,
        },
    })
</script>
