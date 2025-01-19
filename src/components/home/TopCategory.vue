<template>
  <section class="py-16">
    <div class="container w-[95%] md:w-[80%] lg:w-[75%] mx-auto">
      <!-- Category Tabs -->
      <div class="flex justify-center mx-auto border-b md:w-[42%] md:text-base sm:text-xs border-red-200 mb-8">
        <div class="flex">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            :class="[
              'px-4 py-2 font-bold transition-colors duration-200 relative text-sm sm:text-base lg:text-lg',
              activeTab === tab 
                ? 'text-red-800' 
                : 'text-gray-600 hover:text-red-800'
            ]"
          >
            {{ tab }}
            <!-- Active tab indicator -->
            <div 
              v-if="activeTab === tab"
              class="absolute bottom-0 left-0 h-1 bg-red-700"
              style="transform: translateY(1px);"
            ></div>
            <!-- {{ tab }}
      Active tab indicator -->
      <div 
        v-if="activeTab === tab"
        class="absolute bottom-0 left-0 w-full h-1 bg-red-700"
      ></div>
          </button>
        </div>
      </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-1 text-base md:text-base sm:grid-cols-1 lg:grid-cols-4 gap-6">
        <div 
          v-for="product in filteredProducts" 
          :key="product.id"
          class="bg-white rounded-lg shadow-md pb-5 transition-transform duration-300 hover:-translate-y-1"
        >
          <div class="relative aspect-square mb-2">
            <img 
              :src="product.image" 
              :alt="product.name"
              class="w-full h-full object-cover rounded"
            />
          </div>

          <div class="text-center">
            <div class="text-lg font-bold mb-2">${{ product.price.toFixed(2) }}</div>
            <h3 class="text-base font-medium text-gray-800 mb-4">{{ product.name }}</h3>
            
            <div class="flex justify-center gap-2">
              <button 
                @click="addToCart(product, 1)"
                class="p-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors duration-200"
                aria-label="Add to cart"
              >
                <ShoppingCartIcon class="w-5 h-5" />
              </button>
              <button 
                @click="openQuickView(product)"
                class="p-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors duration-200 mt-auto"
                aria-label="Quick view"
              >
                <EyeIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <QuickViewModal
      v-if="selectedProduct"
      :product="selectedProduct"
      :isOpen="quickViewModal"
      :onClose="closeQuickViewModal"
      :onAddToCart="addToCart"
    />

    <ShoppingCartModal
      :isOpen="cartModal"
      :onClose="closeCartModal"
      :cart="cart"
      :updateQuantity="updateQuantity"
    />

    <AddToCartPopup :show="showAddToCartPopup" />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ShoppingCartIcon, EyeIcon } from 'lucide-vue-next'
import QuickViewModal from '../QuickViewModal.vue'
import ShoppingCartModal from '../ShoppingCartModal.vue'
import AddToCartPopup from '../AddToCartPopup.vue'

const tabs = ['Top Picks', 'Latest', 'Best Sellers', 'Coins']
const activeTab = ref('Top Picks')

const quickViewModal = ref(false)
const cartModal = ref(false)
const selectedProduct = ref(null)
const cart = ref([])
const showAddToCartPopup = ref(false)

const allProducts = {
  'Top Picks': [
    {
      id: 1,
      name: '35kg Gold coin 1',
      price: 500.00,
      image: '/closeup-shot-pile-shiny-gold-coins-bars.jpg'
    },
    {
      id: 2,
      name: '12kg Gold coin 2',
      price: 400.00,
      image: '/closeup-shot-pile-shiny-gold-coins-bars.jpg'
    },
    {
      id: 3,
      name: '40kg Silver coin 2',
      price: 300.00,
      image: '/financial-sector.jpg'
    },
    {
      id: 4,
      name: '30kg Silver coin 1',
      price: 200.00,
      image: '/wooden-background.jpg'
    }
  ],
  'Latest': [
    {
      id: 5,
      name: 'New Gold Bar',
      price: 600.00,
      image: '/scattered-table.jpg'
    },
    {
      id: 6,
      name: 'Latest Silver Coin',
      price: 150.00,
      image: '/golden-rmb-coins-cloth-bag.jpg'
    }
  ],
  'Best Sellers': [
    {
      id: 7,
      name: 'Popular Gold Coin',
      price: 450.00,
      image: '/closeup-shot-pile-shiny-gold-coins-bars.jpg'
    },
    {
      id: 8,
      name: 'Best-Selling Silver Bar',
      price: 350.00,
      image: '/financial-sector.jpg'
    }
  ],
  'Coins': [
    {
      id: 9,
      name: 'Rare Gold Coin',
      price: 800.00,
      image: '/wooden-background.jpg'
    },
    {
      id: 10,
      name: 'Collectible Silver Coin',
      price: 250.00,
      image: '/scattered-table.jpg'
    }
  ]
}

const filteredProducts = computed(() => {
  return allProducts[activeTab.value] || []
})

const openQuickView = (product) => {
  selectedProduct.value = product
  quickViewModal.value = true
}

const closeQuickViewModal = () => {
  quickViewModal.value = false
  selectedProduct.value = null
}

const openCartModal = () => {
  cartModal.value = true
}

const closeCartModal = () => {
  cartModal.value = false
}

const addToCart = (product, quantity) => {
  const existingItem = cart.value.find(item => item.id === product.id)
  
  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.value.push({
      ...product,
      quantity
    })
  }
  
  closeQuickViewModal()
  showAddToCartPopup.value = true
  setTimeout(() => {
    showAddToCartPopup.value = false
  }, 3000)
}

const updateQuantity = (item, change) => {
  const index = cart.value.findIndex(cartItem => cartItem.id === item.id)
  if (index === -1) return
  
  const newQuantity = cart.value[index].quantity + change
  if (newQuantity < 1) {
    cart.value.splice(index, 1)
  } else {
    cart.value[index].quantity = newQuantity
  }
}
</script>