<template>
    <section class="theSeller wrapper border">
        <p class="theSeller-title title-h3" v-html="props.title"></p>
        <p class="theSeller-text text-medium" v-html="props.text" v-if="props.text"></p>
        <div class="theSeller-image-container">
            <img 
                class="theSeller-image" 
                :src="props.image" 
                alt="theSeller-img"
            >
        </div>
    </section>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: true
    }
});

</script>