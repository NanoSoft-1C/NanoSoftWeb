<template>
    <section class="bitrixProcess wrapper" id="bitrixProcess">

        <div class="bitrixProcess__head">
            <span class="label"><span class="label-dots"><i></i><i></i><i></i></span>Этапы работы</span>
            <h2 class="bitrixProcess__title title-h2">Как происходит внедрение</h2>
        </div>

        <div class="bitrixProcess__flow">

            <template v-for="(step, index) in steps" :key="step.title">

                <div class="bitrixProcess__card">
                    <h3 class="bitrixProcess__card-title text-big" v-html="step.title"></h3>
                    <p class="bitrixProcess__card-text" v-html="step.text"></p>
                </div>

                <span v-if="index < steps.length - 1" class="bitrixProcess__arrow" aria-hidden="true">
                    <svg viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 12h26M20 4l8 8-8 8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>

            </template>

        </div>

    </section>
</template>

<script setup>
    const steps = [
        {
            title: 'Аналитика',
            text: 'Изучаем процессы компании и&nbsp;определяем задачи, которые должно решать внедрение.',
        },
        {
            title: 'Проектирование',
            text: 'Разрабатываем структуру системы, сценарии работы и&nbsp;план реализации проекта внедрения.',
        },
        {
            title: 'Внедрение',
            text: 'Настраиваем Битрикс24, автоматизацию и&nbsp;интеграции в соответствии с задачами бизнеса.',
        },
        {
            title: 'Запуск и&nbsp;поддержка',
            text: 'Тестируем решение, обучаем сотрудников и&nbsp;сопровождаем работу системы после запуска.',
        },
    ]
</script>
