<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-[1200px] mx-auto px-6 py-12">
      <h1 class="text-5xl font-bold text-[#333] mb-8">Frequently Asked Questions</h1>

      <div class="mb-12">
        <h2 class="text-2xl font-bold text-[#333] mb-4">Need some assistance with your orders?</h2>
        <p class="text-[17px] leading-[1.6] text-[#666] mb-4">
          Welcome to our Frequently Asked Questions page! If you can't find what you're looking for, please get in touch with us and we'll be happy to help you navigate through all the exciting offers you'll see here in life.
        </p>
        <p class="text-[15px] leading-[1.6] text-[#666]">
          So, whether you're a seasoned coin collector, a savvy investor, or just looking for a gift, we've got you covered. This page is packed with helpful information about our products and services. Can't find what you're looking for? No problem - we've got all the answers* we've got everything here to make your shopping experience with us smooth sailing.
        </p>
      </div>

      <!-- Popular Questions Section -->
      <div class="mb-8">
        <h2 class="text-[24px] font-bold text-[#333] mb-6">Popular Questions</h2>
        
        <div class="space-y-4">
          <div v-for="(question, index) in popularQuestions" :key="index" class="border-b border-gray-200">
            <button 
              class="w-full flex justify-between items-center py-4 text-left hover:text-[#8B1D1D]"
              @click="toggleQuestion(question)"
            >
              <span class="text-[16px] font-bold">{{ question.title }}</span>
              <span class="transform transition-transform" :class="{ 'rotate-180': question.isOpen }">
                ▼
              </span>
            </button>
            <div 
              v-show="question.isOpen"
              class="p-4 text-[15px] bg-red-50 leading-[1.6] text-[#666]"
            >
              {{ question.answer }}
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="mt-12">
        <h2 class="text-[24px] font-bold text-[#333] mb-6">Didn't see what you need?</h2>
        <p class="text-[15px] leading-[1.6] text-[#666] mb-6">
          Use this contact form to get quick help with your questions answered
        </p>

        <form @submit.prevent="submitForm" class="max-w-2xl">
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <input 
                v-model="form.firstName"
                type="text"
                placeholder="First Name"
                class="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B1D1D]"
                required
              />
            </div>
            <div>
              <input 
                v-model="form.lastName"
                type="text"
                placeholder="Last Name"
                class="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B1D1D]"
                required
              />
            </div>
          </div>

          <div class="mb-4">
            <input 
              v-model="form.email"
              type="email"
              placeholder="Email"
              class="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B1D1D]"
              required
            />
          </div>

          <div class="mb-4">
            <input 
              v-model="form.phone"
              type="tel"
              placeholder="Phone"
              class="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B1D1D]"
            />
          </div>

          <div class="mb-4">
            <select 
              v-model="form.reason"
              class="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B1D1D] bg-white"
              required
            >
              <option value="">Why are you contacting us? (Select One)</option>
              <option value="order">Order Status</option>
              <option value="product">Product Information</option>
              <option value="payment">Payment Issues</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="mb-6">
            <textarea 
              v-model="form.message"
              placeholder="Message"
              rows="6"
              class="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B1D1D]"
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            class="w-full bg-red-800 text-white py-4 rounded-md hover:bg-gray-800 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const popularQuestions = ref([
  {
    title: "Does HKKO GOLD have any physical shops?",
    answer: "HKKO GOLD does have physical shops. We are located in two locations at the moment. We have an online platform as well. However, if you have any question, you can contact our customer service by email, live chat, or phone or visit our location near you.",
    isOpen: false
  },
  {
    title: "Do you report my precious metals purchases to anyone outside of HKKO GOLD?",
    answer: "HKKO GOLD is an independent private company without any government influence. We don't report our sale transactions to anyone.",
    isOpen: false
  },
  {
    title: "Can my prices change after I have placed my order?",
    answer: "As soon as you have placed your order, this price will be secured and can no longer change. You will then receive a confirmation email detailing your purchase as well as your locked prices.",
    isOpen: false
  },
  {
    title: "Do you offer discounts on HKKO GOLD products?",
    answer: "We sometimes offer discounts on large orders. Please contact our sales Department at sales@hkkogold.com.",
    isOpen: false
  },
  {
    title: "Do I have to pay taxes on the profit made from reselling Precious Metals?",
    answer: "Ghana has tax on capital gain which is 23%. For all other countries, please consult a financial advisor.",
    isOpen: false
  },
  {
    title: "Do I have to declare the Precious Metals I buy on HKKO GOLD?",
    answer: "HKKO GOLD provides you with a certificate for your tax return (if applicable in your country) but does not perform this transaction for you.",
    isOpen: false
  },
  {
    title: "Do I have to pay taxes on the profit made from reselling Precious Metals?",
    answer: "Ghana has tax on capital gain which is 23%. For all other countries, please consult a financial advisor.",
    isOpen: false
  },
  {
    title: "Do I have to pay VAT on gold and silver?",
    answer: "Investment gold is VAT free in most countries, including Ghana. Although it depends on the gold's purity. For other precious metals, VAT may apply. Please contact your local customs office for more information.",
    isOpen: false
  },
  {
    title: "How can I change the currency on the website?",
    answer: "You can change the currency by clicking on the currency image on the top right of the website.",
    isOpen: false
  },
  {
    title: "Why does the margin on precious metals products increase on weekends?",
    answer: "As the gold and precious metals markets are closed on weekends and holidays, we increase the margin on precious metals products to cover for price fluctuations when the markets reopen.",
    isOpen: false
  },
  {
    title: "Do I have to pay taxes on the profit made from reselling Precious Metals?",
    answer: "Ghana has tax on capital gain which is 23%. For all other countries, please consult a financial advisor.",
    isOpen: false
  },
  {
    title: "Why is the price of the products in my wallet lower than their purchasing price?",
    answer: "Here is the composition of a product's price: TOTAL PRICE: This is the price you will pay to purchase a product. It is composed of the metal value, the margin, and the VAT (Note: gold is VAT-free in Ghana). METAL VALUE: This is the amount you see in your wallet, what you will receive if you sell this product back to us immediately. HKKO GOLD does not take any commission on the buyback and will pay you the full metal value at the time of your sale. MARGIN: The margin (also called premium) includes the production and operational costs (handling, warehousing, etc.), as well as our reseller's margin. It is the only part of the price taken by HKKO GOLD. VAT (Value Added Tax): In Ghana gold is VAT-free, other precious metals are charged a VAT rate. For each product, you can see these details by clicking on its price.",
    isOpen: false
  },
  {
    title: "What market price do you use to set the metal prices on HKKO GOLD?",
    answer: "Our prices are set by the market makers and are based on the London LBMA Gold Price. The Fixing is done at 10:30 and 15:00 (London time). The price quotation is continuous thanks to the market makers, which is why the metal price on our website is updated every 3-5 minutes.",
    isOpen: false
  },
  {
    title: "How much is the capital gains tax for precious metal products?",
    answer: "In Ghana, there are no taxes on capital gains. However, investment gold is taken into account in the calculation of the wealth tax. Please check with your local tax authorities for any taxes on precious metals in your country.",
    isOpen: false
  },
  {
    title: "13.	Why is there a price difference between products with the same weight?",
    answer: "The price difference between two products of the same weight come from their margin level. The margin (also called 'premium') is the part of the price covering our costs and reseller's margin, it varies depending on the product’s rarity, craftsmanship, and its associated costs (production, handling, warehousing, etc.). Therefore a cast bar and a Royal HKKO GOLD minted bar of the same weight will have a price difference due to the Lady Fortuna's higher production and craftsmanship costs.",
    isOpen: false
  },
])

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  reason: '',
  message: ''
})

const toggleQuestion = (question) => {
  question.isOpen = !question.isOpen
}

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  // Reset form after submission
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  }
}
</script>

<style>

</style>