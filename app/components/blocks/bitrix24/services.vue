<template>
    <section class="bitrixServices wrapper" id="bitrixServices">
        <div class="bitrixServices__inner">

            <UiFrame />

            <div class="bitrixServices__content">

                <span class="label"><span class="label-dots"><i></i><i></i><i></i></span>Наши услуги</span>

                <h2 class="bitrixServices__title title-h2">Что можем внедрить</h2>

                <div class="bitrixServices__items">

                    <div class="bitrixServices__item" v-for="item in services" :key="item.title">

                        <svg class="bitrixServices__item-icon" viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                            <path v-for="(d, i) in item.icon" :key="i" :d="d"/>
                        </svg>

                        <div class="bitrixServices__item-body">
                            <h3 class="bitrixServices__item-title text-big" v-html="item.title"></h3>
                            <p class="bitrixServices__item-text" v-html="item.text"></p>
                        </div>

                    </div>

                </div>

            </div>

            <div class="bitrixServices__image">
                <img class="bitrixServices__image-img" src="/images/bitrix24/crm-sync.png" alt="Синхронизация Битрикс24 и 1С">
            </div>

        </div>
    </section>
</template>

<script setup>
    const services = [
        {
            title: 'Внедрение CRM',
            text: 'Внедрим CRM, которая отражает реальные процессы вашей компании и&nbsp;помогает увеличить управляемость продаж, дисциплину менеджеров и&nbsp;качество работы с клиентами.',
            icon: [
                'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2',
                'M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8',
                'M22 21v-2a4 4 0 0 0-3-3.87',
                'M16 3.13a4 4 0 0 1 0 7.75',
            ],
        },
        {
            title: 'Автоматизация бизнес-процессов',
            text: 'Поможем выстроить эффективные бизнес-процессы, сократить количество ручных операций и&nbsp;повысить скорость работы компании без потери контроля.',
            icon: [
                'M12 2v4',
                'M12 18v4',
                'm4.93 4.93 2.83 2.83',
                'm16.24 16.24 2.83 2.83',
                'M2 12h4',
                'M18 12h4',
                'm4.93 19.07 2.83-2.83',
                'm16.24 7.76 2.83-2.83',
                'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6',
            ],
        },
        {
            title: 'Настройка аналитики и&nbsp;отчётов',
            text: 'Настроим отчёты и дашборды под задачи вашей компании, чтобы ключевые показатели бизнеса всегда были доступны для контроля и&nbsp;принятия решений.',
            icon: [
                'M3 3v16a2 2 0 0 0 2 2h16',
                'M7 17v-5',
                'M12 17V9',
                'M17 17V6',
            ],
        },
        {
            title: 'Внедрение корпоративного портала',
            text: 'Создадим единое цифровое пространство для сотрудников, где все рабочие процессы, коммуникации и&nbsp;информация будут работать как единая система.',
            icon: [
                'M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1',
                'M3 9h18',
                'M9 21V9',
            ],
        },
        {
            title: 'Интеграция с 1С любой сложности',
            text: 'Настроим интеграцию 1С и&nbsp;Битрикс24, обеспечив актуальность данных во всех подразделениях компании и&nbsp;сократив количество ручных операций.',
            icon: [
                'M4 7h11a4 4 0 0 1 0 8H9',
                'm7 12-3 3 3 3',
                'M20 17H9',
            ],
        },
    ]
</script>
