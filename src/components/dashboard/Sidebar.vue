<template>
    <aside class="w-100 rounded my-10 h-screen mr-5 bg-white border-r border-gray-200">
      <nav class="flex flex-col h-full">
        <!-- Navigation Links -->
        <div class="flex-1 mt-10">
          <router-link
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            :class="[
              'flex items-center px-6 mb-5 py-3 text-lg font-medium',
              'hover:bg-red-900 hover:text-white transition-colors duration-200',
              $route.path === item.path ? 'bg-amber-100 text-amber-900 font-medium' : 'text-gray-700'
            ]"
          >
            <component :is="item.icon" class="w-5 h-5 mr-3" :class="item.iconClass" />
            {{ item.name }}
          </router-link>
        </div>
  
        <!-- Logout Button -->
         <hr>
        <button
          @click="handleLogout"
          class="flex justify-center items-center px-6  py-5 text-base text-red-600 hover:bg-red-50 transition-colors duration-200"
        >
          <LogOut class="w-5 h-5 mr-3" />
          LOGOUT
        </button>
      </nav>
    </aside>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import {
    Settings,
    Wallet,
    History,
    Bell,
    ShoppingBag,
    Bookmark,
    Trash2,
    LogOut
  } from 'lucide-vue-next'
  
  const router = useRouter()
  
  const navigationItems = ref([
  {
      name: 'Notifications',
      path: '/dashboard/notifications',
      icon: Bell,
      iconClass: 'text-red-900'
    },
    {
      name: 'Profile Settings',
      path: '/dashboard/profile',
      icon: Settings,
      iconClass: 'text-red-900'
    },
    {
      name: 'Wallet',
      path: '/dashboard/wallet',
      icon: Wallet,
      iconClass: 'text-red-900'
    },
    {
      name: 'Transaction History',
      path: '/dashboard/transactions',
      icon: History,
      iconClass: 'text-red-900'
    },
    {
      name: 'Orders',
      path: '/dashboard/orders',
      icon: ShoppingBag,
      iconClass: 'text-red-900'
    },
    {
      name: 'Saved Items',
      path: '/dashboard/saved',
      icon: Bookmark,
      iconClass: 'text-red-900'
    },
    {
      name: 'Delete Account',
      path: '/dashboard/delete-account',
      icon: Trash2,
      iconClass: 'text-red-900'
    }
  ])
  
  const handleLogout = () => {
    // Add logout logic here
    router.push('/login')
  }
  </script>
  
  <style scoped>
  .router-link-active {
    @apply bg-amber-100 text-amber-900 font-medium;
  }
  </style>