<template>
  <div class="p-6 bg-white">
    <h1 class="text-2xl font-semibold mb-6">Saved Items</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="item in savedItems" :key="item.id" class="bg-gray-100 shadow-md rounded-lg overflow-hidden">
        <div class="relative">
          <img 
            :src="item.image" 
            :alt="item.name" 
            class="w-full h-48 object-cover"
          >
          <div class="absolute bottom--1 right-2 flex space-x-1">
            <button class="p-2 bg-white -mt-4 hover:bg-gray-100 transition-colors">
              <ShoppingCart class="w-5 h-5 text-gray-600" />
            </button>
            <button class="p-2 bg-white -mt-4 hover:bg-gray-100 transition-colors">
              <Eye class="w-5 h-5 text-gray-600" />
            </button>
            <button class="p-2 bg-white -mt-4 hover:bg-gray-100 transition-colors">
              <Trash2 class="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        <div class="p-4 mt-5">
          <h2 class="text-center text-gray-900 text-base mb-1">{{ item.name }}</h2>
          <p class="text-center text-red-500 font-bold">${{ item.price.toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ShoppingCart, Eye, Trash2 } from 'lucide-vue-next'

const savedItems = ref([
  {
    id: 1,
    name: '25kg Gold Bars',
    price: 3101.00,
    image: '/src/images/financial-sector.jpg'
  },
  {
    id: 2,
    name: '35kg Gold Coin',
    price: 600.00,
    image: '/src/images/closeup-shot-pile-shiny-gold-coins-bars.jpg'
  },
  {
    id: 3,
    name: '12kg Gold Coin',
    price: 400.00,
    image: '/src/images/wooden-background.jpg'
  },
  {
    id: 4,
    name: '40kg Silver Coin',
    price: 300.00,
    image: '/src/images/scattered-table.jpg'
  },
  {
    id: 5,
    name: '30kg Silver Coin',
    price: 200.00,
    image: '/src/images/financial-sector.jpg'
  },
  {
    id: 6,
    name: '10kg Cast Bar',
    price: 250.00,
    image: '/src/images/closeup-shot-pile-shiny-gold-coins-bars.jpg'
  }
])
</script>

