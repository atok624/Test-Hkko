<template>
  <section class="container mx-auto px-4 py-6">
    <!-- Header Section -->
    <div class="bg-pink-50 rounded-lg p-8 sm:p-12 text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-[#8B1818] mb-4">
        Frequently asked questions
      </h2>
      <p class="text-base text-gray-600 max-w-2xl mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
      </p>
    </div>

    <!-- FAQ Groups -->
    <div class="space-y-12">
      <div v-for="(group, groupIndex) in faqGroups" :key="groupIndex">
        <h3 class="text-xl font-semibold text-gray-800 mb-6">
          {{ group.title }}
        </h3>
        
        <div class="space-y-4">
          <div 
            v-for="(item, itemIndex) in group.items" 
            :key="itemIndex"
            class="bg-pink-50 rounded-lg transition-colors duration-200"
            :class="{ 'bg-pink-100': item.isOpen }"
          >
            <button
              class="w-full text-left px-6 py-4 text-gray-700 font-medium flex justify-between items-center"
              @click="toggleItem(groupIndex, itemIndex)"
              :aria-expanded="item.isOpen"
              :aria-controls="`faq-${groupIndex}-${itemIndex}`"
            >
              <span>{{ item.question }}</span>
              <ChevronDown 
                class="w-5 h-5 text-gray-500 transition-transform duration-300"
                :class="{ 'transform rotate-180': item.isOpen }"
              />
            </button>
            <div
              v-show="item.isOpen"
              :id="`faq-${groupIndex}-${itemIndex}`"
              class="px-6 pb-4 text-gray-600"
            >
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const faqGroups = ref([
  {
    title: 'Gold and Silver',
    items: [
      {
        question: 'Lorem Ipsum is simply dummy text',
        answer: 'Detailed answer about gold and silver trading goes here.',
        isOpen: false
      },
      {
        question: 'Lorem Ipsum is simply dummy text',
        answer: 'Detailed answer about gold and silver trading goes here.',
        isOpen: false
      },
      {
        question: 'Lorem Ipsum is simply dummy text',
        answer: 'Detailed answer about gold and silver trading goes here.',
        isOpen: false
      },
      {
        question: 'Lorem Ipsum is simply dummy text',
        answer: 'Detailed answer about gold and silver trading goes here.',
        isOpen: false
      }
    ]
  },
  {
    title: 'Storage and Handling',
    items: [
      {
        question: 'Lorem Ipsum is simply dummy text',
        answer: 'Detailed answer about storage and handling goes here.',
        isOpen: false
      },
      {
        question: 'Lorem Ipsum is simply dummy text',
        answer: 'Detailed answer about storage and handling goes here.',
        isOpen: false
      },
      {
        question: 'Lorem Ipsum is simply dummy text',
        answer: 'Detailed answer about storage and handling goes here.',
        isOpen: false
      },
      {
        question: 'Lorem Ipsum is simply dummy text',
        answer: 'Detailed answer about storage and handling goes here.',
        isOpen: false
      }
    ]
  },
  {
    title: 'Delivery & Shipping',
    items: [
      {
        question: 'Lorem Ipsum is simply dummy text',
        answer: 'Detailed answer about delivery and shipping goes here.',
        isOpen: false
      },
      {
        question: 'Lorem Ipsum is simply dummy text',
        answer: 'Detailed answer about delivery and shipping goes here.',
        isOpen: false
      },
      {
        question: 'Lorem Ipsum is simply dummy text',
        answer: 'Detailed answer about delivery and shipping goes here.',
        isOpen: false
      },
      {
        question: 'Lorem Ipsum is simply dummy text',
        answer: 'Detailed answer about delivery and shipping goes here.',
        isOpen: false
      }
    ]
  },
  {
    title: 'Insurance',
    items: [
      {
        question: 'Lorem Ipsum is simply dummy text',
        answer: 'Detailed answer about insurance goes here.',
        isOpen: false
      },
      {
        question: 'Lorem Ipsum is simply dummy text',
        answer: 'Detailed answer about insurance goes here.',
        isOpen: false
      },
      {
        question: 'Lorem Ipsum is simply dummy text',
        answer: 'Detailed answer about insurance goes here.',
        isOpen: false
      },
      {
        question: 'Lorem Ipsum is simply dummy text',
        answer: 'Detailed answer about insurance goes here.',
        isOpen: false
      }
    ]
  }
])

const toggleItem = (groupIndex, itemIndex) => {
  faqGroups.value[groupIndex].items[itemIndex].isOpen = 
    !faqGroups.value[groupIndex].items[itemIndex].isOpen
}
</script>

