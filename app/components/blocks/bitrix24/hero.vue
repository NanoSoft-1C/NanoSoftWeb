<template>
    <section class="bitrixHero wrapper wrapper--hero" id="bitrixHero">
        <div class="bitrixHero__inner">

            <UiFrame :bottom="380" />

            <div class="bitrixHero__content">
                <span class="label"><span class="label-dots"><i></i><i></i><i></i></span>Интеграция CRM и 1С</span>

                <h1 class="bitrixHero__title title-h1">Внедрение<br>Битрикс 24</h1>

                <p class="bitrixHero__text text-medium">
                    Внедрим Битрикс24 под любые задачи вашего бизнеса,
                    от базовой настройки до комплексной автоматизации
                    и интеграций с внешними сервисами.
                </p>

                <button class="bitrixHero__btn btn" @click="props.scrollToAnchor('callback')">
                    Обсудить проект
                    <svg class="btn__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                    </svg>
                </button>
            </div>

            <div class="bitrixHero__image">
                <img class="bitrixHero__image-img" src="/images/bitrix24/hero-bitrix.png" alt="Внедрение Битрикс24">
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
