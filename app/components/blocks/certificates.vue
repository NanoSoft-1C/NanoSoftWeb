<template>
    <section id="certificates" class="certificates wrapper">
        <h2 class="certificates-title title-h2">Наши сертификаты</h2>

        <div
            id="certificatesSlider"
            class="DTScroll slider certificatesSlider-slider" 
            direction="horizontal"
            touche="true"
            anchor="true"
            points='{"0":4, "768":3, "550":2, "375":1}'
            @mouseenter="mouseInCertificates = true"
            @mouseleave="mouseInCertificates = false"
        >
            <div class="certificatesSlider-line">
                <img
                    v-for="index in 10"
                    :key="`certificates-${index}`"
                    class="certificatesSlider-item"
                    :src="`/images/certificates/${index}.jpg`"
                    :alt="`certificates-${index}`"
                >
            </div>

            <!-- <div class="certificatesSlider-shadow certificatesSlider-shadow-prev"></div>
            <div class="certificatesSlider-shadow certificatesSlider-shadow-next"></div> -->

            <button 
                ref="certificatesSliderBtnPrev"
                class="certificatesSlider-btn-prev"
            ></button>
            <button 
                ref="certificatesSliderBtnNext"
                class="certificatesSlider-btn-next"
            ></button>
        </div>
    </section>
</template>

<script setup>
    import { onMounted } from 'vue'
    import { DTScroll } from '@/assets/scripts/slider'

    const certificatesSliderBtnPrev = ref(null)
    const certificatesSliderBtnNext = ref(null)

    const mouseInCertificates = ref(false)

    onMounted(() => {
        new MutationObserver((item) => {
            DTScroll.sliderUpdateDeep('certificatesSlider')
        }).observe(
            document.querySelector('#certificatesSlider').querySelector('.certificatesSlider-line'), 
            { childList: true, subtree: true }
        )
        DTScroll.initScroll('certificatesSlider')


        let countCertificatesSliderBtn = 0
        let directionCertificatesSlider = true
        setInterval(() => {
            if (mouseInCertificates.value) return

            if (directionCertificatesSlider) {
                certificatesSliderBtnNext.value.click()
                countCertificatesSliderBtn++
            } else {
                certificatesSliderBtnPrev.value.click()
                countCertificatesSliderBtn--
            }

            if (
                countCertificatesSliderBtn == 0 || countCertificatesSliderBtn == (10-5)
            ) directionCertificatesSlider = !directionCertificatesSlider
        }, 3000);
    })

    
</script>