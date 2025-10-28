<template>
    <section class="advantages wrapper">
        <div class="advantages-content">
            <h2 class="advantages__title title-h2">Что мы делаем для вашего бизнеса</h2>
            <p class="advantages__text text-big">Предлагаем полный спектр услуг по автоматизации и цифровизации бизнеса
                на базе 1С, CRM. Индивидуальный подход и комплексное сопровождение на каждом этапе</p>
        </div>
        <div class="advantages-grid">
            <div class="advantages__block advantages__block--grid-1 border">
                <h2 class="advantages__block-title text-big">Внедрение продуктов 1С</h2>
                <ul class="advantages__block-text text-ul">
                    <li class="text-medium">Анализ бизнес-процессов</li>
                    <li class="text-medium">Внедрение конфигураций 1С любой сложности</li>
                    <li class="text-medium">Сопровождение ваших сотрудников на всех этапах внедрения</li>
                </ul>
            </div>
            <div class="advantages__block advantages__block--grid-2 border">
                <h2 class="advantages__block-title text-big">Разработка CRM-систем</h2>
                <ul class="advantages__block-text text-ul">
                    <li class="text-medium">Управление продажами, складом и кассой</li>
                    <li class="text-medium">Интеграции с внешними сервисами</li>
                    <li class="text-medium">Настройка KPI и аналитики</li>
                </ul>
            </div> 
            <div id="Sistem" class="advantages__block advantages__block--grid-3 border">
                <h2 class="advantages__block-title text-big">Системная интеграция продуктов 1С</h2>
                <ul class="advantages__block-text text-ul">
                    <li class="text-medium">Интеграция 1С с CRM, телефонией, сайтами и прочими системами</li>
                    <li class="text-medium">Разработка API на базе 1С для решения нестандартных задач обмена</li>
                    <li class="text-medium">Поддержка и обновления внедренных и разработанных решений</li>
                </ul>
            </div> 
            <div id="Individyal" class="advantages__block advantages__block--grid-4 border">
                <h2 class="advantages__block-title text-big">Индивидуальная разработка на платформе 1С</h2>
                <ul class="advantages__block-text text-ul">
                    <li class="text-medium">Разработка решений для вашего бизнеса (от нестандартного модуля до собственной конфигурации)</li>
                    <li class="text-medium">Глубокая переработка типовой конфигурации под требования вашего бизнеса</li>
                    <li class="text-medium">Сопровождение и адаптация доработанных конфигураций</li>
                </ul>
            </div>                                                          
            <div id="Soprovodenie" class="advantages__block advantages__block--grid-5 border">
                <h2 class="advantages__block-title text-big">Сопровождение 1С</h2>
                <ul class="advantages__block-text text-ul">
                    <li class="text-medium">Техническая поддержка и обновления</li>
                    <li class="text-medium">Консультации и обучение по работе в 1С</li>
                    <li class="text-medium">Оптимизация бизнес-процессов</li>
                </ul>
            </div>
            <div id="callback-btn" class="advantages__block-image advantages__block--grid-6 border" @click="props.scrollToAnchor('callback')">
                <h2 class="advantages__block-image-text title-h3">Заказать<br> обратный звонок</h2>
                <img src="@/assets/sprites/woman-with.svg" class="advantages__block-image-woman" alt="">
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
