<template>
    <section v-if="serviceData" class="wrapper service">
        <h1 v-if="serviceData.title" class="service__title title-h1" v-html="serviceData.title"></h1>

        <img 
            v-if="serviceData.image" 
            class="service__image" 
            :src="'/images/services/' + serviceData.image" 
            alt="Изображение услуги"
        />

        <div v-if="serviceData.description" class="service__description" v-html="serviceData.description"></div>

        <div v-if="serviceData.howHelp" class="service__howHelp">
            <h2 class="service__howHelp-title title-h2">ЧЕМ {{route.params.service}} МОЖЕТ ВАМ ПОМОЧЬ?</h2>

            <div class="service__howHelp-items">
                <div class="service__howHelp-item" v-for="item in serviceData.howHelp" :key="item">
                    <img
                        v-if="item.image"
                        class="service__howHelp-item-image" 
                        :src="'/images/services/' + item.image" 
                        alt="Изображение описания помощи"
                    >

                    <p v-if="item.text" class="service__howHelp-item-text text-medium" v-html="item.text"></p>
                </div>
            </div>
        </div>

        <div v-if="serviceData.reasonsTry" class="service__reasonsTry">
            <h2 class="service__reasonsTry-title title-h2">
                {{serviceData.reasonsTry.length}} причины попробовать тестовый доступ к {{route.params.service}} уже сегодня:
            </h2>

            <div class="service__reasonsTry-items">
                <div class="service__reasonsTry-item" v-for="(item, index) in serviceData.reasonsTry" :key="item">
                    <div class="service__reasonsTry-item-index-container">
                        <span class="service__reasonsTry-item-index">{{index}}</span>
                    </div>
                    <p v-if="item" class="service__reasonsTry-item-text text-medium" v-html="item"></p>
                </div>
            </div>
        </div>

        <div v-if="serviceData.frequentQuestions" class="service__frequentQuestions list">
            <h2 class="service__frequentQuestions-title title-h2">Часто задаваемые вопросы:</h2>

            <ol class="list__list">
                <li v-for="(item, index) in serviceData.frequentQuestions" :key="item" @click="toggleItem(index)" :class="[
                    'list__list-item text-medium',
                    { 'list__list-item--active': activeIndex === index }
                ]">
                    <h3>{{ item.question }}</h3>
                    <p>{{ item.answer }}</p>

                    <svg class="list__list-item-plus">
                        <use xlink:href="@/assets/sprites/sprite.svg#plus"></use>
                    </svg>
                </li>
            </ol>
        </div>
    </section>
</template>

<script setup>
    import servicesData from './../../assets/data/services.json'

    const route = useRoute()
    const serviceData = servicesData[route.params.service]

    const activeIndex = ref(null)

    function toggleItem(index) {
        activeIndex.value = activeIndex.value === index ? null : index
    }

</script>