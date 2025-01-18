<template>
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg max-w-lg w-full mx-4 relative">
        <button 
          @click="onClose"
          class="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <XIcon class="w-6 h-6" />
        </button>
        
        <div class="p-6">
          <h3 class="text-2xl font-bold mb-6">Shopping Cart</h3>
          
          <div v-if="cart.length" class="space-y-4">
            <div 
              v-for="item in cart" 
              :key="item.id"
              class="flex items-center gap-4 border-b border-gray-200 pb-4"
            >
              <img 
                :src="item.image" 
                :alt="item.name"
                class="w-16 h-16 object-cover rounded-lg"
              />
              <div class="flex-1">
                <h4 class="font-medium">{{ item.name }}</h4>
                <div class="text-[#8B1818] font-bold">${{ item.price.toFixed(2) }}</div>
              </div>
              <div class="flex items-center gap-2">
                <button 
                  @click="updateQuantity(item, -1)"
                  class="p-1 text-gray-500 hover:text-gray-700"
                >
                  <MinusIcon class="w-4 h-4" />
                </button>
                <span class="w-8 text-center">{{ item.quantity }}</span>
                <button 
                  @click="updateQuantity(item, 1)"
                  class="p-1 text-gray-500 hover:text-gray-700"
                >
                  <PlusIcon class="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div class="flex justify-between items-center pt-4">
              <div class="text-lg font-bold">Total:</div>
              <div class="text-xl font-bold text-[#8B1818]">
                ${{ cartTotal.toFixed(2) }}
              </div>
            </div>
            
            <button class="w-full py-2 bg-[#8B1818] text-white rounded-md hover:bg-[#6B1313] transition-colors duration-200">
              Checkout
            </button>
          </div>
          
          <div v-else class="text-center py-8">
            <ShoppingCartIcon class="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p class="text-gray-500">Your cart is empty</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { XIcon, MinusIcon, PlusIcon, ShoppingCartIcon } from 'lucide-vue-next'
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    },
    cart: {
      type: Array,
      required: true
    },
    updateQuantity: {
      type: Function,
      required: true
    }
  })
  
  const cartTotal = computed(() => {
    return props.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  })
  </script>