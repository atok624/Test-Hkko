<template>
    <div class="min-h-screen bg-gray-50 mx-4 md:mx-36 my-5 py-8 px-4">
      <div class="container mx-auto max-w-6xl">
        <!-- Cart Header -->
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-xl font-semibold">
            {{ cartItems.length }} product(s) in your cart
          </h1>
          <button 
            class="text-red-900 hover:text-red-700 font-medium"
            @click="goBackToShop"
          >
            Back to the shop
          </button>
        </div>
  
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Cart Content -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 class="font-medium mb-4">Your order</h2>
              
              <!-- Product Item -->
              <div v-for="item in cartItems" :key="item.id" class="flex items-center py-4 border-b">
                <img :src="item.image" :alt="item.name" class="w-16 h-16 object-cover mr-4" />
                
                <div class="flex-grow">
                  <h3 class="font-medium">{{ item.name }}</h3>
                  <p class="text-sm text-gray-600">{{ item.description }}</p>
                  
                  <div class="flex items-center mt-2">
                    <button 
                      @click="addToWishlist(item)"
                      class="text-sm text-red-700 hover:text-red-800"
                    >
                      Add to wishlist
                    </button>
                    <span class="mx-2">•</span>
                    <button 
                      @click="setAutoSavings(item)"
                      class="text-sm text-red-700 hover:text-red-800"
                    >
                      Set Auto-Savings
                    </button>
                  </div>
                </div>
  
                <div class="flex items-center gap-4">
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
                  <p class="font-medium">€{{ (item.price * item.quantity).toFixed(2) }}</p>
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
            <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 class="font-medium mb-4">Payment method</h2>
              <div class="space-y-4">
                <label class="flex items-center gap-3">
                  <input type="radio" v-model="paymentMethod" value="wire" class="text-red-700 focus:ring-red-600 form-radio" />
                  <span>Wire Transfer (free)</span>
                </label>
                
                <label class="flex items-center gap-3">
                  <input type="radio" v-model="paymentMethod" value="gold-avenue" class="form-radio focus:ring-red-600 text-red-700" />
                  <span>GOLD AVENUE Pay (free)</span>
                </label>
                
                <label class="flex items-center gap-3">
                  <input type="radio" v-model="paymentMethod" value="credit-card" class="form-radio focus:ring-red-600 text-red-700" />
                  <span>Add credit card (3% surcharge)</span>
                </label>
              </div>
            </div>
  
            <!-- Storage & Delivery -->
            <div class="bg-white rounded-lg shadow-sm p-6">
              <h2 class="font-medium mb-4">Storage & Delivery</h2>
              <div class="space-y-4">
                <label class="flex items-center gap-3">
                  <input type="radio" v-model="deliveryMethod" value="storage" class="form-radio focus:ring-red-600 text-red-700" />
                  <div>
                    <span class="font-medium">Insured Storage</span>
                    <span class="ml-2 text-sm text-white px-2 py-0.5 rounded">VAT INCL.</span>
                  </div>
                </label>
                
                <label class="flex items-center gap-3">
                  <input type="radio" v-model="deliveryMethod"  value="delivery" class=" form-radio focus:ring-red-600 text-red-700" />
                  <div>
                    <span class="font-medium">Delivery</span>
                    <p class="text-sm text-gray-600">4-15 business days</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
  
          <!-- Order Summary -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 class="font-medium mb-4">Order summary</h2>
              
              <div class="space-y-4">
                <div class="flex justify-between">
                  <span>Products ({{ cartItems.length }})</span>
                  <span>€{{ total.toFixed(2) }}</span>
                </div>
  
                <!-- Discount Code -->
                <div class="border-t pt-4">
                  <button 
                    @click="showDiscountInput = !showDiscountInput"
                    class="text-red-700 hover:text-red-800 text-sm flex items-center"
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
  
                <!-- Total -->
                <div class="border-t pt-4">
                  <div class="flex justify-between font-medium">
                    <span>Total</span>
                    <span>€{{ total.toFixed(2) }}</span>
                  </div>
                  <p class="text-sm text-gray-600">VAT incl.</p>
                </div>
  
                <button 
                  @click="startCheckout"
                  class="w-full bg-red-900 text-white py-3 rounded-lg hover:bg-red-1100 transition-colors"
                >
                  Start checkout
                </button>
              </div>
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


