<template>
    <div v-if="isOpen && product" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg max-w-2xl w-full mx-4 relative">
        <button 
          @click="onClose"
          class="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <XIcon class="w-6 h-6" />
        </button>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div class="aspect-square">
            <img 
              :src="product.image" 
              :alt="product.name"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <div>
            <h3 class="text-2xl font-bold mb-2">{{ product.name }}</h3>
            <div class="text-3xl font-bold text-[#8B1818] mb-4">
              ${{ product.price.toFixed(2) }}
            </div>
            
            <p class="text-gray-600 mb-6">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <input
                  type="number"
                  v-model="quantity"
                  min="1"
                  class="w-20 px-3 py-2 border border-gray-300 rounded-md"
                />
                <button 
                  @click="addToCart"
                  class="px-6 py-2 bg-[#8B1818] text-white rounded-md hover:bg-[#6B1313] transition-colors duration-200"
                >
                  Add to cart
                </button>
              </div>
              
              <div class="text-sm text-gray-500">
                Category: <span class="text-gray-700">{{ product.category || 'Gold' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { XIcon } from 'lucide-vue-next'
  
  const props = defineProps({
    product: {
      type: Object,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    },
    onAddToCart: {
      type: Function,
      required: true
    }
  })
  
  const quantity = ref(1)
  
  const addToCart = () => {
    props.onAddToCart(props.product, quantity.value)
    props.onClose()
  }
  </script>