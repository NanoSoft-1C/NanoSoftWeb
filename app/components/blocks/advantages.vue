<template>
    <section class="advantages wrapper">
        <div class="advantages-content">
            <h2 class="advantages__title title-h2">Что мы делаем для вашего бизнеса</h2>
        </div>
        <div class="advantages-grid">
            <div class="advantages__block">
                <h2 class="advantages__block-title title-h3">Работаем по договору</h2>
                <div class="advantages__block-text">Фиксируем сроки, этапы проекта и ответственность сторон</div>
            </div>
            <div class="advantages__block">
                <h2 class="advantages__block-title title-h3">Сертифицированная команда 1С</h2>
                <div class="advantages__block-text">В проекте участвуют специалисты с подтвержденной квалификацией и практическим опытом внедрения решений 1С</div>
            </div>
            <div class="advantages__block">
                <h2 class="advantages__block-title title-h3">Поддержка после внедрения</h2>
                <div class="advantages__block-text">Не исчезаем после запуска системы. Сопровождаем, консультируем и помогаем развивать решение дальше</div>
            </div>
            <div class="advantages__block">
                <h2 class="advantages__block-title title-h3">Индивидуальная разработка и интеграция</h2>
                <div class="advantages__block-text">Проектируем, внедряем и развиваем экосистему бизнеса: от 1С и CRM до собственных программных решений и сложных интеграций</div>
            </div>
            <div class="advantages__block">
                <h2 class="advantages__block-title title-h3">Прозрачное управление проектом</h2>
                <div class="advantages__block-text">Предоставляем доступ к собственной системе управления проектами, где вы в режиме реального времени видите задачи, сроки, статус работ и коммуникацию с командой</div>
            </div>
            <div class="advantages__block">
                <h2 class="advantages__block-title title-h3">Гарантия на работы</h2>
                <div class="advantages__block-text">Предоставляем гарантию на все выполненные работы и внедреные решения</div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    scrollToAnchor: {
        type: Function,
        required: true,
    }
});
</script>
