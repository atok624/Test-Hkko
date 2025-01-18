<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-4xl font-bold text-gray-900 mb-6">Seller's Calculator</h1>

    <p class="text-gray-700 text-base mb-12 max-w-6xl">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s. Lorem Ipsum has been the industry's.
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Calculator Form -->
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label for="metal" class="block text-gray-600">
              Choose Your Metal
            </label>
            <select id="metal" v-model="selectedMetal"
              class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 text-gray-900">
              <option value="" disabled>Select Metal Type</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
            </select>
          </div>

          <div class="space-y-2">
            <label for="purity" class="block text-gray-600">
              Purity
            </label>
            <input id="purity" type="number" v-model="purity" placeholder="0"
              class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 text-gray-900"
              min="0" max="100" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label for="weight" class="block text-gray-600">
              Enter Your Weight
            </label>
            <div class="relative">
              <input id="weight" type="number" v-model="weight" placeholder="USD"
                class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 text-gray-900"
                min="0" step="0.01" />
            </div>
          </div>

          <div class="space-y-2">
            <label for="budget" class="block text-gray-600">
              Enter Your Budget
            </label>
            <div class="relative">
              <input id="budget" type="number" v-model="budget" placeholder="USD"
                class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 text-gray-900"
                min="0" step="0.01" />
            </div>
          </div>
        </div>

        <button @click="calculate"
          class="w-full bg-red-900 mt-6 text-white py-3 px-6 rounded-lg hover:bg-red-800 transition-colors duration-200 font-medium">
          Calculate
        </button>
        <div class="space-y-4 mt-11">
          <h2 class="text-2xl font-bold text-gray-900">Sell your precious metal to us</h2>

          <p class="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>

          <button @click="sellNow"
            class="bg-red-900 text-white px-20 py-3 rounded hover:bg-red-800 transition-colors duration-200">
            Sell Now
          </button>
        </div>
      </div>

      <!-- Results Section -->
      <div class="bg-red-50 p-8 rounded-lg space-y-6">
        <h2 class="text-2xl font-bold text-gray-900">Here's what we got for you</h2>

        <div class="space-y-4 text-gray-700">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </p>

          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it look like readable English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
          </p>

          <div v-if="hasCalculated" class="mt-6 space-y-4">
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h3 class="font-semibold text-lg text-gray-900">Estimated Value</h3>
              <p class="text-red-900 font-bold text-xl">${{ calculatedValue.toLocaleString() }}</p>
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
const purity = ref('')
const weight = ref('')
const budget = ref('')
const hasCalculated = ref(false)
const calculatedValue = ref(0)

const calculate = () => {
  if (!selectedMetal.value || !purity.value || !weight.value || !budget.value) {
    alert('Please fill in all fields')
    return
  }

  // Simulate calculation
  hasCalculated.value = true
  calculatedValue.value = parseFloat(budget.value) * (parseFloat(purity.value) / 100)
}
</script>