<template>
  <section class="bg-white py-16 mx-auto">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- FAQ Text (Desktop) -->
        <div class="hidden lg:block lg:col-span-2 relative ">
          <div 
            class="absolute top-1/2 left-1/2 transform  -rotate-90 origin-left text-transparent"
            style="-webkit-text-stroke: 2px #8B0000;"
          >
            <span class="FAQ font-bold">FAQ</span>
          </div>
        </div>

        <!-- Questions Section -->
        <div class="lg:col-span-6">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-gray-800">
            Have Any Questions?
          </h2>
          
          <div class="space-y-4">
            <div 
              v-for="(item, index) in faqItems" 
              :key="index"
              class="bg-red-50 rounded overflow-hidden"
            >
              <button 
                @click="toggleFaq(index)"
                class="w-full p-4 flex justify-between items-center text-left text-red-900 hover:bg-red-100 transition-colors"
                :aria-expanded="item.isOpen"
              >
                <span class="font-semibold">{{ item.question }}</span>
                <span 
                  class="transform transition-transform" 
                  :class="{ 'rotate-180': item.isOpen }"
                >
                  ▼
                </span>
              </button>
              
              <div 
                v-if="item.isOpen" 
                class="px-4 pb-4 bg-gray-50 p-6 text-black animate-fade-in"
              >
                {{ item.answer }}
              </div>
            </div>
          </div>
        </div>

        <!-- Appointment Form -->
        <div class="lg:col-span-4 bg-red-900 px-6 py-8 rounded-lg text-white">
          <h2 class="text-2xl font-bold mb-2 text-center">
            Schedule An Appointment
          </h2>
          <p class="text-center text-base mb-6">
            Lorem Ipsum is simply dummy
          </p>
          
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div class="grid grid-cols-1 gap-4">
              <input
                v-model="form.name"
                type="text"
                placeholder="Name"
                class="w-full p-3 rounded bg-white text-gray-800"
                required
                aria-label="Name"
              >
              
              <input
                v-model="form.email"
                type="email"
                placeholder="Email"
                class="w-full p-3 rounded bg-white text-gray-800"
                required
                aria-label="Email"
              >
              
              <input
                v-model="form.phone"
                type="tel"
                placeholder="Phone"
                class="w-full p-3 rounded bg-white text-gray-800"
                required
                aria-label="Phone"
              >
              
              <textarea
                v-model="form.message"
                placeholder="Message"
                rows="4"
                class="w-full p-3 rounded bg-white text-gray-800"
                required
                aria-label="Message"
              ></textarea>
              
              <button
                type="submit"
                class="w-full p-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Send Appointment Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const faqItems = ref([
  {
    question: 'What are gold-backed investments?',
    answer: 'Gold-backed investments are financial products where your investment is supported by physical gold or gold-related assets, providing a stable and secure option to protect wealth and generate returns.',
    isOpen: false
  },
  {
    question: 'How do I earn monthly returns from my investments?',
    answer: 'Our gold-backed investment options offer consistent monthly returns through carefully managed assets, backed by industry expertise, ensuring growth and stability.',
    isOpen: false
  },
  {
    question: 'Is my investment safe?',
    answer: 'Yes, your investment is backed by gold, which has been a reliable store of value for centuries. We also employ transparent management practices to ensure your investment is protected.',
    isOpen: false
  },
  {
    question: 'How can I trade gold or silver through your platform?',
    answer: 'Our platform allows you to buy, sell, or exchange your physical gold or silver with ease. All transactions are verified, and delivery is insured to ensure your security.',
    isOpen: false
  },
  {
    question: 'Why should I choose gold or silver as an investment?',
    answer: 'Gold and silver are considered safe-haven assets, especially in times of inflation or economic uncertainty. By investing in these precious metals, you protect your wealth from the devaluation of currencies.',
    isOpen: false
  },
  {
    question: 'Can I withdraw my returns or principal at any time?',
    answer: 'Withdrawal policies may vary based on the specific investment structure. We recommend reviewing the terms of your investment for details on withdrawal processes and timelines.',
    isOpen: false
  },
  {
    question: 'How do I get started with gold-backed investments?',
    answer: 'Getting started is easy. Simply contact us to discuss your investment goals, and we’ll guide you through the process of securing and growing your investment in gold-backed assets.',
    isOpen: false
  },
  {
    question: 'What makes your platform different from others?',
    answer: 'Our platform offers verified listings, real-time pricing, insured delivery, and transparent management, ensuring that you can trade with confidence and security.',
    isOpen: false
  }
])

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const toggleFaq = (index) => {
  faqItems.value = faqItems.value.map((item, i) => ({
    ...item,
    isOpen: i === index ? !item.isOpen : false
  }))
}

const handleSubmit = () => {
  // Enhanced form submission logic
  if (validateForm()) {
    console.log('Form submitted:', { ...form })
    // Reset form after submission
    Object.keys(form).forEach(key => form[key] = '')
  }
}

const validateForm = () => {
  // Basic form validation
  return Object.values(form).every(value => value.trim() !== '')
}
</script>

<style scoped>
.FAQ{
  font-size: 12rem;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
</style>