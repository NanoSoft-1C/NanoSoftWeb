<template>
    <section ref="wrapper" class="company wrapper">
        <div class="company__franch" ref="companyFranchSVG">
            <img src="@/assets/sprites/1CLogo.svg" class="company__franch-background">

            <svg class="company__franch-mask" preserveAspectRatio="xMidYMid meet">
                <mask id="wipeMask">
                <rect width="100%" height="100%" fill="var(--color-white)"/>

                <path id="wipe1"
                    d="M55 45.0039L598.5 113.504L39.5 142.504L617.5 251.504L67 244.504L588 340.004H45"
                    fill="none" stroke="black" stroke-width="90" stroke-linecap="round" stroke-linejoin="round"/>
                </mask>

                <rect width="100%" height="100%" fill="var(--color-black)" mask="url(#wipeMask)"/>
            </svg>
        </div>

        <div class="company__content">
            <h2 class="company__content-title title-h2">Компания Нано софт</h2>
            <span class="company__content-line"></span>
            <p class="company__content-text text-big">
                Эксперт в разработке и сопровождении индивидуальных программных решений <br>
                на платформе 1С, создании CRM-систем и интеграций, а также технической поддержке
            </p>
            <!-- <div>
                <span class="company__content-line" style="margin: 0 0 8px 0; background-color: rgba(var(--color-white-rgb), 0.3);"></span>
                <p style="color: rgba(var(--color-white-rgb), 0.3);">Мы акредитованная ИТ компания</p>
            </div> -->
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const companyFranchSVG = ref(null)

    onMounted(() => {
        if (!companyFranchSVG.value) return

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelector('#wipe1').style.animation = 'wipe 2s ease-in-out forwards'
                    obs.unobserve(entry.target)
                }
            })
        }, { threshold: 1.0 })

        observer.observe(companyFranchSVG.value)
    })
</script>

