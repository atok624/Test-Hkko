<script setup lang="ts">
import FaqContact from '@/components/investment/FaqContact.vue';
import ClientServices from '@/components/services/ClientServices.vue';
import Info from '@/components/services/Info.vue';
import ServiceGrid from '@/components/services/ServiceGrid.vue';
</script>

<template>
    <div class="w-[95%] md:w-[80%] lg:w-[75%] mx-auto my-5">
        <Info />
        <ClientServices />
        <ServiceGrid />
        <FaqContact />
    </div>
</template>