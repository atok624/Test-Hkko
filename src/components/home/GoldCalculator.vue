<template>
  <div class=" bg-[#8B1818] py-16">
    <div class="container w-[95%] md:w-[85%] lg:w-[80%] mx-auto">
      <div class="grid lg:grid-cols-3 gap-1">
        <!-- Calculator Section -->
        <div class="lg:col-span-2 mx-auto w-4/5 mb-4">
          <h2 class="text-3xl font-bold text-white mb-4">Gold Calculator</h2>
          <p class="text-white/90 text-base mb-8">
            Get started now. Select a metal, enter a budget, and our savings assistant will help you start!
          </p>

          <form @submit.prevent="calculateResults" class="space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="space-y-2">
                <label class="block text-white text-base">Choose Your Metal</label>
                <select
                  v-model="selectedMetal"
                  class="w-full p-2 rounded-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="gold">Gold</option>
                  <option value="silver">Silver</option>
                </select>
              </div>

              <div class="space-y-2">
                <label class="block text-white text-base">Enter Your Budget</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">USD</span>
                  <input
                    v-model="budget"
                    type="number"
                    min="0"
                    step="0.01"
                    class="w-full p-2 pl-14 rounded-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              <div class="flex items-end">
                <button
                  type="submit"
                  class="w-full bg-[#EFA708] hover:bg-[#E69612] text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
                >
                  Results
                </button>
              </div>
            </div>
          </form>

          <!-- Results Section -->
          <div v-if="showResults" class="mt-6 p-6 bg-white/10 rounded-lg">
            <h3 class="text-white text-xl font-bold mb-4">Calculation Results</h3>
            <p class="text-white/90">
              With your budget of ${{ budget }}, you could purchase approximately:
              {{ calculateMetalAmount() }} {{ selectedMetal === 'gold' ? 'oz' : 'kg' }} of {{ selectedMetal }}
              at current market prices.
            </p>
          </div>
        </div>

        <!-- Information Card -->
        <div class="bg-[#A92323] p-8 rounded-lg">
          <h3 class="text-xl font-bold text-white mb-4">New To Gold Investment?</h3>
          <p class="text-white/90 text-sm mb-4">
            Find out more about us and our investment options with an information pack sent direct to you through the post.
          </p>
          <button
            @click="requestInfo"
            class="w-full bg-white hover:bg-gray-100 text-[#8B1818] font-bold text-sm py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Request Information Pack
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedMetal = ref('gold')
const budget = ref('')
const showResults = ref(false)

// Mock current prices (you would typically fetch these from an API)
const metalPrices = {
  gold: 1900, // USD per oz
  silver: 23,  // USD per oz
  platinum: 900 // USD per oz
}

const calculateMetalAmount = () => {
  const price = metalPrices[selectedMetal.value]
  const amount = (Number(budget.value) / price).toFixed(2)
  return amount
}

const calculateResults = () => {
  if (budget.value && Number(budget.value) > 0) {
    showResults.value = true
  }
}

const requestInfo = () => {
  // Implement information pack request logic here
  console.log('Information pack requested')
}
</script>