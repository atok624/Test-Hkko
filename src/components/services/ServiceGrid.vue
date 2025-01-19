<template>
  <div class="max-w-7xl mx-auto font-semibold px-4 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Online Trading -->
      <div class="bg-red-900 rounded-lg p-6 text-center h-[420px] relative">
        <div class="flex justify-center mb-4">
          <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <CreditCard class="w-6 h-6 text-red-900" />
          </div>
        </div>
        <h3 class="text-xl font-bold text-white mb-4">Private Placement</h3>
        <p class="text-white/90 mb-8">
          Our Private Placement Program offers accredited investors exclusive opportunities to earn monthly returns. Backed by gold-related projects, it combines asset security, expert management, and consistent returns, providing a stable, high-yield investment solution tailored for financial growth.
        </p>
        <a href="/pppservices" class="text-white hover:text-white/90 absolute bottom-8 left-0 right-0">Learn More</a>
      </div>

      <!-- Trading -->
      <div class="bg-white rounded-lg p-8 text-center shadow-lg h-[420px] relative">
        <div class="flex justify-center mb-4">
          <div class="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center">
            <Wallet class="w-6 h-6 text-white" />
          </div>
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-4">Trading</h3>
        <p class="text-gray-600 mb-6">
          Our online platform connects buyers and sellers securely, ensuring transparent and efficient gold trading. Rigorous verification, trusted couriers, and real-time pricing empower confident investment decisions.
        </p>
        <a href="/trading" class="text-red-900 hover:text-red-800 absolute bottom-8 left-0 right-0">Learn More</a>
      </div>

      <!-- Refining -->
      <div class="bg-white rounded-lg p-8 text-center shadow-lg h-[420px] relative">
        <div class="flex justify-center mb-4">
          <div class="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center">
            <Factory class="w-6 h-6 text-white" />
          </div>
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-4">Refining</h3>
        <p class="text-gray-600 mb-6">
          We refine your gold with utmost care, ensuring exceptional purity for investments or industrial needs. We prioritize sustainability and global quality standards to deliver exceptional, refined products.
        </p>
        <a href="/refining" class="text-red-900 hover:text-red-800 absolute bottom-8 left-0 right-0">Learn More</a>
      </div>

      <!-- Custom Minting -->
      <div class="bg-white rounded-lg p-8 text-center shadow-lg h-[420px] relative">
        <div class="flex justify-center mb-4">
          <div class="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center">
            <Coins class="w-6 h-6 text-white" />
          </div>
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-4">Custom Minting</h3>
        <p class="text-gray-600 mb-6">
          We provide custom minting services, transforming your raw gold into personalized coins, bars, and items. We create unique, flawless metal pieces for any special or commemorative occasion.
        </p>
        <a href="/mintpage" class="text-red-900 hover:text-red-800 absolute bottom-8 left-0 right-0">Learn More</a>
      </div>

      <!-- Vaulting & Storage -->
      <div class="bg-white rounded-lg p-8 text-center shadow-lg h-[420px] relative">
        <div class="flex justify-center mb-4">
          <div class="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center">
            <Shield class="w-6 h-6 text-white" />
          </div>
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-4">Vaulting & Storage</h3>
        <p class="text-gray-600 mb-6">
          Protect your gold with our secure vaulting services. Our advanced security features and on-demand monitoring provide peace of mind. Store and secure your assets with short-term or long-term storage options.
        </p>
        <a href="/vaultingstorage" class="text-red-900 hover:text-red-800 absolute bottom-8 left-0 right-0">Learn More</a>
      </div>

      <!-- Treasury Services -->
      <div class="bg-white rounded-lg p-8 text-center shadow-lg h-[420px] relative">
        <div class="flex justify-center mb-4">
          <div class="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center">
            <Building2 class="w-6 h-6 text-white" />
          </div>
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-4">Treasury Services</h3>
        <p class="text-gray-600 mb-6">
          Entrust your historical gold artefacts and heirlooms to our expert treasury services. We offer appraisals, preservation, and secure storage, ensuring your valuable assets are protected and their authenticity is maintained.
        </p>
        <a href="/treasuryservices" class="text-red-900 hover:text-red-800 absolute bottom-8 left-0 right-0">Learn More</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CreditCard, Wallet, Factory, Coins, Shield, Building2 } from 'lucide-vue-next'
</script>

