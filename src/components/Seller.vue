<template>
  <div class="min-h-screen bg-white">
    <div class=" mx-auto px-6 py-12">
      <h1 class="text-[32px] font-bold text-black mb-6">The Seller's Calculator</h1>
      
      <p class="text-[17px] leading-[1.6] text-[#666] mb-8">
        Ready to sell your gold? Instantly estimate the value of your gold or silver based on real-time market prices. No hidden fees, no guesswork: just clarity. Make informed decisions about selling your gold and silver. Enter your product details in the form below to submit a request for a quote and receive your quote in less than a minute. We are also available to assist you by phone with easy personalized service.
      </p>

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Calculator Form -->
        <div class="w-full lg:w-7/12">
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-[14px] text-[#666] mb-2">Choose Your Metal</label>
              <select 
                v-model="selectedMetal"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B1D1D]"
              >
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
              </select>
            </div>
            <div>
              <label class="block text-[14px] text-[#666] mb-2">Purity</label>
              <select 
                v-model="selectedPurity"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B1D1D]"
              >
                <option value="0.999">24 Karat - 0.999</option>
                <option value="0.916">22 Karat - 0.916</option>
                <option value="0.750">18 Karat - 0.750</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label class="block text-[14px] text-[#666] mb-2">Enter Weight</label>
              <input 
                type="number"
                v-model="weight"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B1D1D]"
                placeholder="1"
              >
            </div>
            <div>
              <label class="block text-[14px] text-[#666] mb-2">Unit</label>
              <select 
                v-model="selectedUnit"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B1D1D]"
              >
                <option value="gram">Gram(s)</option>
                <option value="kg">Kilogram(s)</option>
                <option value="oz">Ounce(s)</option>
              </select>
            </div>
          </div>

          <button 
            @click="calculate"
            class="w-full bg-[#8B1D1D] text-white py-3 rounded-md hover:bg-[#7a1919] transition-colors"
          >
            Calculate
          </button>

          <p class="text-[14px] text-[#666] italic mt-4" v-if="!showResults">
            Results will be displayed like this 👇
          </p>

          <!-- Results Section -->
          <div v-if="showResults" class="mt-6">
            <div class="bg-[#333] text-white px-4 py-2 rounded-t-md">
              <span class="text-[14px]">1 GRAM Price (24K - 99.9% Purity)</span>
            </div>
            <div class="border border-gray-200 rounded-b-md">
              <div class="grid grid-cols-3 gap-4 p-4">
                <div>
                  <div class="text-[12px] text-[#666] mb-1">USD - US Dollar</div>
                  <div class="text-[16px] font-bold">${{ calculatedPrices.usd }}</div>
                </div>
                <div>
                  <div class="text-[12px] text-[#666] mb-1">EUR - Euro</div>
                  <div class="text-[16px] font-bold">€{{ calculatedPrices.eur }}</div>
                </div>
                <div>
                  <div class="text-[12px] text-[#666] mb-1">GHS - Ghana Cedi</div>
                  <div class="text-[16px] font-bold">{{ calculatedPrices.ghs }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h3 class="text-[18px] font-bold text-[#333] mb-4">Sell your precious metal to us</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="font-bold mr-2">Secure Pickup or Delivery:</span>
                <span class="text-[#666]">Sell from the comfort of your home or at our trusted shops.</span>
              </li>
              <li class="flex items-start">
                <span class="font-bold mr-2">Custom Alerts:</span>
                <span class="text-[#666]">Get notified when the gold price hits your target.</span>
              </li>
              <li class="flex items-start">
                <span class="font-bold mr-2">Zero Commitment:</span>
                <span class="text-[#666]">Use our calculator without any obligation to sell.</span>
              </li>
            </ul>

            <p class="text-[15px] text-[#666] mt-4">
              Go through our <a href="/selling-guide" class="text-[#8B1D1D] hover:underline">Seller's Guide</a> or click the button below to sell to us now.
            </p>

            <button class="w-full bg-[#8B1D1D] text-white py-3 rounded-md mt-4 hover:bg-[#7a1919] transition-colors">
              Sell Now
            </button>
          </div>
        </div>

        <!-- How It Works Section -->
        <div class="w-full lg:w-5/12 bg-[#FFF5F5] p-6 rounded-lg">
          <h2 class="text-[24px] font-bold text-[#333] mb-4">How It Works</h2>
          
          <ul class="space-y-2">
            <li class="">
              <span class="text-[17px] font-bold text-[#333] mb-2">1. Enter Details: </span>
              <span class="text-[16px] text-[#666]">Provide the purity and weight of your product.</span>
            </li>

            <li>
              <span class="text-[17px] font-bold text-[#333] mb-2">2. Get An Instant Quote: </span>
              <span class="text-[16px] text-[#666]">See the real-time value based on the latest gold prices.</span>
            </li>

            <li>
              <span class="text-[17px] font-bold text-[#333] mb-2">3. Sell To Us: </span>
              <span class="text-[16px] text-[#666]">Once you receive a quote, you can fill in the form to enable us pick up the product from your location or you can walk into our shop to sell directly In-Store.</span>
            </li>

            <div class="pt-6 border-t border-gray-200">
              <h2 class="text-[24px] font-bold text-[#333] mb-6">Key Values: </h2>
              
              <ul class="space-y-2">
                <li>
                  <span class="text-[17px] font-bold text-[#333] mb-2">Quick processing:</span>
                  <span class="text-[16px] text-[#666]">Fast and easy processing online or over the phone, ensuring your payment is processed quickly and securely.</span>
                  </li>

                <li>
                  <span class="text-[17px] font-bold text-[#333] mb-2">Integrity:</span>
                  <span class="text-[16px] text-[#666]">When selling your valuable assets, trust is one of the most important factors to consider. HKKO GOLD is a trusted player in the precious minerals industry and we stand by these high standards which have brought us this far in business.</span>
                </li>

                <li>
                  <span class="text-[17px] font-bold text-[#333] mb-2">Broad Assortment:</span>
                  <span class="text-[16px] text-[#666]">We buy bullion gold, gold coins, Dore gold, nuggets, gold jewelries, silver, rare coins and currency, as long as we can authenticate.</span>
                  </li>
                </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Form state
const selectedMetal = ref('gold')
const selectedPurity = ref('0.999')
const weight = ref(1)
const selectedUnit = ref('gram')
const showResults = ref(false)

// Mock current prices (in real app, these would come from an API)
const currentPrices = {
  gold: {
    usd: 68.1601,
    eur: 64.4203,
    ghs: 1378.25
  },
  silver: {
    usd: 28.50,
    eur: 26.75,
    ghs: 578.45
  }
}

// Calculated prices
const calculatedPrices = reactive({
  usd: '0.00',
  eur: '0.00',
  ghs: '0.00'
})

// Unit conversion factors
const unitFactors = {
  gram: 1,
  kg: 1000,
  oz: 31.1035
}

const calculate = () => {
  const basePrice = currentPrices[selectedMetal.value]
  const purity = parseFloat(selectedPurity.value)
  const weightInGrams = weight.value * unitFactors[selectedUnit.value]
  
  calculatedPrices.usd = (basePrice.usd * weightInGrams * purity).toFixed(4)
  calculatedPrices.eur = (basePrice.eur * weightInGrams * purity).toFixed(4)
  calculatedPrices.ghs = (basePrice.ghs * weightInGrams * purity).toFixed(2)
  
  showResults.value = true
}
</script>

<style>

</style>