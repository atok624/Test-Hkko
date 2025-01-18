<template>
    <div class="flex bg-gray-100 px-36">
      <Sidebar />
      <main class="flex-1 bg-white rounded my-10">
        <router-view></router-view>
      </main>
    </div>
  </template>
  
  <script setup>
  import Sidebar from './Sidebar.vue'
  
  </script>