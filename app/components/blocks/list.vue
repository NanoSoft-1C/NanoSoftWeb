<template>
    <section :id="listBlock" class="list wrapper">
        <div class="list-headers">
            <h2 :id="listId" class="list__title title-h2"> {{titleHead}}</h2>
            <p class="list__text text-big">{{ titleSubtext }} </p>
        </div>
        <div class="list-container">
            <ol class="list__list">
                <li 
                    v-for="(item, index) in textArray" :key="item"
                    @click="toggleItem(index)"
                    :class="[
                        'list__list-item text-medium', 
                        { 'list__list-item--active': activeIndex === index }
                    ]"
                >
                    <h3>{{ item[0] }}</h3> 
                    <p>{{ item[1] }}</p>

                    <svg class="list__list-item-plus">
                        <use xlink:href="@/assets/sprites/sprite.svg#plus"></use>
                    </svg>
                </li>
            </ol>
            <div class="list-decorate">
                <div class="list__image-container">
                    <div class="list__image-mask">
                        <img :src="`/images/vectors/${srcImage}.svg`"  alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const activeIndex = ref(null)

    function toggleItem(index) {
        activeIndex.value = activeIndex.value === index ? null : index
    }

    const props = defineProps({
        textArray: {
            type: Array,
            required: true,
        },
        srcImage:{
            type: String,
            required: true,
        },
        titleHead:{
            type: String,
            required: true,
        },
        titleSubtext:{
            type: String,
            required: true,
        },
        listId:{
            type: String,
            required: true,
        },
        listBlock:{
            type: String,
            required: true,
        }
    });
    const { textArray, srcImage, titleHead, titleSubtext } = props;
</script>
