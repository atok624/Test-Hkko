<template>
    <div class="max-w-7xl mx-auto px-4 flex flex-col justify-center items-center sm:px-6 lg:px-8 py-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">The Buyer's Calculator</h1>
      
      <p class="text-gray-700 text-base mb-12 max-w-5xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's.
      </p>
  
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Calculator Form -->
        <div class="space-y-6 lg:col-span-1 mb-10 ">
          <div class="space-y-2">
            <label for="metal" class="block text-lg text-gray-600">
              Choose Your Metal
            </label>
            <select
              id="metal"
              v-model="selectedMetal"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 text-gray-900"
            >
              <option value="" disabled>Select Metal Type</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
            </select>
          </div>
  
          <div class="space-y-2">
            <label for="budget" class="block text-lg text-gray-600">
              Enter Your Budget (US $)
            </label>
            <div class="relative">
              <input
                id="budget"
                type="number"
                v-model="budget"
                placeholder="USD"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 text-gray-900"
                min="0"
                step="0.01"
              />
            </div>
          </div>
  
          <button
            @click="calculateResults"
            class="w-full bg-red-900 text-white py-4 px-6 rounded-lg hover:bg-red-800 transition-colors duration-200 font-medium text-lg"
          >
            Get Results
          </button>
        </div>
  
        <!-- Results Section -->
        <div class="space-y-6 lg:col-span-2">
          <h2 class="text-3xl font-bold text-gray-900">Here's what we got for you</h2>
          
          
          <div class="relative">
            <div class="flex">
            <img
              src="/src/images/hkko.png"
              alt="Stack of gold bars representing investment options"
              class="w-full rounded-lg object-cover mb-6"
            />
            
            <p class="text-gray-700 flex self-center text-lg mb-8">
              A long-term investment that lets you sell some of your gold for cash on occasion. This selection mixes bigger products with low fees to give you the best price per ounce of gold for your long-term investment, and smaller products with average fees that are easier to sell in the short-term
            </p>

          </div>
            
  
            <div v-if="!hasCalculated" class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p class="text-gray-600 text-lg">
                Products will populate here when you calculate.
              </p>
            </div>
  
            <div v-else class="space-y-4">
              <div v-for="(product, index) in calculatedProducts" :key="index" class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 class="font-semibold text-lg text-gray-900">{{ product.name }}</h3>
                <p class="text-gray-600">{{ product.description }}</p>
                <p class="text-red-900 font-bold mt-2">${{ product.price.toLocaleString() }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const selectedMetal = ref('')
  const budget = ref('')
  const hasCalculated = ref(false)
  const calculatedProducts = ref([])
  
  const calculateResults = () => {
    if (!selectedMetal.value || !budget.value) {
      alert('Please fill in all fields')
      return
    }
  
    // Simulate API call or calculation
    hasCalculated.value = true
    calculatedProducts.value = [
      {
        name: '1 oz Gold Bar',
        description: 'Pure gold bar, perfect for long-term investment',
        price: 1950.00
      },
      {
        name: '1/2 oz Gold Bar',
        description: 'Smaller denomination for flexible selling options',
        price: 985.00
      },
      {
        name: '1/4 oz Gold Coin',
        description: 'Popular choice for both collecting and investment',
        price: 495.00
      }
    ]
  }
  </script>

  <style scoped>
  img {
    max-width: 250px;
    height: auto;
  }
  </style>