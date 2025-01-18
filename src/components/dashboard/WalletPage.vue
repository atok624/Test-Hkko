<template>
    <div class="p-6">
      <h1 class="text-2xl font-semibold mb-6">Wallet</h1>
      <div class="bg-white shadow rounded-lg p-6 mb-6">
        <h2 class="text-lg font-semibold mb-2">Total balance</h2>
        <p class="text-3xl font-bold text-amber-600">${{ totalBalance.toFixed(2) }}</p>
      </div>
      <h2 class="text-xl font-semibold mb-4">Recent activity</h2>
      <div class="space-y-4">
        <div v-for="transaction in recentActivity" :key="transaction.id" class="shadow bg-gray-100 rounded-lg p-4">
          <h3 class="font-semibold">{{ transaction.title }}</h3>
          <p class="text-sm text-gray-600">{{ transaction.description }}</p>
          <p class="text-sm text-gray-500">{{ transaction.date }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const totalBalance = ref(49)
  
  const recentActivity = ref([
    {
      id: 1,
      title: 'Deposit Received',
      description: 'You received $400 on Nov 18, 2024. Transaction ID: #TXN12345.',
      date: 'Nov 18, 2024'
    },
    {
      id: 2,
      title: 'Purchase at Electronics Store',
      description: 'You spent $350 on Nov 17, 2024. Transaction ID: #TXN12346.',
      date: 'Nov 17, 2024'
    },
    {
      id: 3,
      title: 'Withdrawal Processed',
      description: 'You withdrew $100 on Nov 16, 2024. Transaction ID: #TXN12347.',
      date: 'Nov 16, 2024'
    },
    {
      id: 4,
      title: 'Refund Issued',
      description: 'A refund of $50 was issued on Nov 15, 2024. Transaction ID: #TXN12348.',
      date: 'Nov 15, 2024'
    },
    {
      id: 5,
      title: 'Subscription Payment',
      description: 'Your subscription was renewed for $30 on Nov 14, 2024. Transaction ID: #TXN12349.',
      date: 'Nov 14, 2024'
    },
    {
      id: 6,
      title: 'Deposit Received',
      description: 'You received $300 on Nov 13, 2024. Transaction ID: #TXN12350.',
      date: 'Nov 13, 2024'
    },
    {
      id: 7,
      title: 'Transfer to Savings',
      description: 'You transferred $500 to your savings account on Nov 12, 2024. Transaction ID: #TXN12351.',
      date: 'Nov 12, 2024'
    },
    {
      id: 8,
      title: 'Failed Payment',
      description: 'A payment of $75 was declined on Nov 11, 2024. Transaction ID: #TXN12352.',
      date: 'Nov 11, 2024'
    },
    {
      id: 9,
      title: 'Service Fee Deducted',
      description: 'A service fee of $5 was deducted on Nov 10, 2024. Transaction ID: #TXN12353.',
      date: 'Nov 10, 2024'
    }
  ])
  </script>