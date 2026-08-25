<template>

    <BlocksServerRentHero :scrollToAnchor="scrollToAnchor"></BlocksServerRentHero>

    <BlocksServerRentAdvantages></BlocksServerRentAdvantages>

    <BlocksServerRentTariffs :scrollToAnchor="scrollToAnchor"></BlocksServerRentTariffs>

    <BlocksServerRentInfrastructure></BlocksServerRentInfrastructure>

</template>

<script setup>
    const scrollToAnchor = useScrollToAnchor()
</script>
