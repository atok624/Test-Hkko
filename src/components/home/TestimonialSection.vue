<template>
  <section class="py-16 w-[95%] md:w-[85%] lg:w-[80%] mx-auto bg-white">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-2">
        What Our Clients Say About Us
      </h2>
      <p class="text-base text-center text-gray-500 mb-12">
        To Our Faces, At Least
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Company Overview Card -->
        <div class="bg-white rounded-lg shadow-sm p-1 border">
          <div class="flex items-center gap-4 mb-4">
            <img
              src="/hkko.png"
              alt="HKKO GOLD Logo"
              class="w-16 h-16 rounded-full"
            />
            <div>
              <h3 class="text-xl font-semibold text-gray-900">HKKO GOLD</h3>
              <div class="flex items-center gap-2">
                <span class="text-3xl font-bold text-gray-900">4.8</span>
                <div class="flex">
                  <StarIcon v-for="i in 5" :key="i" class="w-5 h-5" :class="i === 5 ? 'text-gray-300' : 'text-yellow-400'" />
                </div>
              </div>
              <p class="text-sm text-gray-600">Based on 62 reviews</p>
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <img
              src="/caro-img.webp"
              alt="Google"
              class="h-6"
            />
            <a
              href="#"
              class="text-blue-600 hover:text-blue-700 text-sm font-medium bg-blue-50 px-4 py-2 rounded-full"
            >
              review us on Google
            </a>
          </div>
        </div>

        <!-- Reviews Carousel -->
        <div class="lg:col-span-3 relative overflow-hidden">
          <div
            class="flex transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 33.333}%)` }"
          >
            <div
              v-for="(review, index) in reviews"
              :key="index"
              class="w-full lg:w-1/3 flex-shrink-0 px-2"
            >
              <div class="bg-white rounded-lg shadow-sm p-6 border h-full">
                <div class="flex items-center gap-4 mb-4">
                  <img
                    :src="`/caro-img-2.webp`"
                    :alt="review.name"
                    class="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 class="font-medium text-gray-900">{{ review.name }}</h4>
                    <p class="text-sm text-gray-500">{{ review.time }}</p>
                  </div>
                  <img
                    src="/caro-im-3.webp"
                    alt="Google"
                    class="h-5 ml-auto"
                  />
                </div>
                <div class="flex mb-4">
                  <StarIcon
                    v-for="star in 5"
                    :key="star"
                    class="w-5 h-5 text-yellow-400"
                  />
                </div>
                <p class="text-gray-700 line-clamp-3">{{ review.text }}</p>
              </div>
            </div>
          </div>

          <!-- Navigation Arrows -->
          <button
            @click="prevSlide"
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
            aria-label="Previous review"
          >
            <ChevronLeftIcon class="w-6 h-6" />
          </button>
          <button
            @click="nextSlide"
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
            aria-label="Next review"
          >
            <ChevronRightIcon class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'

const currentSlide = ref(0)

const reviews = [
  {
    name: 'Kofiadipa Nyarko',
    time: '11:49 29 Mar 24',
    rating: 5,
    text: 'Their services is swift and fast, I really appreciate and enjoy their services I will always do business with them'
  },
  {
    name: 'RICHARD MORGAN',
    time: '12:14 12 Mar 24',
    rating: 5,
    text: 'HKKO Gold dealership has the utmost experience and expertise in the mineral industry. They\'re very knowledgeable at what they do.'
  },
  {
    name: 'Paul Noamegbor',
    time: '11:18 10 Mar 24',
    rating: 5,
    text: 'Excellent service and very professional in their dealings. I highly recommend them for any gold transaction.'
  },
  {
    name: 'John Doe',
    time: '09:30 05 Mar 24',
    rating: 5,
    text: 'I\'ve had a great experience working with HKKO Gold. Their professionalism and attention to detail are outstanding.'
  }
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % reviews.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + reviews.length) % reviews.length
}

let autoSlideInterval

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide()
  }, 5000) // Change slide every 5 seconds
}

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval)
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>