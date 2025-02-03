<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-[1200px] mx-auto px-6 py-12">
      <!-- Blog Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard 
          v-for="post in currentPosts" 
          :key="post.id" 
          :image="post.image"
          :title="post.title"
          :excerpt="post.excerpt"
          :link="post.link"
        />
      </div>

      <!-- Pagination -->
      <div class="flex justify-center items-center mt-8 space-x-2">
        <a 
          href="#" 
          class="text-[#666] hover:text-[#8B1D1D]"
          @click.prevent="changePage(currentPage - 1)"
          :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
        >
          « Previous
        </a>
        <span class="text-[#666]">|</span>
        <template v-for="page in totalPages" :key="page">
          <a 
            href="#" 
            :class="[
              page === currentPage ? 'text-[#8B1D1D]' : 'text-[#666] hover:text-[#8B1D1D]'
            ]"
            @click.prevent="changePage(page)"
          >
            {{ page }}
          </a>
        </template>
        <span class="text-[#666]">|</span>
        <a 
          href="#" 
          class="text-[#666] hover:text-[#8B1D1D]"
          @click.prevent="changePage(currentPage + 1)"
          :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
        >
          Next »
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BlogCard from './BlogCard.vue'

// Blog posts data
const blogPosts = [
  {
    id: 1,
    image: '/1.png',
    title: 'Buying Guide',
    excerpt: '1. What Minerals Can You Buy from HKKO GOLD? At HKKO GOLD, we specialize in premium-quality minerals that cater to',
    link: '/buying-guide'
  },
  {
    id: 2,
    image: '/2.png',
    title: 'Custom Minting Service',
    excerpt: 'Through our Custom Minting Services, we bring your visions to life by transforming raw gold into beautifully crafted coins, bars, and',
    link: '/mintpage'
  },
  {
    id: 3,
    image: '/3.png',
    title: 'Global Logistics and Transportation',
    excerpt: 'HKKO GOLD understands that transporting precious metals safely and efficiently is critical to our clients\' needs. Whether moving raw gold from a',
    link: '/globallogistics'
  },
  {
    id: 4,
    image: '/4.png',
    title: 'Vaulting and Storage – Copy',
    excerpt: 'At HKKO GOLD, we understand that the security of precious metals is as crucial as their acquisition or refinement. To meet',
    link: '/vaultingstorage'
  },
  {
    id: 5,
    image: '/5.png',
    title: 'Last News Private Placement',
    excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text',
    link: '/last-news'
  },
  {
    id: 6,
    image: '/6.png',
    title: 'Selling Guide',
    excerpt: 'Sell to the Best Precious Metals Dealer in the Market 1. What Minerals Can You Sell to HKKO GOLD HKKO',
    link: '/selling-guide'
  },
  // Add more posts for second page
  {
    id: 7,
    image: '/7.png',
    title: 'Privacy Policy',
    excerpt: 'We know that how we handle your personal data is important to you. That is why, we have madehave importance',
    link: '/privacypolicy'
  },
  {
    id: 8,
    image: '/8.png',
    title: 'Terms and Conditions of Use',
    excerpt: '1. Conditions of Use This website is operated by HKKO GOLD of [Street Address, Accra, Ghana], a company incorporated under the laws of',
    link: '/termsconditions'
  },
  {
    id: 9,
    image: '/9.png',
    title: 'Treasury Services',
    excerpt: 'HKKO GOLD takes pride in offering comprehensive Treasury Services tailored to support and optimize the value of our clients\' precious metal',
    link: '#'
  },
  {
    id: 10,
    image: '/10.png',
    title: 'Vaulting and Storage',
    excerpt: 'At HKKO GOLD, we understand that the security of precious metals is as crucial as their acquisition or refinement. To meet',
    link: '/vaultingstorage'
  },
  {
    id: 11,
    image: '/11.png',
    title: 'Trading',
    excerpt: 'In the ever-evolving world of gold trading, HKKO GOLD stands out as a trusted and innovative partner, offering clients access to reliable',
    link: '/trading'
  },
  {
    id: 12,
    image: '/12.png',
    title: 'Private Placement Program',
    excerpt: 'Designed for sophisticated investors, our Private Placement Program (PPP) provides access to high-yield investment opportunities in gold and resources. We',
    link: '/blogpost'
  }
]

// Pagination logic
const postsPerPage = 9
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(blogPosts.length / postsPerPage))

const currentPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return blogPosts.slice(start, end)
})

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style>

</style>