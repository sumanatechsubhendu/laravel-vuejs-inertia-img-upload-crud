<template>
  <Box>
    <div>
      <Link
        :href="route('listing.show', {listing: listing.id})"
      >
        <div class="flex items-center gap-1">
          <Price
            :price="listing.price"
            class="text-2xl font-bold"
          />
          <div class="text-xs text-gray-500">
            <Price :price="monthlyPayment" /> pm
          </div>
        </div>
        <ListingSpace :listing="listing" class="text-lg" />
        <ListingAddress
          :listing="listing"
          class="text-gray-500"
        />
      </Link>
      <!-- Add to Cart Button -->
      <button @click="addToCart(listing)" class="btn-normal btn-small">Add to Cart</button>
    </div>
  </Box>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import ListingAddress from '@/Components/ListingAddress.vue'
import Box from '@/Components/UI/Box.vue'
import ListingSpace from '@/Components/ListingSpace.vue'
import Price from '@/Components/Price.vue'
import { useMonthlyPayment } from '@/Composables/useMonthlyPayment'
import { useStore } from 'vuex'; // Import useStore from Vuex

const store = useStore();

const addToCart = (listing) => {
  store.dispatch('addToCart', listing); // Dispatch addToCart action with listing as payload
};

const props = defineProps({ listing: Object })
const { monthlyPayment } = useMonthlyPayment(
  props.listing.price, 2.5, 25,
)
</script>
<style>
.btn-small {
  background-color: blue;
  margin-left: 5px;;
  padding: 5px 10px; /* Adjust padding to make the button smaller */
  font-size: 12px; /* Adjust font size to make the text smaller */
}
</style>
