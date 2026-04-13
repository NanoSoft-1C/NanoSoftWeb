<template>

    <BlocksStarting :scrollToAnchor="scrollToAnchor"></BlocksStarting>

    <BlocksFindServices :servicesData="servicesData"></BlocksFindServices>

    <BlocksServices :servicesData="servicesData"></BlocksServices>

    <!-- <div v-if="modalState.isOpen" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
            <ModalServices 
                :is="modalState.component" 
                v-bind="modalState.props"
                :closeModal="closeModal"
            />
        </div>
    </div> -->

</template>

<script setup>
    import { onMounted, reactive, markRaw } from 'vue'
    import servicesData from './../../assets/data/services.json'
    // import MyModal from '@/components/modal/modalServices.vue'

    // const modalState = reactive({
    //     isOpen: false,
    //     component: null,
    //     props: {}
    // })

    // function openModal(component, props = {}) {
    //     modalState.component = markRaw(component)
    //     modalState.props = props
    //     modalState.isOpen = true
    // }

    // function closeModal() {
    //     modalState.isOpen = false
    // }

    onMounted(() => {
        svgAnimator()        
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