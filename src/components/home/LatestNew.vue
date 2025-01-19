<template>
  <section class="py-16 w-[95%] md:w-[80%] lg:w-[75%] mx-auto">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-center text-gray-900 mb-12">Latest News</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <article 
          v-for="article in articles" 
          :key="article.id"
          class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 flex flex-col"
        >
          <div class="aspect-w-16 aspect-h-9">
            <img 
              :src="article.image" 
              :alt="article.title"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-lg font-bold text-gray-900 mb-3">
              {{ article.title }}
            </h3>

            <p class="text-gray-600 mb-4 text-base">
              {{ article.description }}
            </p>

            <a 
              :href="article.link"
              class="inline-block text-sm text-[#8B1818] font-bold hover:text-[#6B1313] transition-colors duration-200 mt-auto"
            >
              READ MORE »
            </a>

            <div class="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
              <span>{{ article.author }}</span>
              <time :datetime="article.date">{{ article.date }}</time>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
  
  <script setup>
  const articles = [
    {
      id: 1,
      title: 'Last News Private Placement',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text',
      image: '/financial-sector.jpg',
      link: '/last-news',
      author: 'truetechstudios',
      date: 'April 15, 2024'
    },
    {
      id: 2,
      title: 'Private Placement Program',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text',
      image: '/golden-rmb-coins-cloth-bag.jpg',
      link: '/private-placement',
      author: 'truetechstudios',
      date: 'April 15, 2024'
    },
    {
      id: 3,
      title: 'Gold & Silver Savings',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text',
      image: '/wooden-background.jpg',
      link: '/GSSavings',
      author: 'truetechstudios',
      date: 'April 15, 2024'
    },
    
  ]
  </script>
  
  <style scoped>
  .aspect-w-16 {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  }
  
  .aspect-w-16 > img {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  </style>