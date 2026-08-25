<template>
    <section class="bitrixAdvantages wrapper" id="bitrixAdvantages">
        <div class="bitrixAdvantages__inner cutCorners">

            <div class="bitrixAdvantages__head">
                <span class="label"><span class="label-dots"><i></i><i></i><i></i></span>Что вы получите</span>
                <h2 class="bitrixAdvantages__title title-h2">Автоматизация без хаоса</h2>
            </div>

            <div class="bitrixAdvantages__grid">

                <div
                    v-for="(item, index) in advantages"
                    :key="item.title"
                    class="bitrixAdvantages__card"
                    :class="{ 'bitrixAdvantages__card--active': activeCard === index }"
                    @click="toggleCard(index)"
                >

                    <div class="bitrixAdvantages__card-top">
                        <span class="bitrixAdvantages__card-number">{{ String(index + 1).padStart(2, '0') }}</span>
                        <span class="bitrixAdvantages__card-icon">{{ activeCard === index ? '−' : '+' }}</span>
                    </div>

                    <h3 class="bitrixAdvantages__card-title text-big">{{ item.title }}</h3>

                    <div
                        class="bitrixAdvantages__card-content"
                        :class="{ 'bitrixAdvantages__card-content--open': activeCard === index }"
                    >
                        <p class="bitrixAdvantages__card-text" v-html="item.text"></p>
                    </div>

                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue'

    const advantages = [
        {
            title: 'CRM и продажи',
            text: 'Вся работа с клиентами в одной системе: лиды, сделки, счета, документы и история коммуникаций.<br>Ничего не теряется, а продажи становятся прозрачными и управляемыми.',
        },
        {
            title: 'Задачи и проекты',
            text: 'Контролируйте работу команды, распределяйте задачи, отслеживайте сроки и загруженность сотрудников.<br>Все проекты находятся в едином рабочем пространстве.',
        },
        {
            title: 'Корпоративный портал',
            text: 'Чаты, видеозвонки, календари, документы и корпоративная лента объединяют сотрудников в единой цифровой среде и ускоряют взаимодействие между отделами.',
        },
        {
            title: 'Бизнес-процессы',
            text: 'Освободите сотрудников от рутины: система автоматически распределяет задачи, отправляет уведомления, запускает согласования и контролирует выполнение процессов.',
        },
    ]

    const activeCard = ref(null)

    function toggleCard(index) {
        activeCard.value = activeCard.value === index ? null : index
    }
</script>
