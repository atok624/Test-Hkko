<template>
    <transition name="fade">
      <div v-if="show" class="fixed top-4 right-4 bg-red-600 text-white p-4 rounded-md shadow-lg z-50">
        Item added to cart successfully!
      </div>
    </transition>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  defineProps({
    show: Boolean
  })
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  
  