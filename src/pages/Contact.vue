<template>
    <main class="bg-white py-8">
      <div class="w-[90%] md:w-[80%] lg:w-[75%] mx-auto">
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <!-- Contact Form -->
          <div>
            <h1 class="text-[32px] font-normal text-[#333] mb-6">Contact Us</h1>
            <p class="text-[15px] leading-[1.6] text-[#666] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <textarea 
                  rows="4" 
                  placeholder="Message" 
                  class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                class="w-full bg-[#8B0000] text-white py-3 rounded-md hover:bg-[#6B0000] transition-colors"
              >
                Send
              </button>
            </form>
          </div>
  
          <!-- Contact Details -->
          <div class="bg-[#8B0000] text-white p-8 rounded-lg">
            <h2 class="text-2xl font-medium mb-8">Contact Details</h2>
            
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <Mail className="h-6 w-6" />
                <span>info@hkkogold.com</span>
              </div>
              
              <div class="flex items-center gap-4">
                <Phone className="h-6 w-6" />
                <span>+233 24 490 6455</span>
              </div>
              
              <div class="flex items-center gap-4">
                <MapPin className="h-6 w-6" />
                <span>2nd Brakwatso Loop, Accra</span>
              </div>
              
              <div class="flex items-center gap-4">
                <Clock className="h-6 w-6" />
                <span>07:00am - 06:00pm | Mon - Sat</span>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Map -->
        <div class="h-[400px] w-full rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9367661075087!2d-0.1870537!3d5.6145745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7c681c9ed9%3A0x3b0b0b0b0b0b0b0b!2sHKKO%20GOLD!5e0!3m2!1sen!2sgh!4v1620000000000!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { Mail, Phone, MapPin, Clock } from 'lucide-vue-next'
  
  const handleSubmit = (event) => {
    // Handle form submission
    console.log('Form submitted')
  }
  </script>
  
  