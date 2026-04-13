<template>
    <div class="modal modal-overlay">
        <div class="modal-content">
            {{ title }}
            <br><br>
            {{ content }}
            <br><br><br><br>
            <div @click="closeModal">Закрыть</div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, onBeforeUnmount } from 'vue'

    let scrollY = 0

    function lockScroll() {
        scrollY = window.scrollY

        document.body.style.position = 'fixed'
        document.body.style.top = `-${scrollY}px`
        document.body.style.left = '0'
        document.body.style.right = '0'
        document.body.style.width = '100%'
    }

    function unlockScroll() {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        document.body.style.width = ''

        window.scrollTo(0, scrollY)
    }

    function handleKey(e) {
        if (e.key === 'Escape') {
            closeModal()
        }
    }

    defineProps({
        title: String,
        content: Number,
        closeModal: Function
    })

    onMounted(() => {
        lockScroll()
    })

    onBeforeUnmount(() => {
        unlockScroll()
    })
</script>