<template>
  <div class="mx-auto py-8"> 
    <section class="container w-[95%] md:w-[80%] lg:w-[75%] mx-auto">
      <h2 class="text-3xl font-bold text-center my-8">Our Modules</h2>
      
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.title" class="bg-white rounded-br-3xl shadow-lg overflow-hidden flex flex-col h-full">
          <div class="relative overflow-hidden">
            <img 
              :src="service.image" 
              :alt="service.title"
              class="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div class="px-6 pb-6 pt-2 flex flex-col flex-1">
            <div class="flex-1">
              <h3 class="text-lg font-bold mb-2">{{ service.title }}</h3>
              <p class="text-gray-600 mb-4 text-base">
                {{ service.description }}
              </p>
            </div>
            
            <a 
              :href="service.link" 
              class="flex items-center text-base text-[#8B1818] hover:text-[#6B1313] font-semibold transition-colors duration-300 w-fit mt-auto"
            >
              Read More
              <ChevronRightIcon class="w-5 h-5 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ChevronRightIcon, RepeatIcon } from 'lucide-vue-next'

const services = [
  {
    title: 'Private Placement Program',
    description: 'Earn a 3% monthly return with our Private Placement Program, backed by gold assets and industry expertise, offering stable, high-yield investments managed transparently.',
    image: '/PPP.png',
    link: '/private-placement'
  },
  {
    title: 'Gold and Silver Savings',
    description: 'Stop saving in the bank! Your bank savings loses value. Save in gold and silver today, Protect your wealth, beat inflation and secure your financial future with us.',
    image: '/Gold & Silver Savings.png',
    link: '/GSSavings'
  },
  {
    title: 'Online Trading',
    description: 'Trade with confidence on our platform. Buy, sell, or exchange your physical gold or silver effortlessly with verified listings, insured delivery, and real-time pricing.',
    image: '/HKKO GOLD Online 11 (1).png',
    link: '/online-trading'
  }
]
</script>