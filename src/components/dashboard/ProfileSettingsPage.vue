<template>
    <div class="p-6 max-w-2xl ml-6">
      <h1 class="text-2xl font-semibold mb-6">Profile Settings</h1>
      <form @submit.prevent="saveChanges" class="space-y-6">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label for="firstName" class="block text-sm font-medium text-gray-700">First name</label>
            <input type="text" id="firstName" v-model="profile.firstName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-900 focus:ring-red-900">
          </div>
          <div>
            <label for="lastName" class="block text-sm font-medium text-gray-700">Last name</label>
            <input type="text" id="lastName" v-model="profile.lastName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-900 focus:ring-red-900">
          </div>
          <div>
            <label for="dateOfBirth" class="block text-sm font-medium text-gray-700">Date of birth</label>
            <input type="date" id="dateOfBirth" v-model="profile.dateOfBirth" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-900 focus:ring-red-900">
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
            <input type="tel" id="phone" v-model="profile.phone" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-900 focus:ring-red-900">
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <input type="email" id="email" v-model="profile.email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-900 focus:ring-red-900">
        </div>
        <div>
          <label for="language" class="block text-sm font-medium text-gray-700">Preferred language</label>
          <select id="language" v-model="profile.language" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-900 focus:ring-red-900">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="german">German</option>
          </select>
        </div>
        <div class="text-sm text-gray-500">
          NOTE: Please contact our customer service if you'd like to update your first name, last name, and phone number.
        </div>
        <div>
          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const profile = ref({
    firstName: 'Test',
    lastName: 'Tetteh',
    dateOfBirth: '1990-01-01',
    phone: '+233 00 000 0000',
    email: 'test@example.com',
    language: 'english'
  })
  
  const saveChanges = () => {
    // In a real application, you would send the updated profile to an API
    console.log('Profile updated:', profile.value)
    // You might also want to show a success message to the user
    alert('Profile updated successfully!')
  }
  </script>