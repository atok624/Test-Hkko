<template>
  <div class="container w-[95%] sm:w-[90%] md:w-[80%] lg:w-[75%] mx-auto p-4">
    <!-- Cart Header -->
    <div class="md:flex justify-between items-center mb-8">
      <h1 class="text-lg sm:text-xl font-semibold text-center md:text-left">
        {{ cartItems.length }} product(s) in your cart
      </h1>
      <button 
        class="mt-4 md:mt-0 text-red-900 hover:text-red-700 font-bold text-sm md:text-base"
        @click="goBackToShop"
      >
        Back to the shop
      </button>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      <!-- Main Cart Content -->
      <div class="lg:col-span-2">
        <div class="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
          <h2 class="font-bold text-base md:text-lg mb-4">Your order</h2>
          
          <!-- Product Items -->
          <div v-for="item in cartItems" :key="item.id" class="flex flex-col md:flex-row items-center py-4 border-b">
            <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover mb-4 md:mb-0 md:mr-4" />
            
            <div class="flex-grow text-center md:text-left">
              <h3 class="font-bold text-sm md:text-base">{{ item.name }}</h3>
              <p class="text-xs md:text-sm text-gray-600">{{ item.description }}</p>
              <div class="flex justify-center md:justify-start items-center mt-2 space-x-4">
                <button 
                  @click="addToWishlist(item)"
                  class="text-xs md:text-sm text-red-700 hover:text-red-800"
                >
                  Add to wishlist
                </button>
                <span class="hidden md:inline">•</span>
                <button 
                  @click="setAutoSavings(item)"
                  class="text-xs md:text-sm text-red-700 hover:text-red-800"
                >
                  Set Auto-Savings
                </button>
              </div>
            </div>

            <div class="flex items-center gap-4 mt-4 md:mt-0">
              <div class="flex items-center border rounded">
                <button 
                  @click="decrementQuantity(item)"
                  class="px-3 py-1 hover:bg-gray-100"
                >
                  -
                </button>
                <span class="px-3 py-1 border-x">{{ item.quantity }}</span>
                <button 
                  @click="incrementQuantity(item)"
                  class="px-3 py-1 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <p class="font-bold text-sm md:text-base">€{{ (item.price * item.quantity).toFixed(2) }}</p>
              <button 
                @click="removeItem(item)"
                class="text-gray-400 hover:text-gray-600"
              >
                <TrashIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <!-- Payment Method -->
        <div class="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
          <h2 class="font-bold text-base md:text-lg mb-4">Payment method</h2>
          <div class="space-y-4">
            <label class="flex items-center gap-3">
              <input type="radio" v-model="paymentMethod" value="wire" class="form-radio text-red-700 focus:ring-red-600" />
              <span class="text-sm md:text-base">Wire Transfer (free)</span>
            </label>
            <label class="flex items-center gap-3">
              <input type="radio" v-model="paymentMethod" value="gold-avenue" class="form-radio text-red-700 focus:ring-red-600" />
              <span class="text-sm md:text-base">GOLD AVENUE Pay (free)</span>
            </label>
            <label class="flex items-center gap-3">
              <input type="radio" v-model="paymentMethod" value="credit-card" class="form-radio text-red-700 focus:ring-red-600" />
              <span class="text-sm md:text-base">Add credit card (3% surcharge)</span>
            </label>
          </div>
        </div>

        <!-- Storage & Delivery -->
        <div class="bg-white rounded-lg shadow-sm p-4 md:p-6">
          <h2 class="font-bold text-base md:text-lg mb-4">Storage & Delivery</h2>
          <div class="space-y-4">
            <label class="flex items-center gap-3">
              <input type="radio" v-model="deliveryMethod" value="storage" class="form-radio text-red-700 focus:ring-red-600" />
              <span class="font-bold text-sm md:text-base">Insured Storage</span>
            </label>
            <label class="flex items-center gap-3">
              <input type="radio" v-model="deliveryMethod" value="delivery" class="form-radio text-red-700 focus:ring-red-600" />
              <div>
                <span class="font-bold text-sm md:text-base">Delivery</span>
                <p class="text-xs text-gray-600">4-15 business days</p>
              </div>
            </label>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="lg:col-span-1">
        <div class="bg-white rounded-lg shadow-sm p-4 md:p-6 sticky top-4">
          <h2 class="font-bold text-base md:text-lg mb-4">Order summary</h2>
          <div class="space-y-4">
            <div class="flex justify-between text-sm md:text-base">
              <span>Products ({{ cartItems.length }})</span>
              <span>€{{ total.toFixed(2) }}</span>
            </div>
            <div class="border-t pt-4">
              <button 
                @click="showDiscountInput = !showDiscountInput"
                class="text-red-700 hover:text-red-800 text-xs md:text-sm flex items-center"
              >
                <PlusIcon class="w-4 h-4 mr-1" />
                Discount code
              </button>
              <input
                v-if="showDiscountInput"
                v-model="discountCode"
                type="text"
                placeholder="Enter code"
                class="mt-2 w-full px-3 py-2 border rounded"
              />
            </div>
            <div class="border-t pt-4 text-sm md:text-base">
              <div class="flex justify-between font-bold">
                <span>Total</span>
                <span>€{{ total.toFixed(2) }}</span>
              </div>
              <p class="text-xs text-gray-600">VAT incl.</p>
            </div>
            <button 
              @click="startCheckout"
              class="w-full bg-red-900 text-white py-3 rounded-lg hover:bg-red-800 transition-colors text-xs md:text-sm"
            >
              Start checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script setup>
  import { ref } from 'vue'
  import { TrashIcon, PlusIcon } from 'lucide-vue-next'
  
  // Sample cart data
  const cartItems = ref([
    {
      id: 1,
      name: '50 gram Gold Bar',
      description: 'PAMP Suisse',
      price: 4153.12,
      quantity: 1,
      image: '/src/images/caro-im-3.webp'
    }
  ])
  
  const paymentMethod = ref('wire')
  const deliveryMethod = ref('storage')
  const discountCode = ref('')
  const showDiscountInput = ref(false)
  
  const total = ref(4153.12)
  
  // Methods
  const incrementQuantity = (item) => {
    item.quantity++
  }
  
  const decrementQuantity = (item) => {
    if (item.quantity > 1) {
      item.quantity--
    }
  }
  
  const removeItem = (item) => {
    cartItems.value = cartItems.value.filter(i => i.id !== item.id)
  }
  
  const addToWishlist = (item) => {
    console.log('Added to wishlist:', item)
  }
  
  const setAutoSavings = (item) => {
    console.log('Set auto-savings for:', item)
  }
  
  const startCheckout = () => {
    console.log('Starting checkout process')
  }
  
  const goBackToShop = () => {
    console.log('Navigating back to shop')
  }
  </script>


