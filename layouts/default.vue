<template>
    <div id="app">
        <slot />
    </div>
</template>

<script setup>

    const route = useRoute()
    const pagesSEO = {
        'index': {
            title: 'Нано Софт',
            keywords: '1С автоматизация, внедрение 1С, сопровождение 1С, CRM-системы, разработка, интеграция 1С, индивидуальные решения, НаноСофт, автоматизация бизнеса, IT-поддержка',
            description: 'Компания «НаноСофт» - эксперт в разработке и внедрении решений на платформе 1С, создании CRM-систем. Помогаем бизнесу автоматизировать процессы, снизить затраты и повысить эффективность. Поддержка, сопровождение и гарантия результата 12 месяцев!'
        }
    }
    const pageSEO = pagesSEO[route.name]

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