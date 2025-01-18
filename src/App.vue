<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
    <UnderConstruction v-if="showPopup" @close="closePopup" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import UnderConstruction from './components/UnderConstruction.vue';

const showPopup = ref(true);

const closePopup = () => {
  showPopup.value = false;
};

onMounted(() => {
  showPopup.value = true;
});
</script>

