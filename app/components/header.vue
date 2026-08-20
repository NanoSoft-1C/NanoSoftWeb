<template>
    <header
        id="header"
        class="header"
    >
        <div class="header-wrapper">
            <nuxt-link to="/"><img
                class="header__logo"
                src="@/assets/sprites/NSLogo.svg"
                alt="Логотип"
            ></nuxt-link>

            <div class="header__menu-container">

                <img
                    class="header__menu-svg"
                    @click="changeVisibleMenu"
                    src="@/assets/sprites/menu.svg"
                    alt="menu.svg"
                >

                <div
                    class="header__menu"
                    :class="{ 'header__menu--open': isMenuOpen }"
                >

                    <button
                        class="header__menu-btn"
                        @click="changeVisibleMenu(); scrollToAnchor('company')"
                    >
                        О компании
                    </button>

                    <div
                        class="header__dropdown"
                        @mouseenter="!isMobile && openServices()"
                        @mouseleave="!isMobile && closeServices()"
                    >
                        <button
                            class="header__menu-btn"
                            @click="handleServicesClick"
                        >
                            Услуги

                            <img 
                                class="header__menu-btn-corner" 
                                src="@/assets/sprites/arrowCorner.svg" 
                                alt="Corner"
                            >
                        </button>

                        <Transition name="header-dropdownAnim">
                            <div
                                :class="{
                                    'header__dropdown-menu--open': isServicesOpen
                                }"
                                class="header__dropdown-menu"
                            >
                                <nuxt-link class="header__dropdown-item" :to="'/'">Продукты 1C</nuxt-link>

                                <nuxt-link class="header__dropdown-item" :to="'/server-rent'">Аренда серверов</nuxt-link>

                                <nuxt-link class="header__dropdown-item" :to="'/Integration-bitrix24'">CRM <br> Битрикс24</nuxt-link>

                                <nuxt-link class="header__dropdown-item" :to="'/'">Аудит отдела продаж</nuxt-link>
                            </div>
                        </Transition>
                    </div>

                    <button
                        class="header__menu-btn"
                        @click="changeVisibleMenu(); scrollToAnchor('cases')"
                    >
                        Кейсы
                    </button>

                    <button
                        class="header__menu-btn"
                        @click="changeVisibleMenu(); scrollToAnchor('footer')"
                    >
                        Контакты
                    </button>
                </div>

                <div
                    class="header__menu-links"
                    :class="{ 'header__menu-links--visible': isMenuOpen }"
                >
                    <p class="text-medium">Телефон:</p>
                    <a class="text-small" href="tel:+78124071767">
                        +7 (812) 407-17-67
                    </a>

                    <br>

                    <p class="text-medium">Email:</p>
                    <a class="text-small" href="mailto:nanosoft-1c@yandex.ru">
                        nanosoft-1c@yandex.ru
                    </a>
                </div>
            </div>

            <button
                class="header__cta"
                @click="scrollToAnchor('callback')"
            >
                Получить консультацию
            </button>
        </div>
    </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const windowWidth = ref(1920)

function updateWidth() {
    windowWidth.value = window.innerWidth
}

onMounted(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
})

const isMobile = computed(() => windowWidth.value <= 768)

function handleServicesClick() {
    if (isMobile.value) {
        isServicesOpen.value = !isServicesOpen.value
        return
    }

    changeVisibleMenu()
    props.scrollToAnchor('advantages')
}

const isMenuOpen = ref(false)
const isServicesOpen = ref(false)
let servicesTimeout = null

function changeVisibleMenu() {
    isMenuOpen.value = !isMenuOpen.value
    if(!isMenuOpen.value) isServicesOpen.value = false
}

function openServices() {
    clearTimeout(servicesTimeout)
    isServicesOpen.value = true
}

function closeServices() {
    servicesTimeout = setTimeout(() => {
        isServicesOpen.value = false
    }, 150)
}

const props = defineProps({
    scrollToAnchor: Function,
})
</script>