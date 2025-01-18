<template>
    <div class="p-6 max-w-2xl ml-6">
      <h1 class="text-2xl font-semibold mb-6">Delete Account</h1>
      <div class="bg-gray-100 shadow rounded-lg p-6">
        <p class="text-gray-600 mb-4">
          We're sorry to see you go. Please note that deleting your account is permanent and cannot be undone.
          All your data, including transaction history and saved items, will be permanently removed.
        </p>
        <div class="mb-4">
          <label for="reason" class="block text-sm font-medium text-gray-700 mb-2">
            Please tell us why you're leaving (optional):
          </label>
          <textarea
            id="reason"
            v-model="reason"
            rows="4"
            class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-red-900"
            placeholder="Your feedback helps us improve our service."
          ></textarea>
        </div>
        <div class="mb-4">
          <label class="flex items-center">
            <input
              type="checkbox"
              v-model="confirmDelete"
              class="form-checkbox text-red-900"
            >
            <span class="ml-2 text-sm text-gray-700">I understand that this action is permanent and cannot be undone.</span>
          </label>
        </div>
        <button
          @click="deleteAccount"
          :disabled="!confirmDelete"
          class="w-full bg-red-900 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Delete My Account
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const reason = ref('')
  const confirmDelete = ref(false)
  
  const deleteAccount = () => {
    if (confirmDelete.value) {
      // In a real application, you would call an API to delete the account
      console.log('Account deleted. Reason:', reason.value)
      // You might also want to show a confirmation message and redirect the user
      alert('Your account has been successfully deleted. We hope to see you again in the future!')
      // Redirect to home page or login page
    }
  }
  </script>
  
  