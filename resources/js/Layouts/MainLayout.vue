<template>
  <header class="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 w-full">
    <div class="container mx-auto">
      <nav class="p-4 flex items-center justify-between">
        <div class="text-lg font-medium">
          <Link :href="route('listing.index')">Listings</Link>
          <Link :href="route('users.index')" class="ml-5">Slot</Link>
        </div>
        <div class="text-xl text-indigo-600 dark:text-indigo-300 font-bold text-center">
          <Link :href="route('listing.index')">DEMO</Link>
        </div>
        <div>
            <p>Example Data:</p>
            <div>
                <div v-for="(listingData, index) in exampleData" :key="index">
                <p>ID: {{ listingData.id }}</p>
                <p>Beds: {{ listingData.beds }}</p>
                <p>Baths: {{ listingData.baths }}</p>
                <p>Area: {{ listingData.area }}</p>
                <!-- Add to Cart Button -->
                <button @click="deleteFromCart(index)" class="btn-normal btn-small-main-layout">Delete</button>
                </div>
            </div>
            <button @click="fetchData">Fetch Data</button>
        </div>
        <div v-if="user" class="flex items-center gap-4">
          <Link
            class="text-gray-500 relative pr-2 py-2 text-lg"
            :href="route('notification.index')"
          >
            🔔
            <div v-if="notificationCount" class="absolute right-0 top-0 w-5 h-5 bg-red-700 dark:bg-red-400 text-white font-medium border border-white dark:border-gray-900 rounded-full text-xs text-center">
              {{ notificationCount }}
            </div>
          </Link>

          <Link class="text-sm text-gray-500" :href="route('realtor.listing.index')">{{ user.name }}</Link>
          <Link :href="route('realtor.listing.create')" class="btn-primary">+ New Listing</Link>
          <div>
            <Link :href="route('logout')" method="delete" as="button">Logout</Link>
          </div>
        </div>
        <div v-else class="flex items-center gap-2">
          <Link :href="route('user-account.create')">Register</Link>
          <Link :href="route('login')">Sign-In</Link>
        </div>
      </nav>
    </div>
  </header>

  <main class="container mx-auto p-4 w-full">
    <div v-if="flashSuccess" class="mb-4 border rounded-md shadow-sm border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900 p-2">
      {{ flashSuccess }}
    </div>
    <slot>Default</slot>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { Link, usePage } from '@inertiajs/inertia-vue3'
import { useStore } from 'vuex'

const store = useStore()

const exampleData = computed(() => store.getters.getExampleData)

const fetchData = () => {
  store.dispatch('fetchExampleData')
}

const deleteFromCart = (index) => {
  store.commit('deleteFromCart', index); // Dispatching the 'deleteFromCart' mutation with the index of the item to delete
};

const page = usePage()
const flashSuccess = computed(
  () => page.props.value.flash.success,
)
const user = computed(
  () => page.props.value.user,
)
const notificationCount = computed(
  () => Math.min(page.props.value.user.notificationCount, 9),
)
</script>
<style>
.btn-small-main-layout {
  background-color:firebrick !important;
  margin-left: 5px;;
  padding: 5px 10px; /* Adjust padding to make the button smaller */
  font-size: 12px; /* Adjust font size to make the text smaller */
}
</style>
