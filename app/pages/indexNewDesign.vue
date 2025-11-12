<template>

    <canvas class="globalLine" 

        setting='{
            "height": "#app",
            "width": "#app"
        }'

        points='{
            "laptop": [
                {
                    "type": "start",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "right",
                            "value": ".company",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": ".company__title",
                            "parent": "#app"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 48
                    },
                    "line": "vertically"
                },{
                    "type": "corner",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "right",
                            "value": ".company",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "bottom",
                            "value": ".company",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "top",
                            "vertically": "left"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 48
                    },
                    "line": "horizontally"
                },{
                    "type": "corner",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "left",
                            "value": ".company",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "bottom",
                            "value": ".company",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "right",
                            "vertically": "bottom"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "vertically"
                },{
                    "type": "start",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "left",
                            "value": "#result__title--1",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": "#result__title--1",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "right",
                            "vertically": "bottom"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "vertically"
                },{
                    "type": "point",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "left",
                            "value": "#result__title--2",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": "#result__title--2",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "right",
                            "vertically": "bottom"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "vertically"
                },{
                    "type": "start",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "left",
                            "value": ".advantages__title",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": ".advantages__title",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "right",
                            "vertically": "center"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "vertically"
                },{
                    "type": "corner",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "left",
                            "value": ".advantages",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": ".advantages__block",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "right",
                            "vertically": "top"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "horizontally"
                },{
                    "type": "corner",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "right",
                            "value": ".advantages",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": ".advantages__block",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "left",
                            "vertically": "bottom"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "vertically"
                },{
                    "type": "point",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "right",
                            "value": ".advantages",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": "#Sistem",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "left",
                            "vertically": "top"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "vertically"
                },{
                    "type": "corner",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "right",
                            "value": ".advantages",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": "#Individyal",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "left",
                            "vertically": "top"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "horizontally"
                },{
                    "type": "corner",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "left",
                            "value": ".advantages",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": "#Individyal",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "right",
                            "vertically": "bottom"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "vertically"
                },{
                    "type": "corner",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "left",
                            "value": ".advantages",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": "#Soprovodenie",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "right",
                            "vertically": "top"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "horizontally"
                },{
                    "type": "corner",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "right",
                            "value": ".advantages",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": "#callback-btn",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "left",
                            "vertically": "bottom"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "vertically"
                },{
                    "type": "start",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "right",
                            "value": ".advantages",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": ".mapCompanys__block-title",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "left",
                            "vertically": "bottom"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "vertically"
                },{
                    "type": "corner",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "right",
                            "value": ".advantages",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": ".mapCompanys__block-download",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "left",
                            "vertically": "top"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "horizontally"
                },{
                    "type": "corner",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "center",
                            "value": ".advantages",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": ".mapCompanys__block-download",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "left",
                            "vertically": "top"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "horizontally",
                    "lineBreak": true
                },{
                    "type": "start",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "left",
                            "value": ".list",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": ".list__title",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "left",
                            "vertically": "top"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "vertically"
                },{
                    "type": "corner",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "left",
                            "value": ".list",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "bottom",
                            "value": ".list",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "right",
                            "vertically": "top"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "horizontally"
                },{
                    "type": "corner",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "right",
                            "value": ".list",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "bottom",
                            "value": ".list",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "left",
                            "vertically": "bottom"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "vertically"
                },{
                    "type": "start",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "right",
                            "value": "#block__list2",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": "#block__list2",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "left",
                            "vertically": "bottom"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "vertically"
                },{
                    "type": "corner",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "right",
                            "value": "#list__block2",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": ".callback__title",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "left",
                            "vertically": "center"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": 36
                    },
                    "line": "horizontally"
                },{
                    "type": "start",
                    "position": {
                        "horizontally": {
                            "type": "elem",
                            "align": "right",
                            "value": ".callback__title",
                            "parent": "#app"
                        },

                        "vertically": {
                            "type": "elem",
                            "align": "center",
                            "value": ".callback__title",
                            "parent": "#app"
                        },

                        "global": {
                            "horizontally": "left",
                            "vertically": "center"
                        }
                    },
                    "margin": {
                        "vertically": 0,
                        "horizontally": -300
                    },
                    "line": "horizontally"
                }
            ]
        }'

    ></canvas>

    <header
        id="headerFixed"
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

                <img class="headerFixed__menu-svg" @click="changeVisibleMenu" src="@/assets/sprites/menu.svg" alt="menu.svg">

                <div 
                    class="headerFixed__menu"
                    :class="{ 'headerFixed__menu--open': isMenuOpen }"
                >
                    <div class="headerFixed__menu-btns">
                        <button class="headerFixed__menu-btn" @click="changeVisibleMenu(); scrollToAnchor('company')">О компании</button>
                        <button class="headerFixed__menu-btn" @click="changeVisibleMenu(); scrollToAnchor('advantages')">Услуги</button>
                        <button class="headerFixed__menu-btn" @click="changeVisibleMenu(); scrollToAnchor('cases')">Кейсы</button>
                        <button class="headerFixed__menu-btn" @click="changeVisibleMenu(); scrollToAnchor('callback')">Обратная связь</button>
                        <button class="headerFixed__menu-btn" @click="changeVisibleMenu(); scrollToAnchor('footer')">Контакты</button>
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

    <Header :scrollToAnchor="scrollToAnchor"></Header>

    <BlocksCompanyNewDesign id="company" class="canvasItem"></BlocksCompanyNewDesign>

    <BlocksResultNewDesign></BlocksResultNewDesign>

    <BlocksAdvantages id="advantages" :scrollToAnchor="scrollToAnchor"></BlocksAdvantages>

    <BlocksCompanys id="cases"></BlocksCompanys>

    <BlocksList 
        :titleHead="'Работаем честно и с гарантией результата '"
        :titleSubtext="'Нам стоит доверять!'"
        :listBlock="'list__block1'"
        :listId="'block__list1'"
        :textArray="textArray" 
        :srcImage="'woman-computer'"
    ></BlocksList>

    <BlocksList
        :titleHead="'Техническая поддержка и сопровождение вашего бизнеса'" 
        :titleSubtext="'Вы не останетесь один на один с вашей проблемой'"
        :listBlock="'list__block2'"
        :listId="'block__list2'"   
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

        // DTLine.initCanvas(document.querySelector('.globalLine'))
        svgAnimator()
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleResize)
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



    function svgAnimator() {
        const colorBlack = "#211715"
        const colorWhite = "#FFFEFD"
        const colorOrange = "#FFC678"

        const svgs = document.querySelectorAll("svg.svg-animate");
        if (!svgs.length) return;

        const svgData = new WeakMap();

        svgs.forEach(svg => {
            const elements = svg.querySelectorAll("path, line, circle, rect, polyline, polygon");
            const data = [];

            elements.forEach(el => {
                const style = window.getComputedStyle(el);
                const strokeComputed = style.stroke && style.stroke !== "none" ? style.stroke : null;
                const fillComputed = style.fill && style.fill !== "none" ? style.fill : null;

                const orig = {
                    el,
                    hadStroke: !!strokeComputed,
                    origStrokeAttr: el.getAttribute("stroke"),
                    origFillAttr: el.getAttribute("fill"),
                    origStrokeComputed: strokeComputed,
                    origFillComputed: fillComputed
                };

                if (orig.hadStroke) {
                    if (orig.origStrokeAttr === null) el.setAttribute("data-orig-stroke", orig.origStrokeComputed || "");
                    el.style.stroke = colorWhite;
                    if (typeof el.getTotalLength === "function") {
                        const length = el.getTotalLength();
                        el.style.strokeDasharray = length;
                        el.style.strokeDashoffset = length;
                    }
                }

                if (orig.origFillComputed) {
                    if (orig.origFillAttr === null) el.setAttribute("data-orig-fill", orig.origFillComputed);
                    el.style.fill = "transparent";
                }

                if (orig.hadStroke || orig.origFillComputed) data.push(orig);
            });

            svgData.set(svg, data);
        });

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const svg = entry.target;
                    animateSvg(svg);
                    obs.unobserve(svg);
                }
            });
        }, { threshold: 1.0 });

        svgs.forEach(svg => observer.observe(svg));

        function animateSvg(svg) {
            const data = svgData.get(svg);
            if (!data || !data.length) return;

            const strokeDuration = 1500;
            const fillDuration = 1500;

            data.forEach(item => {
                const el = item.el;
                const fillColor = item.origFillAttr || item.origFillComputed || "";
                const isSpecialColor = /#?ffc678/i.test(fillColor) || /rgb\s*\(\s*255\s*,\s*198\s*,\s*120\s*\)/i.test(fillColor);

                if (item.hadStroke && typeof el.getTotalLength === "function") {
                    const length = el.getTotalLength();

                    el.style.transition = "none";
                    el.getBoundingClientRect();

                    el.style.transition = `stroke-dashoffset ${strokeDuration}ms ease`;
                    el.style.strokeDashoffset = "0";

                    setTimeout(() => {
                        const transitions = [];
                        if (item.origFillComputed) transitions.push(`fill ${fillDuration}ms ease`);
                        if (item.hadStroke) transitions.push(`stroke ${fillDuration}ms ease`);
                        if (transitions.length) el.style.transition = transitions.join(", ");

                        if (item.origFillComputed) {
                            const fillTo = item.origFillAttr !== null ? item.origFillAttr : item.origFillComputed;
                            el.style.fill = fillTo;
                        }

                        // если fill = FFC678, то stroke становится тем же цветом
                        if (item.hadStroke) {
                            el.style.stroke = isSpecialColor ? colorOrange : colorBlack;
                        }

                        if (el.hasAttribute("data-orig-fill")) el.removeAttribute("data-orig-fill");
                        if (el.hasAttribute("data-orig-stroke")) el.removeAttribute("data-orig-stroke");
                    }, strokeDuration);
                } else {
                    if (item.origFillComputed) {
                        setTimeout(() => {
                            el.style.transition = `fill ${fillDuration}ms ease`;
                            const fillTo = item.origFillAttr !== null ? item.origFillAttr : item.origFillComputed;
                            el.style.fill = fillTo;
                            if (el.hasAttribute("data-orig-fill")) el.removeAttribute("data-orig-fill");
                        }, strokeDuration);
                    }
                }
            });
        }
    }

</script>