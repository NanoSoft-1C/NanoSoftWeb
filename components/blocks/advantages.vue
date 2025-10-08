<template>
    <section class="advantages wrapper">
        <div class="advantages-content">
            <h2 class="advantages__title title-h2">Что мы делаем для вашего бизнеса</h2>
            <p class="advantages__text text-big">Предлагаем полный спектр услуг по автоматизации и цифровизации бизнеса
                на базе 1С, CRM и Telegram-ботов. Индивидуальный подход и комплексное сопровождение на каждом этапе</p>
        </div>
        <div class="advantages-grid">
            <div class="advantages__block border">
                <h2 class="advantages__block-title text-big">Сопровождение 1С</h2>
                <ul class="advantages__block-text text-ul">
                    <li class="text-medium">Устранение проблем и обновления</li>
                    <li class="text-medium">Консультации и развитие функционала</li>
                    <li class="text-medium">Оптимизация бизнес-процессов</li>
                </ul>
            </div>
            <div class="advantages__block border">
                <h2 class="advantages__block-title text-big">Внедрение продуктов 1С</h2>
                <ul class="advantages__block-text text-ul">
                    <li class="text-medium">Быстрая настройка, обмен данными</li>
                    <li class="text-medium">Разработка и адаптация форм</li>
                    <li class="text-medium">Обучение сотрудников и поддержка</li>
                </ul>
            </div>
            <div class="advantages__block border">
                <h2 class="advantages__block-title text-big">Разработка Telegram-ботов</h2>
                <ul class="advantages__block-text text-ul">
                    <li class="text-medium">Создание ботов для сотрудников и клиентов</li>
                    <li class="text-medium">Автоматизация задач и уведомлений</li>
                    <li class="text-medium">Масштабируемые решения под любые цели</li>
                </ul>
            </div>
            <div class="advantages__block border">
                <h2 class="advantages__block-title text-big">Разработка CRM-систем</h2>
                <ul class="advantages__block-text text-ul">
                    <li class="text-medium">Управление продажами, складом и кассой</li>
                    <li class="text-medium">Интеграции с внешними сервисами</li>
                    <li class="text-medium">Настройка KPI и аналитики</li>
                </ul>
            </div>
            <div class="advantages__block border">
                <h2 class="advantages__block-title text-big">Разработка web-приложений</h2>
                <ul class="advantages__block-text text-ul">
                    <li class="text-medium">Заполнить текстом!</li>
                    <li class="text-medium">Заполнить текстом!</li>
                    <li class="text-medium">Заполнить текстом!</li>
                </ul>
            </div>
            <div class="advantages__block border">
                <h2 class="advantages__block-title text-big">Системная интеграция продуктов 1С</h2>
                <ul class="advantages__block-text text-ul">
                    <li class="text-medium">Заполнить текстом!</li>
                    <li class="text-medium">Заполнить текстом!</li>
                    <li class="text-medium">Заполнить текстом!</li>
                </ul>
            </div>
            <div class="advantages__block border">
                <h2 class="advantages__block-title text-big">Индивидуальная разработка на платформе 1С</h2>
                <ul class="advantages__block-text text-ul">
                    <li class="text-medium">Создание модулей и интеграций под специфику вашего бизнеса</li>
                    <li class="text-medium">Перенос и миграция данных</li>
                    <li class="text-medium">Кастомизация и модернизация конфигураций</li>
                </ul>
            </div>
            <div class="advantages__block-image border" @click="props.scrollToAnchor('callback')">
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
