<template>
  <div class=" bg-white p-6 my-10 w-[95%] md:w-[85%] lg:w-[80%] mx-auto">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2">
              <article class="space-y-6">
                  <img src="../images/financial-sector.jpg" alt="Featured image" class="w-full rounded-lg" />

                  <div class="flex items-center gap-3 text-sm ">
                      <span class="flex items-center gap-2">
                          <UserIcon class="h-4 w-4" />
                          TrustedProvider
                      </span>
                      <span>April 15, 2024</span>
                  </div>

                  <h1 class="text-xl font-bold">Gold & Silver Savings</h1>

                  <div class="prose prose-invert max-w-none">
                      <p class="mb-4 text-sm">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                          been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a
                          galley of type and scrambled it to make a type specimen book. It has survived not only five
                          centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum.
                      </p>

                      <h2 class="text-xl font-bold mt-8 mb-4">Why do we use it?</h2>
                      <p class="mb-4 text-sm">
                          It is a long established fact that a reader will be distracted by the readable content of a
                          page when looking at its layout. The point of using Lorem Ipsum is that it has a
                          more-or-less normal distribution of letters, as opposed to using ‘Content here, content
                          here’, making it look like readable English. Many desktop publishing packages and web page
                          editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will
                          uncover many web sites still in their infancy. Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose (injected humour and the like).
                      </p>

                      <h2 class="text-xl font-bold mt-8 mb-4">Where does it come from?</h2>
                      <p class="mb-4 text-sm">
                          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                          of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                          a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                          Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                          word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
                          sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and
                          Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
                          popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit
                          amet..”, comes from a line in section 1.10.32.
                      </p>
                  </div>
              </article>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1 space-y-8">
              <!-- Subscribe Form -->
              <div class="bg-red-900 p-6 rounded-lg">
                  <h3 class="text-xl font-bold mb-4">Subscribe</h3>
                  <p class="text-sm text-gray-300 mb-4">
                      Lorem ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <form class="space-y-3">
                      <input type="email" placeholder="Email"
                          class="w-full px-4 py-2 rounded-lg bg-white" />
                      <button type="submit"
                          class="w-full bg-yellow-500 text-black font-semibold py-2 rounded-lg hover:bg-yellow-400 transition-colors">
                          Subscribe
                      </button>
                  </form>
              </div>

              <!-- More Posts -->
              <div class="bg-pink-100 p-6 rounded-lg">
                  <h3 class="text-xl font-bold mb-4">More Posts</h3>
                  <div class="space-y-4">
                      <div v-for="post in morePosts" :key="post.id" class="flex gap-4">
                          <img :src="post.image" :alt="post.title" class="w-20 h-20 object-cover rounded" />
                          <div>
                              <h4 class="font-semibold">{{ post.title }}</h4>
                              <p class="text-sm text-gray-400">{{ post.date }}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import { UserIcon } from 'lucide-vue-next'

const morePosts = [
  {
      id: 1,
      title: 'Last News Private Placement',
      date: 'April 15, 2024',
      image: '/src/images/financial-sector.jpg'
  },
  {
      id: 2,
      title: 'Private Placement Program',
      date: 'April 14, 2024',
      image: '/src/images/golden-rmb-coins-cloth-bag.jpg'
  },
  {
      id: 3,
      title: 'Gold & Silver Trading',
      date: 'April 13, 2024',
      image: '/src/images/wooden-background.jpg'
  },
  {
      id: 4,
      title: 'Online Trading',
      date: 'April 13, 2024',
      image: '/src/images/closeup-shot-pile-shiny-gold-coins-bars.jpg'
  }
]
</script>