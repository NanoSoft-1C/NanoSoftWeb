<template>
    <section id="certificates" class="certificates">
        <h2 class="certificates-title title-h2">Наши <span class="text-orange">сертификаты</span></h2>

        <div
            id="certificatesSlider"
            class="DTScroll slider certificatesSlider-slider" 
            direction="horizontal"
            touche="true"
            @mouseenter="mouseInCertificates = true"
            @mouseleave="mouseInCertificates = false"
        >
            <div class="certificatesSlider-line">
                <div class="certificatesSlider-item">
                    <img
                        v-for="index in 10"
                        :key="`certificates-${index}`"
                        class="certificatesSlider-item-img"
                        :src="`/images/certificates/${index}.jpg`"
                        :alt="`certificates-${index}`"
                    >
                </div>
            </div>

            <div class="certificatesSlider-shadow certificatesSlider-shadow-prev"></div>
            <div class="certificatesSlider-shadow certificatesSlider-shadow-next"></div>
        </div>
    </section>
</template>

<script setup>
    import { onMounted } from 'vue'
    import { DTScroll } from '@/assets/scripts/slider'

    const mouseInCertificates = ref(false)

    onMounted(() => {
        new MutationObserver((item) => {
            DTScroll.sliderUpdateDeep('certificatesSlider')
        }).observe(
            document.querySelector('#certificatesSlider').querySelector('.certificatesSlider-line'), 
            { childList: true, subtree: true }
        )
        DTScroll.initScroll('certificatesSlider')
    })
    
</script>