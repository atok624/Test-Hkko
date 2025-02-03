<template>
  <div class="py-10 bg-gray-50">
    <div class="container w-[90%] md:w-[80%] lg:w-[75%] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Left Column -->
        <div>
          <h1 class="text-[30px] font-bold mt-20 py-5">Let's Get In Touch</h1>
          <p class="text-[18px] mb-8">
            We'd love to hear from you! Whether you have questions about our services, need a quote, or want to discuss how we can help elevate your brand, our team at HKKO GOLD is here to assist you.
          </p>

          <div class="space-y-6 text-[18px]">
            <div class="flex items-center gap-3">
              <span class="text-[#8B1D1D]">📧</span>
              <a href="mailto:info@hkkogold.com" class=" hover:text-[#8B1D1D]">
                info@hkkogold.com
              </a>
            </div>
            
            <div class="flex items-center gap-3">
              <span class="text-[#8B1D1D]">🎧</span>
              <a href="mailto:support@hkkogold.com" class=" hover:text-[#8B1D1D]">
                support@hkkogold.com
              </a>
            </div>

            <div class="flex items-center gap-3">
              <span class="text-[#8B1D1D]">📞</span>
              <a href="tel:+233 24 490 6455" class=" hover:text-[#8B1D1D]">
                +233 24 490 6455
              </a>
            </div>

            <div class="flex items-center gap-3">
              <span class="text-[#8B1D1D]">📍</span>
              <span class="">
                9 Ayikuma Street Adabraka Accra Ghana
              </span>
            </div>
          </div>

          <div class="flex gap-4 mt-8">
            <a href="#" class="w-10 h-10 flex items-center justify-center bg-[#8B1D1D] text-white rounded-md hover:bg-[#7A1919]">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="w-10 h-10 flex items-center justify-center bg-[#8B1D1D] text-white rounded-md hover:bg-[#7A1919]">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="w-10 h-10 flex items-center justify-center bg-[#8B1D1D] text-white rounded-md hover:bg-[#7A1919]">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="#" class="w-10 h-10 flex items-center justify-center bg-[#8B1D1D] text-white rounded-md hover:bg-[#7A1919]">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <!-- Right Column -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-[28px] font-normal text-[#333] mb-6">Request a call back</h2>
          <p class="text-[15px] leading-[1.6] text-[#666] mb-8">
            We value your feedback and inquiries! If you have any questions, comments, or would like to learn more about our services, please leave us a message using the form below.
          </p>

          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B1D1D]"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B1D1D]"
                />
              </div>
            </div>

            <div>
              <input 
                type="email" 
                placeholder="Email" 
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B1D1D]"
              />
            </div>

            <div>
              <textarea 
                placeholder="Message" 
                rows="4" 
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B1D1D]"
              ></textarea>
            </div>

            <button 
              type="submit"
              class="w-full py-3 px-6 bg-[#8B1D1D] text-white rounded-md hover:bg-[#7A1919] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script setup>
// Component is static, no reactive state needed
</script>

<style>

</style>