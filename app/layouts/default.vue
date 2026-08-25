<template>
    <div id="app">
        <Header :scrollToAnchor="scrollToAnchor"></Header>

        <slot />

        <BlocksCallback v-if="isCallbackVisible" id="callback"></BlocksCallback>

        <Footer id="footer"></Footer>
    </div>
</template>

<script setup>
    const scrollToAnchor = useScrollToAnchor()


    const route = useRoute()

    // Страницы, на которых блок обратной связи не показывается
    const pagesWithoutCallback = []

    const isCallbackVisible = computed(
        () => !pagesWithoutCallback.includes(route.name)
    )

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
        'Integration-bitrix24': {
            title: 'Нано Софт - Внедрение и интеграция Битрикс24',
            keywords: 'внедрение Битрикс24, интеграция Битрикс24 и 1С, настройка CRM Битрикс24, автоматизация бизнес-процессов, корпоративный портал, Битрикс24 под ключ, НаноСофт',
            description: 'Внедряем Битрикс24 под задачи вашего бизнеса: настройка CRM и продаж, автоматизация бизнес-процессов, корпоративный портал, аналитика и интеграция с 1С любой сложности.'
        },
        'server-rent': {
            title: 'Нано Софт - Аренда серверов и VPS',
            keywords: 'аренда сервера, аренда VPS, выделенный сервер, сервер для 1С, сервер для Битрикс24, хостинг CRM, серверная инфраструктура, НаноСофт',
            description: 'Аренда выделенных серверов и VPS для 1С, CRM, Битрикс24, сайтов и высоконагруженных проектов. Подбор конфигурации, настройка, резервное копирование и поддержка 24/7.'
        },
        'null': {
            title: '',
            keywords: '',
            description: ''
        },
    }
    
    const pageSEO = pagesSEO[route.name] || pagesSEO['null']

    const pageUrl = `https://nanosoft.team${route.name != 'index' ? '/' + route.name : ''}`

    useHead({
        title: pageSEO.title,
        htmlAttrs: { lang: 'ru' },
        link: [
            { rel: 'canonical', href: pageUrl }
        ],
        meta: [
            { property: "og:type", content: 'website' },
            { property: "og:site_name", content: 'Нано Софт' },
            { property: "og:locale", content: 'ru_RU' },
            { name: 'keywords', content: pageSEO.keywords },
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { property: "og:title", content: pageSEO.title },
            { property: "og:url", content: pageUrl },
            { name: 'description', content: pageSEO.description },
            { property: "og:description", content: pageSEO.description },
            { property: "og:image", content: 'https://nanosoft.team/images/NSLogo.png' }
        ]
    })

</script>