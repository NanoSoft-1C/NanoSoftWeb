<template>
    <canvas ref='canvas'></canvas>
</template>

<script setup>
    import { onMounted, ref } from 'vue'

    const canvas = ref(null)
    const props = defineProps({
        wrapper: {
            type: Object,
            required: true,
        },
        points: {
            type: Array,
            required: true,
        }
    })


    onMounted(() => {
        console.log(props.wrapper.getWrapper)
    })
</script>

<style lang="scss" scoped>
    canvas{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        border: 1px solid white;
    }
</style>