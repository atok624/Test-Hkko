<template>
    <div class="p-6">
      <h1 class="text-2xl font-semibold mb-6">Notifications</h1>
      <div class="space-y-4 ">
        <div v-for="notification in notifications" :key="notification.id" class="shadow bg-gray-100 rounded-lg p-4">
          <h2 class="font-semibold text-base mb-1">{{ notification.title }}</h2>
          <p class="text-gray-600 mb-1">{{ notification.message }}</p>
          <p class="text-sm text-gray-500">{{ notification.date }}</p>
        </div>
      </div>
      <button @click="deleteAll" class="mt-6 text-red-600 hover:text-red-800 text-sm">
        Delete all
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const notifications = ref([
    {
      id: 1,
      title: 'Deposit of $400 made into your account',
      message: 'Transaction date: 9/49',
      date: '2 hours ago'
    },
    {
      id: 2,
      title: 'Your Order Has Been Shipped!',
      message: 'Your order #12345 is on its way. Track your delivery now.',
      date: '1 day ago'
    },
    {
      id: 3,
      title: 'Flash Sale Ending Soon!',
      message: 'Hurry! Up to 50% off electronics. Sale ends at midnight.',
      date: '2 days ago'
    },
    {
      id: 4,
      title: 'Price Drop Alert!',
      message: 'The item in your wishlist is now 20% off. Grab it before it is gone.',
      date: '3 days ago'
    },
    {
      id: 5,
      title: 'Welcome Back!',
      message: 'We\'ve missed you! Check out the latest arrivals just for you.',
      date: '1 week ago'
    },
    {
      id: 6,
      title: 'Exclusive Discount Just for You!',
      message: 'Enjoy 10% off your next purchase. Use code: WELCOME10.',
      date: '1 week ago'
    },
    {
      id: 7,
      title: 'Restock Notification!',
      message: 'The item you\'ve been waiting for is back in stock. Don\'t miss out.',
      date: '2 weeks ago'
    },
    {
      id: 8,
      title: 'Rate Your Purchase!',
      message: 'How did we do? Share your feedback on your recent order #12345.',
      date: '2 weeks ago'
    },
    {
      id: 9,
      title: 'Congratulations, You Earned Rewards!',
      message: 'You\'ve earned 50 reward points. Redeem them for discounts.',
      date: '3 weeks ago'
    }
  ])
  
  const deleteAll = () => {
    // In a real application, you would call an API to delete all notifications
    notifications.value = []
  }
  </script>