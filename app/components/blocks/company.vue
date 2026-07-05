<template>
    <section ref="wrapper" class="company wrapper">
        <div class="company__franch-container"> 
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

                <div class="company__subtext">А к р е д и т о в а н н а я ᠌ к о м п а н и я</div>
            </div>

            <div class="company__frame">
                <span class="company__frame-line company__frame-line--v"></span>
                <span class="company__frame-line company__frame-line--top"></span>
                <svg class="company__frame-cut company__frame-cut--top" viewBox="0 0 24 24">
                    <line x1="0" y1="24" x2="24" y2="0" />
                </svg>
                <svg class="company__frame-cut company__frame-cut--bottom" viewBox="0 0 24 24">
                    <line x1="0" y1="0" x2="24" y2="24" />
                </svg>
                <span class="company__dots"><i></i><i></i><i></i></span>
                <span class="company__node"></span>
            </div>
        </div>

        <div class="company__content">
            <h2 class="company__content-title title-h2">НАНО СОФТ</h2>

            <span class="company__content-line">
                <span class="company__content-rule"></span>
                <span class="company__content-node"></span>
            </span>

            <p class="company__content-text text-medium">
                Официальный партнер 1С и аккредитованная IT-компания <br>
                с подтвержденной экспертизой в области автоматизации <br>
                и цифровизации бизнеса
            </p>
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

