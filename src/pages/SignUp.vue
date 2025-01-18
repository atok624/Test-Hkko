<template>
  <div class=" py-6 flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full md:max-w-xl">
      <h2 class="text-2xl font-bold mb-2 text-center">Welcome to HKKO GOLD</h2>
      <p class="text-sm text-gray-600 mb-6 text-center">Please fill in the information below to open your account</p>
      
      <!-- Loading State -->
      <div v-if="loading" class="text-center text-gray-600">
        Loading countries...
      </div>
      
      <!-- Error State -->
      <div v-if="error" class="text-center text-red-600">
        {{ error }}
      </div>
      
      <!-- Success Message -->
      <div v-if="successMessage" class="text-center text-green-600 mb-4">
        {{ successMessage }}
      </div>

      <form v-if="!loading && !error && !successMessage" @submit.prevent="handleSubmit" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
            <input v-model="form.firstName" id="firstName" type="text" placeholder="First Name" required
                   class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
          </div>
          <div>
            <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
            <input v-model="form.lastName" id="lastName" type="text" placeholder="Last Name" required
                   class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
            <select 
              v-model="form.country" 
              @change="updateCountryCode" 
              id="country" 
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            >
              <option value="">Select a country</option>
              <option 
                v-for="country in sortedCountries" 
                :key="country.alpha2" 
                :value="country.alpha2"
              >
                {{ country.name }}
              </option>
            </select>
          </div>
          
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
            <div class="relative mt-1">
              <span v-if="form.countryCode" class="absolute left-3 top-2 text-gray-500">
                {{ form.countryCode }}
              </span>
              <input 
                v-model="phoneWithoutCode"
                id="phone" 
                type="tel" 
                :placeholder="form.countryCode ? 'Phone number' : 'Select country first'"
                required
                :class="{
                  'pl-16': form.countryCode,
                  'pl-3': !form.countryCode,
                  'mt-1 block w-full py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500': true
                }"
              >
            </div>
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="form.email" id="email" type="email" placeholder="Email" required
                 class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
        </div>
        
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input v-model="form.password" id="password" type="password" placeholder="Enter Password" required
                 class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
        </div>
        
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input v-model="form.confirmPassword" id="confirmPassword" type="password" placeholder="Confirm Password" required
                 class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
        </div>
        
        <button type="submit" 
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Submit
        </button>
      </form>
      
      <div class="mt-4 text-sm text-center">
        Already have an account? 
        <a href="#" @click.prevent="navigateToLogin" class="font-medium text-red-800 hover:text-red-900">Login instead!</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const form = reactive({
  firstName: '',
  lastName: '',
  phone: '',
  country: '',
  email: '',
  password: '',
  confirmPassword: '',
  countryCode: ''
});

const countries = ref([]);
const loading = ref(true);
const error = ref(null);
const successMessage = ref(null); // Success message state

// Computed property for phone number without country code
const phoneWithoutCode = computed({
  get: () => {
    if (!form.phone) return '';
    return form.phone.replace(form.countryCode, '');
  },
  set: (value) => {
    form.phone = form.countryCode + value.replace(/[^\d]/g, '');
  }
});

const sortedCountries = computed(() => {
  return [...countries.value].sort((a, b) => 
    a.name.localeCompare(b.name)
  );
});

const router = useRouter();

const navigateToLogin = () => {
  router.push('/login');
};

const updateCountryCode = () => {
  const selectedCountry = countries.value.find(country => country.alpha2 === form.country);
  if (selectedCountry) {
    const phoneCode = selectedCountry.phone_code.startsWith('+') 
      ? selectedCountry.phone_code 
      : `+${selectedCountry.phone_code}`;
    
    form.countryCode = phoneCode;
    const oldNumber = phoneWithoutCode.value;
    form.phone = form.countryCode + oldNumber;
  }
};

// Handle form submission
const handleSubmit = () => {
  if (!form.firstName || !form.lastName || !form.email || !form.password || !form.confirmPassword || !form.country || !form.phone) {
    error.value = 'All fields are required.';
    return;
  }

  if (form.password !== form.confirmPassword) {
    error.value = 'Passwords do not match.';
    return;
  }

  successMessage.value = 'You have successfully signed up!';
  error.value = null; // Clear any previous error
  console.log('Form submitted:', form);
};

onMounted(async () => {
  try {
    loading.value = true;
    error.value = null;
    successMessage.value = null;

    const response = await axios.get('https://api.sampleapis.com/countries/countries');
    countries.value = response.data.map(country => ({
      name: country.name,
      alpha2: country.abbreviation,
      phone_code: country.phone && country.phone.startsWith('+') 
        ? country.phone 
        : `+${country.phone}`
    }));
  } catch (err) {
    console.error('Error fetching countries:', err);
    error.value = 'Failed to load countries. Please try again later.';
  } finally {
    loading.value = false;
  }
});
</script>
