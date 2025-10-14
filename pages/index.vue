<template>
    <header 
        :class="[
            'headerFixed',
            isScrolled ? 'headerFixed--visible' : ''
        ]"
    >
        <div class="headerFixed-wrapper">
            <img class="headerFixed__logo" src="@/assets/sprites/NSLogoGorizont.svg" alt="Логотип">

            <div class="headerFixed__menu-container">
                <!-- <svg class="headerFixed__menu-svg">
                  <use xlink:href="@/assets/sprites/sprite.svg#menu"></use>
                </svg> -->

                <img class="headerFixed__menu-svg" @click="isScrolled = false" src="@/assets/sprites/menu.svg" alt="menu.svg">

                <div 
                    class="headerFixed__menu"
                    :class="{ 'headerFixed__menu--open': isMenuOpen }"
                >
                    <div class="headerFixed__menu-btns">
                        <button class="headerFixed__menu-btn" @click="scrollToAnchor('company'); isScrolled = false">О компании</button>
                        <button class="headerFixed__menu-btn" @click="scrollToAnchor('advantages', 50); isScrolled = false">Услуги</button>
                        <button class="headerFixed__menu-btn" @click="scrollToAnchor('cases'); isScrolled = false">Кейсы</button>
                        <button class="headerFixed__menu-btn" @click="scrollToAnchor('footer'); isScrolled = false">Контакты</button>
                    </div>

                    <div 
                        class="headerFixed__menu-links" 
                        :class="{ 'headerFixed__menu-links--visible': isMenuOpen }"
                    >
                        <p class="text-medium">Телефон:</p>
                        <a class="text-small" href="tel:+78124071767">+7 (812) 407-17-67</a>
                        <br>
                        <p class="text-medium">Email:</p>
                        <a class="text-small" href="mailto:nanosoft-1c@yandex.ru">nanosoft-1c@yandex.ru</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="headerFixed__shadow"></div>
    </header>

    <Header
        :scrollToAnchor="scrollToAnchor"
    ></Header>

    <BlocksCompany 
        id="company" 
        class="canvasItem"
        points="[
            {
                type: 'point',
                direction: 'bottom',
                position: {
                    x: {
                        value: 'right'
                    },
                    y: {
                        elem: 'line-title',
                        value: 'center'
                    }
                }
            },{
                type: 'line',
                offset: 'bottom',
                position: {
                    x: {
                        value: 'right'
                    },
                    y: {
                        value: 'bottom'
                    }
                }
            },{
                type: 'corner',
                corner: 'top-left',
                position: {
                    x: {
                        value: 'left'
                    },
                    y: {
                        value: 'bottom'
                    }
                }
            },{
                type: 'line',
                offset: 'right',
                position: {
                    x: {
                        value: 'left'
                    },
                    y: {
                        value: 'bottom'
                    }
                }
            },{
                type: 'corner',
                corner: 'right-bottom',
                position: {
                    x: {
                        value: 'left'
                    },
                    y: {
                        value: 'bottom'
                    }
                }
            },{
                type: 'line',
                ending: true,
                corner: 'top',
                position: {
                    x: {
                        value: 'left'
                    },
                    y: {
                        value: 'bottom'
                    }
                }
            }
        ]"
    ></BlocksCompany>

    <BlocksResult
        
    ></BlocksResult>

    <BlocksAdvantages
        id="advantages"
        :scrollToAnchor="scrollToAnchor"
    ></BlocksAdvantages>

    <BlocksCompanys id="cases"></BlocksCompanys>

    <BlocksList 
        :titleHead="'Работаем честно и с гарантией результата '"
        :titleSubtext="'Предоставляем множество разных фактором, что нам стоит доверять '"  
        :textArray="textArray" 
        :srcImage="'woman-computer'"
    ></BlocksList>

    <BlocksList
        :titleHead="'Техническая поддержка и сопровождение вашего бизнеса'" 
        :titleSubtext="'Вы не останетесь один на один с вашей проблемой'"   
        :textArray="textArray2" 
        :srcImage="'woman-computer-2'" 
        class="list--right"
    ></BlocksList>

    <BlocksCallback id="callback"></BlocksCallback>

    <Footer id="footer"></Footer>

</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'
    import { DTLine } from '@/assets/scripts/lines'


    const isScrolled = ref(false)
    const isMobile = ref(false)
    const isMenuOpen = ref(false)


    function handleScroll() {
        isScrolled.value = window.scrollY > window.innerHeight/2
    }

    function handleResize() {
        isMobile.value = window.innerWidth <= 425
    }

    function changeVisibleMenu() {
        isMenuOpen.value = !isMenuOpen.value
    }

    onMounted(() => {
        handleResize()
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)

        DTLine.initAllLines()
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleResize)
    })

    function scrollToAnchor(anchorId, headerOffset = 0) {
        if (process.server) return 

        const element = document.getElementById(anchorId)
        if (!element) return

        const elementRect = element.getBoundingClientRect()
        const elementTop = elementRect.top + window.scrollY
        const elementHeight = elementRect.height
        const windowHeight = window.innerHeight

        const scrollPosition =
            elementTop - (windowHeight / 2) + (elementHeight / 2) - headerOffset

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        })
    }

    const textArray = ref([
        ['Прозрачный договор с четкими сроками и результатами', 
        'Заключая с нами договор, вы получаете уверенность в соблюдении сроков и достижении целей. Мы ставим перед собой амбициозные задачи и гарантируем их выполнение.'],
        ['Бесплатное устранение ошибок в течение 12 месяцев - ваша защита', 
        'Мы уверены в качестве нашей работы! В случае возникновения проблем в течение года мы берем на себя ответственность за их устранение, освобождая ваш бюджет от непредвиденных расходов.'],
        ['Минимум бюрократии - максимум результатов', 
        'Мы берем на себя всю работу по подготовке документов, чтобы вы могли сосредоточиться на стратегии и развитии бизнеса, не отвлекаясь на рутинные задачи.'],
        ['Ваш успех - наша приоритетная цель!', 
        'Мы не просто выполняем проект, мы стремимся к тому, чтобы ваши показатели росли. Ваш успех — это наша гордость и главный ориентир.']
    ])
    
    const textArray2 = ref([
        ['Техническая поддержка, которая всегда на связи', 
        'Мы понимаем, что бизнес не останавливается. Наша команда готова помочь вам 24/7, обеспечивая стабильность и бесперебойную работу ваших систем.'],
        ['Актуальные обновления и инновации для вашего бизнеса', 
        'Мы следим за динамикой рынка и внедряем самые современные решения, чтобы ваш бизнес всегда оставался на шаг впереди конкурентов.'],
        ['Индивидуальные решения для вашего уникального бизнеса', 
        'Мы знаем, что у каждого бизнеса свои потребности. Мы разрабатываем персонализированные стратегии, которые помогут вам достичь максимальной эффективности.'],
        ['Быстрая реакция на ваши запросы - мы ценим ваше время', 'Наша команда оперативно реагирует на любые ваши запросы, обеспечивая быстрое разрешение вопросов и минимизацию простоя.']
    ])
</script>