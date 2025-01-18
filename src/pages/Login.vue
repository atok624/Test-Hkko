<template>
  <div class="flex items-center justify-center p-6 bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-2 text-center">Welcome to HKKO GOLD</h2>
      <p class="text-sm text-gray-600 mb-6 text-center">please enter your details below to login</p>
      
      <!-- Success Message -->
      <div v-if="success" class="text-center text-green-600 mb-4">
        Login successful! Redirecting...
      </div>

      <!-- Error State -->
      <div v-if="error" class="text-center text-red-600 mb-4">
        {{ error }}
      </div>
      
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">E-mail</label>
          <input v-model="form.email" id="email" type="email" placeholder="Email Name" required
                 class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
        </div>
        
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input v-model="form.password" id="password" type="password" placeholder="Enter Password" required
                 class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
        </div>
        
        <button type="submit" 
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Submit
        </button>
        
        <div class="flex items-center justify-center">
          <input v-model="form.rememberMe" id="remember-me" type="checkbox" class="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded">
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>
      </form>
      
      <div class="mt-4 text-sm text-center">
        <a href="#" @click.prevent="navigateToResetPassword" class="font-medium text-red-800 hover:text-red-900">Forgot your password?</a>
      </div>
      
      <div class="mt-2 text-sm text-center">
        Don't have an account? 
        <a href="#" @click.prevent="navigateToSignup" class="font-medium text-red-800 hover:text-red-900">Click here</a> to Sign up!
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const form = reactive({
  email: '',
  password: '',
  rememberMe: false
})

const success = ref(false)
const error = ref(null)

const router = useRouter()

const handleSubmit = () => {
  // Clear previous messages
  success.value = false
  error.value = null

  // Validate the form fields
  if (!form.email || !form.password) {
    error.value = 'Please fill in both email and password.'
    return
  }

  // Simulate a successful login (for example, comparing with stored credentials)
  if (form.email === 'test@example.com' && form.password === 'password123') {
    success.value = true
    // Redirect after a short delay
    setTimeout(() => {
      router.push('/dashboard')
    }, 2000)
  } else {
    error.value = 'Invalid credentials. Please try again.'
  }
}

const navigateToResetPassword = () => {
  router.push('/reset-password') 
}

const navigateToSignup = () => {
  router.push('/signup') 
}
</script>
