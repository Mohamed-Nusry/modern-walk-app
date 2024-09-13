<script setup>
import Card from '../components/ProductCard.vue'

import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';

const store = useStore();

//Retrieve values from store
const currentCategory = computed(() => store.getters.currentCategoryData);
const categoryProducts = computed(() => store.getters.productByCategory);
const isLoading = computed(() => store.getters.isLoading);

//Call fetch data by category
onMounted(() => {
  const payload = {
    sort: "desc",
    limit: 12,
    category: currentCategory.value != null && currentCategory.value ? currentCategory.value.name : ''
  };

  store.dispatch('getProductsByCategory', payload);
})
</script>

<template>
  <main>
    <div>
      <p class="font-bold text-2xl pt-8 pb-5">{{ currentCategory != null ? currentCategory.title : '' }}</p>

      <div v-if="isLoading">
        <p>Loading...</p>
      </div>
      <div class="grid gap-6 grid-cols-12" v-else-if="categoryProducts && categoryProducts.length > 0">
        <div v-for="(product, index) in categoryProducts" class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3" :key="index">
          <Card :title="product.title" :price="product.price" :description="product.description" :image="product.image" :category="product.category" />
        </div>
      </div>
      <div v-else-if="!isLoading && categoryProducts && categoryProducts.length <= 0">
        <p>No Products.</p>
      </div>
    </div>
  </main>
</template>
