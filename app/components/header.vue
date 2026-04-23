<template>
    <header
        id="headerFixed"
        :class="[
            'headerFixed',
            isScrolled ? 'headerFixed--visible' : '',
            route.fullPath != '/' ? 'headerFixed--static' : ''
        ]"
    >
        <div class="headerFixed-wrapper">
            <img class="headerFixed__logo" src="@/assets/sprites/NSLogoGorizont.svg" alt="Логотип">

            <div class="headerFixed__menu-container">

                <img class="headerFixed__menu-svg" @click="changeVisibleMenu" src="@/assets/sprites/menu.svg" alt="menu.svg">

                <div 
                    class="headerFixed__menu"
                    :class="{ 'headerFixed__menu--open': isMenuOpen }"
                >
                    <div class="headerFixed__menu-btns">
                        <button class="headerFixed__menu-btn" @click="changeVisibleMenu(); scrollToAnchor('company')">О компании</button>
                        <button class="headerFixed__menu-btn" @click="changeVisibleMenu(); scrollToAnchor('advantages')">Услуги</button>
                        <button class="headerFixed__menu-btn" @click="changeVisibleMenu(); scrollToAnchor('cases')">Кейсы</button>
                        <button class="headerFixed__menu-btn" @click="changeVisibleMenu(); scrollToAnchor('callback')">Обратная связь</button>
                        <button class="headerFixed__menu-btn" @click="changeVisibleMenu(); scrollToAnchor('footer')">Контакты</button>
                    </div>

                    <div 
                        class="headerFixed__menu-links" 
                        :class="{ 'headerFixed__menu-links--visible': isMenuOpen }"
                    >
                        <p class="text-medium">Телефон:</p>
                        <a class="text-small" href="tel:+78124071767">+7 (812) 407-17-67</a>
                        <br>
                        <p class="text-medium">Email:</p>
                        <a class="text-small" href="mailto:nanosoft-1c@yandex.ru">nanosoft-1c@yandex.ru</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="headerFixed__shadow"></div>
    </header>
</template>

<script setup>
    import { ref } from 'vue'

    const isMenuOpen = ref(false)
    const route = useRoute()

    function changeVisibleMenu() {
        isMenuOpen.value = !isMenuOpen.value
    }

    const props = defineProps({
        isScrolled: Boolean,
        scrollToAnchor: Function,
    })
</script>