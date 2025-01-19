<template>
    <div class="relative w-[95%] md:w-[80%] lg:w-[75%] mt-6 mx-auto">
      <!-- Carousel Container -->
      <div 
        class="overflow-hidden rounded-[2rem]"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div 
          class="flex transition-transform duration-300 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div 
            v-for="(slide, index) in slides" 
            :key="index"
            class="w-full flex-shrink-0"
          >
            <a href="/gold"><img 
              :src="slide.image" 
              :alt="slide.alt"
              class="w-full h-[350px] object-cover"
            /></a>
          </div>
        </div>
      </div>
  
      <!-- Navigation Arrows -->
      <button 
        @click="prevSlide"
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon class="w-6 h-6" />
      </button>
  
      <button 
        @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRightIcon class="w-6 h-6" />
      </button>
  
      <!-- Dot Indicators -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        <button
          v-for="(_, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          :class="[
            'w-2 h-2 rounded-full transition-all duration-200',
            currentSlide === index ? 'bg-white w-4' : 'bg-white/60'
          ]"
          :aria-label="`Go to slide ${index + 1}`"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'
  
  const slides = [
    {
      image: '/Artboard (1).png',
      alt: 'Financial charts on laptop and mobile device'
    },
    {
      image: '/Artboard2.png',
      alt: 'Second slide description'
    },
    
  ]
  
  const currentSlide = ref(0)
  const touchStart = ref(null)
  const touchEnd = ref(null)
  let autoplayInterval = null
  
  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }
  
  const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
  }
  
  const goToSlide = (index) => {
    currentSlide.value = index
  }
  
  // Touch handlers
  const handleTouchStart = (e) => {
    touchStart.value = e.touches[0].clientX
    touchEnd.value = null
  }
  
  const handleTouchMove = (e) => {
    touchEnd.value = e.touches[0].clientX
  }
  
  const handleTouchEnd = () => {
    if (!touchStart.value || !touchEnd.value) return
    
    const distance = touchStart.value - touchEnd.value
    const minSwipeDistance = 50
  
    if (Math.abs(distance) < minSwipeDistance) return
  
    if (distance > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
  
  // Autoplay functionality
  const startAutoplay = () => {
    autoplayInterval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds
  }
  
  const stopAutoplay = () => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval)
    }
  }
  
  onMounted(() => {
    startAutoplay()
  })
  
  onBeforeUnmount(() => {
    stopAutoplay()
  })
  </script>