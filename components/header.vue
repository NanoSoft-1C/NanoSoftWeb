<template>
    <header class="header">
        <div class="header__menu">
            <button class="header__menu-btn" @click="props.scrollToAnchor('company')">О компании</button>
            <button class="header__menu-btn" @click="props.scrollToAnchor('advantages', 50)">Услуги</button>
            <button class="header__menu-btn" @click="props.scrollToAnchor('cases')">Кейсы</button>
            <button class="header__menu-btn" @click="props.scrollToAnchor('footer')">Контакты</button>
        </div>

        <div class="header-container">
            <div class="header__subtitle">разработка / внедрение / поддержка</div>

            <img class="header__logo" src="@/assets/sprites/NSLogo.svg" alt="Логотип">

            <div class="header__title">
                <div class="header__title-container">
                    <p class="header__title-text--mobile title-h3">Экспертные решения для вашего бизнеса</p>
                    
                    <span class="header__title-text">Экспертные решения</span>
                    <div class="header__title-transfer">
                        <span class="header__title-transfer-item">1С</span>
                        <span class="header__title-transfer-item">CRM</span>
                    </div>
                </div>

                <span class="header__title-text">для вашего бизнеса</span>
            </div>
        </div>
    </header>
</template>

<script setup>
    const props = defineProps({
        scrollToAnchor: {
            type: Function,
            required: true,
        }
    });
</script>
