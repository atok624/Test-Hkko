<template>
  <section class="py-16 px-4 bg-white">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="service in services" :key="service.title" class="bg-white rounded-br-3xl shadow-lg overflow-hidden">
        <div class="relative overflow-hidden">
          <img 
            :src="service.image" 
            :alt="service.title"
            class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div class="bg-[#8B1818] p-2 rounded-lg cursor-pointer inline-block -mt-5 ml-6 relative z-10">
          <RepeatIcon class="w-5 h-5 text-white" />
        </div>
        <div class="px-6 pb-6 pt-2">
          <h3 class="text-lg font-bold mb-2">{{ service.title }}</h3>
          
          <p class="text-gray-600 mb-4 flex-grow text-sm">
            {{ service.description }}
          </p>
          
          <a 
            :href="service.link" 
            class="inline-flex text-sm items-center text-[#8B1818] hover:text-[#6B1313] font-semibold transition-colors duration-300"
          >
            Read More
            <ChevronRightIcon class="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChevronRightIcon, RepeatIcon } from 'lucide-vue-next'

const services = [
  {
    title: 'Private Placement Program',
    description: 'Earn a 3% monthly return with our Private Placement Program, backed by gold assets and industry expertise, offering stable, high-yield investments managed transparently.',
    image: '/src/images/PPP.png',
    link: '/private-placement'
  },
  {
    title: 'Gold and Silver Savings',
    description: 'Stop saving in the bank! Your bank savings loses value. Save in gold and silver today, Protect your wealth, beat inflation and secure your financial future with us.',
    image: '/src/images/Gold & Silver Savings.png',
    link: '/gold-silver'
  },
  {
    title: 'Online Trading',
    description: 'Trade with confidence on our platform. Buy, sell, or exchange your physical gold or silver effortlessly with verified listings, insured delivery, and real-time pricing.',
    image: '/src/images/HKKO GOLD Online 11 (1).png',
    link: '/online-trading'
  }
]
</script>

