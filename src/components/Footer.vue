<template>
  <footer>
    <!-- Newsletter Banner -->
    <div class="bg-[#6B1313] py-4 ">
      <div class="container mx-auto flex flex-col md:flex-row w-[95%] md:w-[90%] lg:w-[85%] items-center justify-between">
        <div class="flex items-center space-x-3">
          <img src="/LOGO-1-300x82.png" alt="HKKO GOLD" class="w-30 mb-4 md:mb-0 h-12" />
        </div>
        <div class="flex-1 max-w-2xl mx-4">
          <h3 class="text-white text-center font-bold mb-4  text-base">SUBSCRIBE to our newsletter and stay informed at all times</h3>
        </div>
        <div class="flex space-x-2 text-sm">
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email here..."
            class="px-4 py-2 rounded-md w-64"
          />
          <button
            @click="handleSubmit"
            class="bg-[#8B1818] text-white px-4 py-2 rounded-md hover:bg-[#7A1515] text-xs font-bold transition duration-300"
          >
            GET SIGNED UP
          </button>
        </div>
      </div>
    </div>

    <!-- Navigation Links -->
    <div class="bg-[#8B1818] text-white py-12 ">
      <div class="container w-[95%] md:w-[90%] lg:w-[85%] mx-auto">
        <div class="grid grid-cols-2 pl-5  md:grid-cols-3 lg:grid-cols-6 gap-4">
          <!-- Shop Section -->
          <div>
            <h3 class="text-base font-bold mb-4">SHOP</h3>
            <ul class="space-y-2 text-base">
              <li><a href="/gold" class="hover:underline">Gold</a></li>
              <li><a href="/silver" class="hover:underline">Silver</a></li>
              <li><a href="investment" class="hover:underline">Investment Plans</a></li>
              <li><a href="/private-placement" class="hover:underline">PPP</a></li>
            </ul>
          </div>

          <!-- Account Section -->
          <div>
            <h3 class="text-base font-bold mb-4">ACCOUNT</h3>
            <ul class="space-y-2 text-base">
              <li><a href="#" class="hover:underline">Wallet</a></li>
              <li><a href="#" class="hover:underline">History</a></li>
              <li><a href="#" class="hover:underline">Items in Storage</a></li>
              <li><a href="#" class="hover:underline">Storage Fees</a></li>
              <li><a href="#" class="hover:underline">Withdrawal Limits</a></li>
              <li><a href="#" class="hover:underline">Profile Settings</a></li>
            </ul>
          </div>

          <!-- Resources Section -->
          <div>
            <h3 class="text-base font-bold mb-4">RESOURCES</h3>
            <ul class="space-y-2 text-base">
              <li><a href="/blog" class="hover:underline">Blog</a></li>
              <li><a href="#" class="hover:underline">Buyers Guide</a></li>
              <li><a href="#" class="hover:underline">Sellers Guide</a></li>
              <li><a href="/faq" class="hover:underline">FAQ</a></li>
              <li><a href="charts" class="hover:underline">Charts</a></li>
              <li><a href="/calculator" class="hover:underline">Calculator</a></li>
            </ul>
          </div>

          <!-- Legal Section -->
          <div>
            <h3 class="text-base font-bold mb-4">LEGAL</h3>
            <ul class="space-y-2 text-base">
              <li><a href="/termsconditions" class="hover:underline">Terms & Conditions</a></li>
              <li><a href="/privacypolicy" class="hover:underline">Privacy Policy</a></li>
              <li><a href="#" class="hover:underline">Disclaimer</a></li>
              <li><a href="#" class="hover:underline">Acceptable use Policy</a></li>
              <li><a href="#" class="hover:underline">Licenses</a></li>
              <li><a href="#" class="hover:underline">Bankers</a></li>
            </ul>
          </div>

          <!-- Assistance Section -->
          <div>
            <h3 class="text-base font-bold mb-4">ASSISTANCE</h3>
            <ul class="space-y-2 text-base">
              <li><a href="#" class="hover:underline">Request A Call Back</a></li>
              <li><a href="#" class="hover:underline">Pricing</a></li>
              <li><a href="#" class="hover:underline">Storage Guide</a></li>
              <li><a href="#" class="hover:underline">Investment Guide</a></li>
            </ul>
          </div>

          <!-- Company Section -->
          <div>
            <h3 class="text-base font-bold mb-4">COMPANY</h3>
            <ul class="space-y-2 text-base">
              <li><a href="/about" class="hover:underline">About Us</a></li>
              <li><a href="#" class="hover:underline">Selling</a></li>
              <li><a href="#" class="hover:underline">Bulk Buying</a></li>
              <li><a href="#" class="hover:underline">Online Trading</a></li>
              <li><a href="/services" class="hover:underline">Services</a></li>
              <li><a href="#" class="hover:underline">Report A Concern</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="bg-[#6B1313] text-white py-4 px-4 md:px-36">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm mb-1 md:mb-0">Copyright © {{ new Date().getFullYear() }} Test Site | All rights reserved</p>
        <p class="text-sm">Developed and Designed by True Tech Studios</p>
      </div>
    </div>

    <!-- Scroll to Top Button -->
    <button
      @click="scrollToTop"
      class="fixed bottom-8 right-8 p-2 bg-black text-white rounded-full shadow-lg hover:bg-[#6B1313] transition-colors duration-300"
      aria-label="Scroll to top"
    >
      <ChevronUpIcon class="w-6 h-6" />
    </button>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronUpIcon } from 'lucide-vue-next'

const email = ref('')

const handleSubmit = () => {
  // Handle newsletter submission
  console.log('Newsletter signup:', email.value)
  email.value = ''
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>