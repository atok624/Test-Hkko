<template>
    <div class="bg-white rounded-lg overflow-hidden shadow-lg">
      <div class="relative h-48">
        <img 
          :src="image" 
          :alt="title"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="p-6">
        <h2 class="text-[18px] font-bold text-black mb-3">{{ title }}</h2>
        <p class="text-[15px] leading-[1.6] text-[#666] mb-4">
          {{ excerpt }}
        </p>
        <a :href="link" class="inline-block text-[#8B1D1D] text-[14px] font-bold hover:underline">
          READ MORE »
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    image: String,
    title: String,
    excerpt: String,
    link: String
  })
  </script>

  <style>
</style>