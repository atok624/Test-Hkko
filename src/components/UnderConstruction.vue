<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Site Under Construction</h2>
        <p class="text-gray-600 mb-6">
          We're currently working on improving our website to serve you better. Thank you for your patience!
        </p>
        <div class="flex justify-center">
          <button
            @click="$emit('close')"
            class="bg-red-500 hover:bg-red-600 text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineEmits(['close']);
  </script>