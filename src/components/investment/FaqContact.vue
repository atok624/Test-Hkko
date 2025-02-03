<template>
  <section class="bg-white py-16 mx-auto">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-gray-800">
        Frequently Asked Questions
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">

        <!-- Questions Section -->
        <div class="lg:col-span-7">
          <div class="space-y-4 max-h-[600px] overflow-y-auto pr-4 no-scrollbar">
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
        <div class="lg:col-span-5 bg-red-900 px-6 py-8 rounded-lg text-white flex flex-col min-h-[600px]">
          <h2 class="text-2xl font-bold mb-2 text-center">
            Schedule An Appointment
          </h2>
          <p class="text-center text-base mb-6">
            Fill the form below to reach out to us.
          </p>
          
          <form @submit.prevent="handleSubmit" class="space-y-4 flex-grow flex flex-col justify-between">
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
            </div>
            
            <button
              type="submit"
              class="w-full p-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Send Appointment Request
            </button>
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
    answer: "Getting started is easy. Simply contact us to discuss your investment goals, and we'll guide you through the process of securing and growing your investment in gold-backed assets.",
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
  if (validateForm()) {
    console.log('Form submitted:', { ...form })
    // Reset form after submission
    Object.keys(form).forEach(key => form[key] = '')
  }
}

const validateForm = () => {
  return Object.values(form).every(value => value.trim() !== '')
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
</style>