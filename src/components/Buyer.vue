<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-[1200px] mx-auto px-6 py-12">
      <h1 class="text-[32px] font-Bold text-black mb-6">The Buyer's Calculator</h1>
      
      <p class="text-[15px] leading-[1.6] text-[#666] mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's.
      </p>

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Calculator Form -->
        <div class="w-full lg:w-1/3">
          <div class="mb-4">
            <label class="block text-[14px] text-[#666] mb-2">Choose Your Metal</label>
            <select 
              v-model="selectedMetal"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B1D1D]"
            >
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
            </select>
          </div>

          <div class="mb-6">
            <label class="block text-[14px] text-[#666] mb-2">Enter Your Budget</label>
            <input 
              type="text"
              v-model="budget"
              placeholder="USD"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B1D1D]"
            >
          </div>

          <button 
            @click="showResults"
            class="w-full bg-[#8B1D1D] text-white py-3 rounded-md hover:bg-[#7a1919] transition-colors"
          >
            Results
          </button>
        </div>

        <!-- Results Section -->
        <div class="w-full lg:w-2/3">
          <h2 class="text-[24px] font-bold text-black mb-6">Here's what we got for you</h2>
          
          <div class="flex gap-6">
            <div class="w-1/2">
              <img 
                src="/buyer.png"
                alt="Gold bars"
                class="w-full h-56 rounded-lg"
              />
            </div>
            <div class="w-1/2">
              <p class="text-[17px] leading-[1.6] text-[#666]">
                A long-term investment that lets you sell some of your gold for cash on occasion. This selection mixes bigger products with low fees to give you the best price per ounce of gold for your long-term investment, and smaller products with average fees that are easier to sell in the short-term
              </p>
            </div>
          </div>

          <div class="mt-8 bg-red-50 p-4 rounded-lg" v-if="cartEmpty">
            <p class="text-[15px] text-[#666]">Your cart is currently empty.</p>
          </div>

          <!-- Dynamic Results would appear here based on calculations -->
          <div v-if="showResultsSection" class="mt-8">
            <!-- Results content would be populated here -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Form state
const selectedMetal = ref('gold')
const budget = ref('')
const cartEmpty = ref(true)
const showResultsSection = ref(false)

// Show results function
const showResults = () => {
  if (budget.value && !isNaN(parseFloat(budget.value))) {
    showResultsSection.value = true
    // Calculate and display results based on metal type and budget
  }
}
</script>

<style>

</style>