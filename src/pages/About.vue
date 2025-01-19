<template>
    <div class="w-[95%] md:w-[80%] lg:w-[75%] mx-auto">
        <About/>
        <BusinessInfo/>
        <BussinessSection/>
        <InfoCards/>
        <Video />
        <InfoSection/>
        <TestimonialCarousel/>
    </div>
</template>


<script setup>
import About from '@/components/about/About.vue';
import BusinessInfo from '@/components/about/BusinessInfo.vue';
import BussinessSection from '@/components/about/BussinessSection.vue';
import InfoCards from '@/components/about/InfoCards.vue';
import InfoSection from '@/components/about/InfoSection.vue';
import TestimonialCarousel from '@/components/about/TestimonialCarousel.vue';
import Video from '@/components/about/Video.vue';


</script>