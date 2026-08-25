<template>
    <section class="serverAdvantages wrapper" id="serverAdvantages">
        <div class="serverAdvantages__inner cutCorners">

            <div class="serverAdvantages__head">
                <span class="label"><span class="label-dots"><i></i><i></i><i></i></span>Почему выбирают нас</span>
                <h2 class="serverAdvantages__title title-h2">Надёжная серверная инфраструктура</h2>
            </div>

            <div class="serverAdvantages__grid">

                <article class="serverAdvantages__card" v-for="item in advantages" :key="item.title">
                    <h3 class="serverAdvantages__card-title text-big">{{ item.title }}</h3>
                    <p class="serverAdvantages__card-text">{{ item.text }}</p>
                </article>

            </div>

        </div>
    </section>
</template>

<script setup>
    const advantages = [
        {
            title: 'Высокая производительность',
            text: 'Современные CPU, NVMe и быстрые каналы связи',
        },
        {
            title: 'Масштабирование',
            text: 'Увеличение ресурсов без остановки проекта',
        },
        {
            title: 'Защита данных',
            text: 'Резервные копии и защита инфраструктуры',
        },
        {
            title: 'Поддержка 24/7',
            text: 'Помощь специалистов в любое время',
        },
    ]
</script>
