<template>
  <div>
    <!-- Spacer div that takes up space when nav is fixed -->
    <div :style="{ height: isNavFixed ? navHeight + 'px' : '0' }" class="transition-all duration-300"></div>

    <header class="bg-red-900 w-full text-white">
      <!-- Top bar -->
      <div class="bg-red-800 flex w-full ">
        <div class="flex justify-between items-center w-[95%] md:w-[80%] lg:w-[75%] py-2.5 text-sm mx-auto"
          :class="{ 'hidden': isNavFixed }">
          <div class="font-bold tracking-wide text-xs">GOLD LIVE PRICE &nbsp; | &nbsp; SILVER LIVE PRICES</div>
          <div class="space-x-4 sm:space-x-6">
            <router-link to="/login"
              class="hover:underline transition-colors duration-200 font-bold">Login</router-link>
            <router-link to="/signup" class="hover:underline transition-colors duration-200 font-bold">Sign
              up</router-link>
          </div>
        </div>
      </div>


      <!-- Main header -->
      <div class="w-full">
        <div
          class="flex flex-col lg:flex-row md:flex-col  justify-between items-center w-[95%] md:w-[85%] lg:w-[75%] py-6 sm:py-4 gap-4 sm:gap-6 md:gap-8 mx-auto"
          :class="{ 'hidden': isNavFixed }">
          <!-- Logo and mobile menu button -->
          <div class="flex items-center justify-between sm:justify-start">
            <div class="">
              <a href="/"> <img src="/LOGO-1-300x82.png" alt="HKKO Logo"
                class="w-[200px]  mr-2 sm:mr-3 md:mr-5" /></a>
            </div>
            <!-- Mobile Hamburger Button -->
            <button @click="toggleMobileMenu" class="sm:hidden p-1.5 hover:bg-red-700 rounded-lg transition-colors"
              aria-label="Toggle mobile menu">
              <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
              <X v-else class="w-6 h-6" />
            </button>
          </div>

          <!-- Search bar -->
          <div class="w-full sm:max-w-sm md:max-w-md" :class="{ 'hidden sm:block': isMobileMenuOpen }">
            <div class="relative flex items-center">
              <label for="site-search" class="sr-only">Search for product</label>
              <input id="site-search" type="text" placeholder="Search for product..."
                class="w-full px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm" />
              <button aria-label="Search"
                class="absolute right-3 sm:right-4 flex items-center justify-center h-full top-0">
                <Search class="w-5 h-5 text-gray-500" aria-hidden="true" />
              </button>
            </div>
          </div>

          <!-- Actions (Currency, Language, Cart) -->
          <div class="flex items-center justify-start" :class="{ 'hidden sm:flex': isMobileMenuOpen }">
            <!-- Currency selector -->
            <div class="relative">
              <button @click="toggleCurrencyDropdown"
                class="flex flex-col items-center w-[90px] sm:w-[100px] px-2 sm:px-3 py-1.5 rounded-md focus:outline-none focus:ring-1 focus:ring-white text-sm text-white hover:bg-white/10">
                <span>{{ currencies[selectedCurrency].symbol }} {{ selectedCurrency }}</span>
              </button>
              <div v-if="isCurrencyOpen"
                class="absolute top-full left-0 mt-1 w-[90px] sm:w-[100px] bg-white rounded-md shadow-lg z-50">
                <button v-for="(currency, code) in currencies" :key="code" @click="selectCurrency(code)"
                  class="w-full flex justify-around items-center text-left px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100">
                  <span class="text-xs mr-2 opacity-70">{{ currency.symbol }} </span>
                  <span>{{ code }}</span>
                </button>
              </div>
            </div>

            <!-- Language selector -->
            <div class="relative">
              <button @click="toggleLanguageDropdown"
                class="flex items-center w-[90px] sm:w-[100px] sm:px-3 py-1.5 rounded-md focus:outline-none focus:ring-1 focus:ring-white text-sm text-white hover:bg-white/10">
                <img :src="languages[selectedLanguage].flag" alt="Flag" class="w-5 h-3 mr-1" />
                <span>{{ selectedLanguage }}</span>
              </button>
              <div v-if="isLanguageOpen"
                class="absolute top-full left-0 mt-1 w-[90px] sm:w-[100px] bg-white rounded-md shadow-lg z-50">
                <button v-for="(lang, language) in languages" :key="language" @click="selectLanguage(language)"
                  class="w-full items-center justify-around text-left px-3 flex py-1.5 text-sm text-gray-700 hover:bg-gray-100">
                  <img :src="lang.flag" alt="Flag" class="w-5 h-3 mr-2" />
                  <span>{{ language }}</span>
                </button>
              </div>
            </div>

            <!-- Cart -->
            <router-link to="/cart" aria-label="Shopping Cart"
              class="relative hover:scale-110 transition-transform p-1.5">
              <ShoppingCart class="w-6 h-6" />
              <span
                class="absolute -top-2 -right-2 bg-red-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">0</span>
            </router-link>
          </div>
        </div>
      </div>


      <hr class="border-white-800" :class="{ 'hidden': isNavFixed }">

      <!-- Navigation (Tablet & Desktop) -->
      <nav ref="mainNav"
        class="hidden sm:block w-full bg-red-900 sm:px-8 z-40 md:px-16 py-3 transition-all duration-500 ease-in-out"
        :class="{
          'fixed top-0 left-0 right-0 z-100 shadow-lg': isNavFixed,
          'transform -translate-y-full': isNavFixed && !isScrollingUp,
          'transform translate-y-0': isNavFixed && isScrollingUp,
          'relative': !isNavFixed
        }">
        <ul class="flex flex-wrap justify-center font-black space-x-6 sm:space-x-8 md:space-x-8">
          <li v-for="(item, index) in menuItems" :key="`menu-${index}`" class="relative">
            <div @mouseenter="handleDropdownEnter(item.name)" @mouseleave="handleDropdownLeave(item.name)">
              <div v-if="item.name === 'Resources' || item.name === 'Invest' || item.name === 'Services'" @click="toggleDropdown(item.name)"
                class="flex items-center  hover:text-red-200 cursor-pointer transition-colors duration-200 whitespace-nowrap">
                {{ item.name }}
              </div>
              <router-link v-else :to="item.path"
                class=" font-bold hover:text-red-200 cursor-pointer transition-colors duration-200 whitespace-nowrap"
                active-class="text-red-200">
                {{ item.name }}
              </router-link>
              <!-- Dropdown for Resources -->
              <ul v-if="item.name === 'Resources' && dropdownOpenFor === 'Resources'"
                class="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 text-sm bg-white shadow-md rounded-md z-50 w-40 text-gray-800"
                @mouseenter="handleDropdownEnter(item.name)" @mouseleave="handleDropdownLeave(item.name)">
                <li>
                  <router-link to="/blog" class="block px-4 py-2 hover:bg-red-100">Blog and News</router-link>
                </li>
                <li>
                  <router-link to="/faq" class="block px-4 py-2 hover:bg-red-100">FAQ</router-link>
                </li>
                <li>
                  <router-link to="#" class="block px-4 py-2 hover:bg-red-100">Charts</router-link>
                </li>
                <li>
                  <router-link to="/calculator/sellers" class="block px-4 py-2 hover:bg-red-100">Seller's
                    Calculator</router-link>
                </li>
                <li>
                  <router-link to="/calculator/buyers" class="block px-4 py-2 hover:bg-red-100">Buyer's
                    Calculator</router-link>
                </li>
              </ul>
              <!-- Dropdown for Investments -->
              <ul v-if="item.name === 'Invest' && dropdownOpenFor === 'Invest'"
                class="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 text-sm bg-white shadow-md rounded-md z-50 w-40 text-gray-800"
                @mouseenter="handleDropdownEnter(item.name)" @mouseleave="handleDropdownLeave(item.name)">
                <li>
                <router-link to="/invest" class="block px-4 py-2 hover:bg-red-200">Modules
                </router-link>
              </li>
                <li>
                <router-link to="#" class="block px-4 py-2 hover:bg-red-200">Investor information</router-link>
              </li>
              <li>
                <router-link to="#" class="block px-4 py-2 hover:bg-red-200">How to invest</router-link>
              </li>
              <li>
                <router-link to="#" class="block px-4 py-2 hover:bg-red-200">Gold Investment Guide</router-link>
              </li>
              <li>
                <router-link to="#" class="block px-4 py-2 hover:bg-red-200">How to start</router-link>
              </li>
              <li>
                <router-link to="#" class="block px-4 py-2 hover:bg-red-200">Investment products</router-link>
              </li>
              <li>
                <router-link to="#" class="block px-4 py-2 hover:bg-red-200">Investors benefits</router-link>
              </li>
              <li>
                <router-link to="/private-placement" class="block px-4 py-2 hover:bg-red-200">PP Program</router-link>
              </li>
              <li>
                <router-link to="/pppguide" class="block px-4 py-2 hover:bg-red-200">PPP Guide</router-link>
              </li>
              </ul>
              <ul v-if="item.name === 'Services' && dropdownOpenFor === 'Services'"
                class="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 text-sm bg-white shadow-md rounded-md z-50 w-40 text-gray-800"
                @mouseenter="handleDropdownEnter(item.name)" @mouseleave="handleDropdownLeave(item.name)">
                <li>
                <router-link to="/services" class="block px-4 py-2 hover:bg-red-200">All Services</router-link>
              </li>
              <li>
                <router-link to="/pppservices" class="block px-4 py-2 hover:bg-red-200">PPP Services</router-link>
              </li>
              <li>
                <router-link to="/trading" class="block px-4 py-2 hover:bg-red-200">Trading</router-link>
              </li>
              <li>
                <router-link to="/refining" class="block px-4 py-2 hover:bg-red-200">Refining</router-link>
              </li>
              <li>
                <router-link to="/mintpage" class="block px-4 py-2 hover:bg-red-200">Custom Minting</router-link>
              </li>
              <li>
                <router-link to="/vaultingstorage" class="block px-4 py-2 hover:bg-red-200">Vaulting and Storage</router-link>
              </li>
              <li>
                <router-link to="/treasuryservices" class="block px-4 py-2 hover:bg-red-200">Treasury Services</router-link>
              </li>
              <li>
                <router-link to="/globallogistics" class="block px-4 py-2 hover:bg-red-200">transportation</router-link>
              </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>

      <!-- Mobile Navigation -->
      <nav v-if="isMobileMenuOpen" class="block sm:hidden bg-red-900 px-4 py-3 text-white z-50">
        <ul class="space-y-3">
          <li v-for="(item, index) in menuItems" :key="`mobile-menu-${index}`" class="relative">
            <div
              @click="item.name === 'Resources' || item.name === 'Invest' || item.name === 'Services'? toggleDropdown(item.name) : navigateTo(item.path)"
              class="flex justify-between items-center cursor-pointer font-bold hover:text-red-200">
              <span>{{ item.name }}</span>
              <span v-if="item.name === 'Resources' || item.name === 'Invest' || item.name === 'Services'">
                <!-- <ChevronDown v-if="dropdownOpenFor !== item.name" class="w-4 h-4" />
                <ChevronUp v-else class="w-4 h-4" /> -->
              </span>
            </div>
            <!-- Mobile Dropdown for Resources -->
            <ul v-if="item.name === 'Resources' && dropdownOpenFor === 'Resources'"
              class="mt-2 bg-red-800 rounded-md text-sm">
              <li>
                <router-link to="/blog" class="block px-4 py-2 hover:bg-red-700">Blog and News</router-link>
              </li>
              <li>
                <router-link to="/faq" class="block px-4 py-2 hover:bg-red-700">FAQ</router-link>
              </li>
              <li>
                <router-link to="#" class="block px-4 py-2 hover:bg-red-700">Charts</router-link>
              </li>
              <li>
                <router-link to="/calculator/buyers" class="block px-4 py-2 hover:bg-red-700">Buyer's
                  Calculator</router-link>
              </li>
              <li>
                <router-link to="/calculator/sellers" class="block px-4 py-2 hover:bg-red-700">Seller's
                  Calculator</router-link>
              </li>
            </ul>
            <!-- Mobile Dropdown for Investments -->
            <ul v-if="item.name === 'Invest' && dropdownOpenFor === 'Invest'"
              class="mt-2 bg-red-800 rounded-md text-sm">
              <li>
                <router-link to="/invest" class="block px-4 py-2 hover:bg-red-700">Modules</router-link>
              </li>
              <li>
                <router-link to="#" class="block px-4 py-2 hover:bg-red-700">Investor information</router-link>
              </li>
              <li>
                <router-link to="#" class="block px-4 py-2 hover:bg-red-700">How to invest</router-link>
              </li>
              <li>
                <router-link to="#" class="block px-4 py-2 hover:bg-red-700">Gold Investment Guide</router-link>
              </li>
              <li>
                <router-link to="#" class="block px-4 py-2 hover:bg-red-700">How to start</router-link>
              </li>
              <li>
                <router-link to="#" class="block px-4 py-2 hover:bg-red-700">Investment products</router-link>
              </li>
              <li>
                <router-link to="#" class="block px-4 py-2 hover:bg-red-700">Investors benefits</router-link>
              </li>
              <li>
                <router-link to="/private-placement" class="block px-4 py-2 hover:bg-red-700">PP Program</router-link>
              </li>
              <li>
                <router-link to="/pppguide" class="block px-4 py-2 hover:bg-red-700">PPP Guide</router-link>
              </li>
            </ul>
            <ul v-if="item.name === 'Services' && dropdownOpenFor === 'Services'"
                class="mt-2 bg-red-800 rounded-md text-sm">
                <li>
                <router-link to="/services" class="block px-4 py-2 hover:bg-red-200">All Services</router-link>
              </li>
              <li>
                <router-link to="/pppservices" class="block px-4 py-2 hover:bg-red-200">PPP Services</router-link>
              </li>
              <li>
                <router-link to="/trading" class="block px-4 py-2 hover:bg-red-200">Trading</router-link>
              </li>
              <li>
                <router-link to="/refining" class="block px-4 py-2 hover:bg-red-200">Refining</router-link>
              </li>
              <li>
                <router-link to="/mintpage" class="block px-4 py-2 hover:bg-red-200">Custom Minting</router-link>
              </li>
              <li>
                <router-link to="/vaultingstorage" class="block px-4 py-2 hover:bg-red-200">Vaulting and Storage</router-link>
              </li>
              <li>
                <router-link to="/treasuryservices" class="block px-4 py-2 hover:bg-red-200">Treasury Services</router-link>
              </li>
              <li>
                <router-link to="/globallogistics" class="block px-4 py-2 hover:bg-red-200">transportation</router-link>
              </li>
              </ul>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { Menu, X, Search, ShoppingCart, ChevronDown, ChevronUp } from 'lucide-vue-next';

const router = useRouter();
const mainNav = ref(null);
const navHeight = ref(0);
const isNavFixed = ref(false);
const isScrollingUp = ref(true);
const dropdownOpenFor = ref(null);
const isMobileMenuOpen = ref(false);
const dropdownTimeout = ref(null);
const isCurrencyOpen = ref(false);
const isLanguageOpen = ref(false);
const selectedCurrency = ref('USD');
const selectedLanguage = ref('GB');

let lastScrollPosition = 0;

const menuItems = ref([
  { name: 'Gold', path: '/gold' },
  { name: 'Silver', path: '/silver' },
  { name: 'Invest', path: '/invest' },
  { name: 'Services', path: '/services' },
  { name: 'Sell To Us', path: '/#' },
  { name: 'Resources', path: '/resources' }
]);

const currencies = {
  USD: { symbol: '$' },
  EUR: { symbol: '€' },
  GBP: { symbol: '£' }
};

const languages = {
  GB: { flag: '/England.jpg' },
  FR: { flag: '/Flag-France.webp' },
  DE: { flag: '/Flag_of_Germany.svg.webp' }
};

const handleScroll = () => {
  const headerHeight = mainNav.value?.offsetHeight || 0;
  const scrollPosition = window.scrollY;

  if (scrollPosition > headerHeight && !isNavFixed.value) {
    navHeight.value = headerHeight;
    isNavFixed.value = true;
  } else if (scrollPosition <= headerHeight && isNavFixed.value) {
    isNavFixed.value = false;
  }

  isScrollingUp.value = scrollPosition < lastScrollPosition;
  lastScrollPosition = scrollPosition;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  navHeight.value = mainNav.value?.offsetHeight || 0;

  window.addEventListener('resize', () => {
    navHeight.value = mainNav.value?.offsetHeight || 0;
  }, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', () => { });
  if (dropdownTimeout.value) {
    clearTimeout(dropdownTimeout.value);
  }
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleDropdownEnter = (name) => {
  if (dropdownTimeout.value) {
    clearTimeout(dropdownTimeout.value);
  }
  dropdownOpenFor.value = name;
};

const handleDropdownLeave = (name) => {
  dropdownTimeout.value = setTimeout(() => {
    if (dropdownOpenFor.value === name) {
      dropdownOpenFor.value = null;
    }
  }, 300);
};

const toggleDropdown = (name) => {
  if (dropdownOpenFor.value === name) {
    handleDropdownLeave(name);
  } else {
    handleDropdownEnter(name);
  }
};

const toggleCurrencyDropdown = () => {
  isCurrencyOpen.value = !isCurrencyOpen.value;
  isLanguageOpen.value = false;
};

const toggleLanguageDropdown = () => {
  isLanguageOpen.value = !isLanguageOpen.value;
  isCurrencyOpen.value = false;
};

const selectCurrency = (currency) => {
  selectedCurrency.value = currency;
  isCurrencyOpen.value = false;
};

const selectLanguage = (language) => {
  selectedLanguage.value = language;
  isLanguageOpen.value = false;
};

const navigateTo = (path) => {
  router.push(path);
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
nav {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.fixed {
  position: fixed;
}

.transform {
  transform: translateY(0);
}

.transform.-translate-y-full {
  transform: translateY(-100%);
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.z-50 {
  z-index: 50;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:text-red-200:hover {
  transition: color 0.2s ease-in-out;
}

.block.sm\:hidden {
  transition: opacity 0.3s ease-in-out;
}
</style>
