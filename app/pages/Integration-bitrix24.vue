<script setup>
import BitrixHero from '~/widgets/bitrix24/Hero/ui/BitrixHero.vue'
import BitrixAdvantages from '~/widgets/bitrix24/Advantages/ui/BitrixAdvantages.vue'
import BitrixServices from '~/widgets/bitrix24/Services/ui/BitrixServices.vue'
import BitrixProcess from '~/widgets/bitrix24/Process/ui/BitrixProcess.vue'
import BitrixCTA from '~/widgets/bitrix24/CTA/ui/BitrixCTA.vue'


useSeoMeta({
  title: 'Интеграция Битрикс24 — NanoSoft',
  description: 'Интеграция Битрикс24 и 1С. Автоматизация CRM и бизнес-процессов.',
})
</script>

<template>
  <main class="bitrix-page">

    <BitrixHero />

    <BitrixAdvantages />

    <BitrixServices />

    <BitrixProcess />

    <BitrixCTA />

  </main>
</template>

<style scoped lang="scss">
.bitrix-page {
  overflow: hidden;
}
</style>
