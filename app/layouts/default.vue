<template>
    <div id="app">
        <Header :isScrolled="isScrolled" :scrollToAnchor="scrollToAnchor"></Header>

        <slot />

        <BlocksCallback id="callback"></BlocksCallback>

        <Footer id="footer"></Footer>
    </div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'


    const isScrolled = ref(Boolean)

    function handleScroll() {
        isScrolled.value = window.scrollY > window.innerHeight/2
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
        handleScroll()
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })


    function scrollToAnchor(anchorId) {
        if (process.server) return 

        const element = document.getElementById(anchorId)
        const header = document.getElementById('headerFixed')
        if (!element) return

        const elementRect = element.getBoundingClientRect()
        const elementTop = elementRect.top + window.scrollY

        const scrollPosition = elementTop - header.offsetHeight

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        })
    }


    const route = useRoute()
    const pagesSEO = {
        'index': {
            title: 'Нано Софт',
            keywords: '1С автоматизация, внедрение 1С, сопровождение 1С, CRM-системы, разработка, интеграция 1С, индивидуальные решения, НаноСофт, автоматизация бизнеса, IT-поддержка',
            description: 'Компания «Нано Софт» - эксперт в разработке и внедрении решений на платформе 1С, создании CRM-систем. Помогаем бизнесу автоматизировать процессы, снизить затраты и повысить эффективность. Поддержка, сопровождение и гарантия результата 12 месяцев!'
        },
        'services': {
            title: 'Нано Софт - Услуги',
            keywords: '1С автоматизация, внедрение 1С, сопровождение 1С, CRM-системы, разработка, интеграция 1С, индивидуальные решения, НаноСофт, автоматизация бизнеса, IT-поддержка',
            description: 'Компания «Нано Софт» - эксперт в разработке и внедрении решений на платформе 1С, создании CRM-систем. Помогаем бизнесу автоматизировать процессы, снизить затраты и повысить эффективность. Поддержка, сопровождение и гарантия результата 12 месяцев!'
        },
        'null': {
            title: '',
            keywords: '',
            description: ''
        },
    }
    
    const pageSEO = pagesSEO[route.name] || pagesSEO['null']
    useHead({
        title: pageSEO.title,
        meta: [
            { name: 'keywords', content: pageSEO.keywords },
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { property: "og:title", content: pageSEO.title },
            { property: "og:url", content: `https://nanosoft.team${route.name != 'index' ? '/' + route.name : ''}` },
            { name: 'description', content: pageSEO.description },
            { property: "og:description", content: pageSEO.description },
            { property: "og:image", content: 'https://nanosoft.team/images/NSLogo.png' }
        ]
    })

</script>