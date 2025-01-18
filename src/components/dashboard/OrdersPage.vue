<template>
    <div class="p-6">
      <h1 class="text-2xl font-semibold mb-6">Orders</h1>
      <div class="space-y-4">
        <div v-for="order in orders" :key="order.id" class="bg-gray-100 shadow rounded-lg p-4">
          <h2 class="font-semibold text-lg">Order #{{ order.id }}</h2>
          <p class="text-gray-600">{{ order.description }}</p>
          <p class="text-sm text-gray-500">{{ order.date }}</p>
          <p class="text-sm font-semibold mt-2">Status: {{ order.status }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const orders = ref([
    {
      id: '12345',
      description: '2x Gold Bars (25kg each)',
      date: 'Nov 18, 2024',
      status: 'Shipped'
    },
    {
      id: '12346',
      description: '1x Silver Coin (40kg)',
      date: 'Nov 15, 2024',
      status: 'Processing'
    },
    {
      id: '12347',
      description: '3x Gold Coins (12kg each)',
      date: 'Nov 10, 2024',
      status: 'Delivered'
    }
  ])
  </script>
  
  