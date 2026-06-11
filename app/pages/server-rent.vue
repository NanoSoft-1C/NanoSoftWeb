<script setup>
useSeoMeta({
  title: 'Аренда серверов — NanoSoft',
  description: 'Аренда выделенных серверов и VPS. Настройка, поддержка и масштабирование инфраструктуры. Аренда сервера для 1С.',
})


</script>

<template>
  <main class="server-page">

    <WidgetsServerRentHeroUiServerHero />

    <WidgetsServerRentAdvantagesUiServerAdvantages />

    <WidgetsServerRentTariffsUiServerTariffs />

    <WidgetsServerRentInfrastructureUiServerInfrastructure />

    <WidgetsServerRentCTAUiServerCTA />

  </main>
</template>

<style scoped lang="scss">
.server-page {
  overflow: hidden;
}

</style>