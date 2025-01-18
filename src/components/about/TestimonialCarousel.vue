<template>
  <div class="bg-black py-16">
    <div class="max-w-5xl mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <!-- Text Content -->
        <div class="space-y-4 col-span-1">
          <h2 class="text-4xl font-bold text-white">
            What Our Clients Say
          </h2>
          <p class="text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.
          </p>
        </div>

        <!-- Carousel 1 -->
        <div class="relative">
          <div class="overflow-hidden">
            <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide1 * 100}%)` }"
            >
              <div
                v-for="testimonial in testimonials1"
                :key="testimonial.id"
                class="min-w-full px-4"
              >
                <div class="bg-black border border-gray-800 rounded-lg p-6 space-y-4">
                  <div class="flex justify-center">
                    <div class="w-16 h-16 bg-gray-300 rounded-full"></div>
                  </div>

                  <div class="text-center">
                    <h3 class="text-yellow-500 text-xl font-semibold">
                      {{ testimonial.name }}
                    </h3>
                    <p class="text-gray-400">{{ testimonial.title }}</p>
                  </div>

                  <p class="text-gray-300 text-center">
                    {{ testimonial.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel 2 -->
        <div class="relative">
          <div class="overflow-hidden">
            <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide2 * 100}%)` }"
            >
              <div
                v-for="testimonial in testimonials2"
                :key="testimonial.id"
                class="min-w-full px-4"
              >
                <div class="bg-black border border-gray-800 rounded-lg p-6 space-y-4">
                  <div class="flex justify-center">
                    <div class="w-16 h-16 bg-gray-300 rounded-full"></div>
                  </div>

                  <div class="text-center">
                    <h3 class="text-yellow-500 text-xl font-semibold">
                      {{ testimonial.name }}
                    </h3>
                    <p class="text-gray-400">{{ testimonial.title }}</p>
                  </div>

                  <p class="text-gray-300 text-center">
                    {{ testimonial.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Testimonials for Carousel 1
const testimonials1 = [
  {
    id: 1,
    name: "Amily Moalin",
    title: "Gold Expert",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Enagol Ame",
    title: "Gold Expert",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

// Testimonials for Carousel 2
const testimonials2 = [
  {
    id: 3,
    name: "Michael Essien",
    title: "Gold Expert",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Stephen Appiah",
    title: "Gold Expert",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

// State for each carousel
const currentSlide1 = ref(0);
const currentSlide2 = ref(0);

let intervalId1 = null;
let intervalId2 = null;

// Advance slides for Carousel 1
const nextSlide1 = () => {
  currentSlide1.value = (currentSlide1.value + 1) % testimonials1.length;
};

// Advance slides for Carousel 2
const nextSlide2 = () => {
  currentSlide2.value = (currentSlide2.value + 1) % testimonials2.length;
};

onMounted(() => {
  // Auto-advance slides every 5 seconds for both carousels
  intervalId1 = setInterval(nextSlide1, 5000);
  intervalId2 = setInterval(nextSlide2, 5000);
});

onUnmounted(() => {
  if (intervalId1) clearInterval(intervalId1);
  if (intervalId2) clearInterval(intervalId2);
});
</script>

<style scoped>
/* Optional: Add fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
