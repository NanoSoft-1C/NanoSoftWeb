<template>

    <BlocksStarting :scrollToAnchor="scrollToAnchor"></BlocksStarting>

    <BlocksCompany id="company" class="canvasItem"></BlocksCompany>

    <BlocksWhyChoose></BlocksWhyChoose>

    <BlocksNumbers></BlocksNumbers>

    <BlocksOurServices></BlocksOurServices>

    <BlocksDirections></BlocksDirections>

    <BlocksCtaBanner :scrollToAnchor="scrollToAnchor"></BlocksCtaBanner>

    <!-- <BlocksResult></BlocksResult>

    <BlocksAdvantages id="advantages" :scrollToAnchor="scrollToAnchor"></BlocksAdvantages>-->

    <BlocksCompanys id="cases"></BlocksCompanys>

    <!-- <BlocksList 
        :titleHead="'Работаем честно и с гарантией результата '"
        :titleSubtext="'Нам стоит доверять!'"
        :listBlock="'list__block1'"
        :listId="'block__list1'"
        :textArray="textArray" 
        :srcImage="'woman-computer'"
        :svgVisible="'woman-computer'"
    ></BlocksList>

    <BlocksList
        :titleHead="'Техническая поддержка и сопровождение вашего бизнеса'" 
        :titleSubtext="'Вы не останетесь один на один с вашей проблемой'"
        :listBlock="'list__block2'"
        :listId="'block__list2'"   
        :textArray="textArray2" 
        :srcImage="'woman-computer-2'"
        :svgVisible="'woman-computer-2'" 
        class="list--right"
    ></BlocksList>

    <BlocksCertificates></BlocksCertificates> -->

</template>

<script setup>
    import { ref, onMounted } from 'vue'

    onMounted(() => {
        svgAnimator()
    })

    function scrollToAnchor(anchorId) {
        if (process.server) return 

        const element = document.querySelector("#" + anchorId)
        const header = document.querySelector('#header')
        const headerShadow = document.querySelector('.header__shadow')

        if (!element) return

        const elementRect = element.getBoundingClientRect()
        const elementTop = elementRect.top + window.scrollY

        const scrollPosition = elementTop - header.offsetHeight - headerShadow.offsetHeight

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        })
    }

    function svgAnimator() {
        const colorBlack = "var(--color-illustration-dark)"
        const colorWhite = "var(--color-white)"
        const colorOrange = "var(--color-accent)"

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