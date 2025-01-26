<template>
  <div class="container w-[95%] md:w-[80%] lg:w-[75%] mx-auto px-4 py-12">
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Sidebar Filters -->
      <aside class="w-full lg:w-64 flex-shrink-0 mr-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Filter</h2>
        
        <!-- Type of Product -->
        <div class="mb-6">
          <div class="flex justify-between items-center">
            <h3 class="text-base font-bold text-gray-700">Type of product</h3>
            <button 
              @click="clearFilters"
              class="text-red-600 hover:text-red-800 text-sm"
            >
              Clear Filters
            </button>
          </div>
          
          <div class="space-y-4 mt-4">
            <label 
              v-for="type in productTypes" 
              :key="type"
              class="flex items-center space-x-3"
            >
              <input
                type="checkbox"
                :value="type"
                v-model="selectedTypes"
                class="rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <span class="text-base text-gray-600">{{ type }}</span>
            </label>
          </div>
        </div>

        <!-- Price Range -->
        <div class="my-8">
          <h3 class="text-base font-bold text-gray-700 mb-3">Price per product</h3>
          <div class="space-y-4">
            <label 
              v-for="range in priceRanges" 
              :key="range"
              class="flex items-center space-x-4"
            >
              <input
                type="checkbox"
                :value="range"
                v-model="selectedPriceRanges"
                class="rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <span class="text-base text-gray-600">{{ range }}</span>
            </label>
          </div>
        </div>

        <!-- Weight -->
        <div class="my-8">
          <h3 class="text-base font-bold text-gray-700 mb-4">Weight</h3>
          <div class="space-y-4">
            <label 
              v-for="weight in weights" 
              :key="weight"
              class="flex items-center space-x-4"
            >
              <input
                type="checkbox"
                :value="weight"
                v-model="selectedWeights"
                class="rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <span class="text-base text-gray-600">{{ weight }}</span>
            </label>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1">
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-bold text-gray-800 ">Shop Silver Products</h1>
          
          <!-- Sort Dropdown -->
          <select 
            v-model="sortOrder"
            class="border-gray-300 rounded-md text-gray-600 px-4 text-sm"
          >
            <option value="" disabled>Select sorting option &nbsp; &nbsp; &nbsp;</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="low-to-high">Price: Low to High</option>
          </select>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="product in sortedProducts" 
          :key="product.id"
          class="bg-white rounded-lg shadow-md pb-3 transition-transform duration-300 hover:-translate-y-1"
        >
          <div class="relative aspect-square mb-3">
            <img 
              :src="product.image" 
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="text-center px-6 pb-3">
            <div class="text-lg font-bold mb-2">${{ product.price.toFixed(2) }}</div>
            <h3 class="text-base font-medium text-gray-800 mb-4">{{ product.name }}</h3>
            
            <div class="flex justify-center gap-2">
              <button 
                @click="addToCart(product, 1)"
                class="p-2 bg-[#8B1818] text-white rounded-md hover:bg-[#6B1313] transition-colors duration-200"
                aria-label="Add to cart"
              >
                <ShoppingCartIcon class="w-5 h-5" />
              </button>
              <button 
                @click="openQuickView(product)"
                class="p-2 bg-[#8B1818] text-white rounded-md hover:bg-[#6B1313] transition-colors duration-200"
                aria-label="Quick view"
              >
                <EyeIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      </main>
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
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ShoppingCartIcon, EyeIcon } from 'lucide-vue-next'
import ShoppingCartModal from '../ShoppingCartModal.vue';
import AddToCartPopup from '../AddToCartPopup.vue';
import QuickViewModal from '../QuickViewModal.vue';

const productTypes = ['Cast Bar', 'Minted Bar', 'Coins']
const selectedTypes = ref([])
const quickViewModal = ref(false)
const cartModal = ref(false)
const selectedProduct = ref(null)
const cart = ref([])
const showAddToCartPopup = ref(false)

const priceRanges = [
  '< $500.00',
  '$500.00 - $1,000.00',
  '$1,000.00 - $2,000.00',
  '$2,000.00 - $3,000.00',
  '$3,000.00+'
]
const selectedPriceRanges = ref([])

const weights = [
  '< 10 grams',
  '10 - 50 grams',
  '50 - 100 grams',
  '100 - 200 grams',
  '200 - 500 grams',
  '500+ grams'
]
const selectedWeights = ref([])

const sortOrder = ref('')

const products = [
  {
    id: 1,
    name: '5 gram Gold Coin - HKKO Gold',
    price: 5.00,
    image: '/scattered-table.jpg',
    type: 'Coins',
    weight: '5 grams'
  },
  {
    id: 2,
    name: '1 oz Gold Coin - HKKO Gold',
    price: 1.00,
    image: '/wooden-background.jpg',
    type: 'Coins',
    weight: '31.1 grams'
  },
  {
    id: 3,
    name: '10 gram Gold Coin - HKKO Gold',
    price: 1.00,
    image: '/closeup-shot-pile-shiny-gold-coins-bars.jpg',
    type: 'Coins',
    weight: '10 grams'
  },
  {
    id: 4,
    name: '10 gram minted bar - HKKO Gold',
    price: 10.00,
    image: '/golden-rmb-coins-cloth-bag.jpg',
    type: 'Minted Bar',
    weight: '10 grams'
  }
]

const sortedProducts = computed(() => {
  let filtered = products

  // Apply type filter
  if (selectedTypes.value.length > 0) {
    filtered = filtered.filter(product => selectedTypes.value.includes(product.type))
  }

  // Apply price range filter
  if (selectedPriceRanges.value.length > 0) {
    filtered = filtered.filter(product => {
      return selectedPriceRanges.value.some(range => {
        if (range.startsWith('<')) {
          const max = parseFloat(range.replace(/[^0-9.]/g, ''))
          return product.price < max
        } else if (range.endsWith('+')) {
          const min = parseFloat(range.replace(/[^0-9.]/g, ''))
          return product.price >= min
        } else {
          const [min, max] = range.split('-').map(str => parseFloat(str.replace(/[^0-9.]/g, '')))
          return product.price >= min && product.price <= max
        }
      })
    })
  }

  // Apply weight filter
  if (selectedWeights.value.length > 0) {
    filtered = filtered.filter(product => {
      return selectedWeights.value.some(range => {
        const productWeight = parseFloat(product.weight)
        if (range.startsWith('<')) {
          const max = parseFloat(range.replace(/[^0-9.]/g, ''))
          return productWeight < max
        } else if (range.endsWith('+')) {
          const min = parseFloat(range.replace(/[^0-9.]/g, ''))
          return productWeight >= min
        } else {
          const [min, max] = range.split('-').map(str => parseFloat(str.replace(/[^0-9.]/g, '')))
          return productWeight >= min && productWeight <= max
        }
      })
    })
  }

  // Apply sorting
  if (sortOrder.value) {
    filtered.sort((a, b) => {
      return sortOrder.value === 'high-to-low' 
        ? b.price - a.price 
        : a.price - b.price
    })
  }

  return filtered
})

const clearFilters = () => {
  selectedTypes.value = []
  selectedPriceRanges.value = []
  selectedWeights.value = []
}

const openQuickView = (product) => {
  selectedProduct.value = product
  quickViewModal.value = true
}

const closeQuickViewModal = () => {
  quickViewModal.value = false
  selectedProduct.value = null
}

const openCartModal = () => {
  cartModal.value = true;
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