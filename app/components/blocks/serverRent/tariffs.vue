<template>
    <section class="serverTariffs wrapper" id="serverTariffs">
        <div class="serverTariffs__inner">

            <UiFrame />

            <div class="serverTariffs__head">
                <span class="label"><span class="label-dots"><i></i><i></i><i></i></span>Тарифы</span>
                <h2 class="serverTariffs__title title-h2">Выберите подходящий сервер</h2>
            </div>

            <div class="serverTariffs__grid">

                <article class="serverTariffs__card" v-for="item in tariffs" :key="item.name">

                    <h3 class="serverTariffs__card-title text-big">{{ item.name }}</h3>

                    <span class="serverTariffs__card-price">{{ item.price }}</span>

                    <ul class="serverTariffs__card-list">
                        <li class="serverTariffs__card-item" v-for="feature in item.features" :key="feature">{{ feature }}</li>
                    </ul>

                    <button class="serverTariffs__card-btn btn" @click="props.scrollToAnchor('callback')">
                        Заказать сервер
                    </button>

                </article>

            </div>

        </div>
    </section>
</template>

<script setup>
    // Временно кнопка «Заказать сервер» ведёт к форме обратной связи.
    // В дальнейшем нужно будет сделать переход на страницу оплаты.
    const props = defineProps({
        scrollToAnchor: {
            type: Function,
            required: true,
        },
    })

    const tariffs = [
        {
            name: 'VPS Start',
            price: '29€/мес',
            features: [
                '2 vCPU',
                '4 GB RAM',
                '80 GB NVMe',
                'Подходит для CRM и сайтов',
            ],
        },
        {
            name: 'Business',
            price: '79€/мес',
            features: [
                '6 vCPU',
                '16 GB RAM',
                '250 GB NVMe',
                'Подходит для 1С и Битрикс24',
            ],
        },
        {
            name: 'Enterprise',
            price: '149€/мес',
            features: [
                '12 vCPU',
                '32 GB RAM',
                '1 TB NVMe',
                'Высоконагруженные проекты',
            ],
        },
    ]
</script>
