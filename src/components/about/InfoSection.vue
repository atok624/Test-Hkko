<template>
  <div class=" px-4 py-12 w-[95%] md:w-[80%] lg:w-[75%] mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <!-- Image Column -->
      <div class="relative col-span-5">
        <div class="bg-red-900/10 absolute inset-0 rounded-lg"></div>
        <img 
          src="/3aef89c1-a881-4a61-839c-853d69192aa7.jpeg"
          alt="Global Fine Gold Bars"
          class="w-full h-auto rounded-lg shadow-xl relative z-10"
        />
      </div>

      <!-- Content Column -->
      <div class="space-y-6 col-span-7">
        <h2 class="text-4xl font-bold text-gray-800">
          A little info about business make it as catchy as possible
        </h2>
        
        <p class="text-gray-700 leading-relaxed">
          Driven by customer satisfaction, we create meaningful relationships and provide Certified Guarantees to ensure lasting value. Believing that gold symbolizes wealth, legacy, and enduring memories, our products are crafted to become treasured heirlooms for future generations.
        </p>

        <a 
          href="#" 
          class="inline-flex items-center border-2 border-red-900 text-white px-6 py-2 rounded bg-red-900 transition-colors duration-300"
        >
          Learn More About Us
          <span class="ml-2">›</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional script needed for this static version
</script>