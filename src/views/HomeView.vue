<script setup>
import Card from '../components/ProductCard.vue'
import Category from '../components/ProductCategory.vue'
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

//Retrieve values from store
const products = computed(() => store.getters.products);
const isLoading = computed(() => store.getters.isLoading);


//Call fetch products data
onMounted(() => {
  const payload = {
    sort: "desc",
    limit: 4
  }

  //Dispatch to get all products
  store.dispatch('getAllProducts', payload);
})

//Listen to emit function
const navigateTo = (params) => {
  //Save current category in store
  const payload = {
    title: params.title,
    name: params.name
  }

  //Dispatch to get products by selected category
  store.dispatch('setCurrentSelectedCategoryData', payload);

  //Route to category page
  router.push({ path: params.link}) 
}

</script>

<template>
  <main>
    <div>
      <p class="font-bold text-2xl pt-8 pb-5">Flash Sale</p>

      <div v-if="isLoading">
        <p>Loading...</p>
      </div>
      <div class="grid gap-6 grid-cols-12" v-else-if="products && products.length > 0">
        <div v-for="(product, index) in products" class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3" :key="index">
          <Card :title="product.title" :price="product.price" :description="product.description" :image="product.image" :category="product.category" />
        </div>
      </div>
      <div v-else-if="!isLoading && products && products.length <= 0">
        <p>No Products.</p>
      </div>
    </div>

    <div>
      <p class="font-bold text-2xl pt-8 pb-5">Categories</p>

      <div class="grid gap-6 grid-cols-12 pb-8">
        <div class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6">
          <Category title="Men's Clothing" name="men's clothing" link="mens-clothing" :css="['bg-category-men']" @navigate="navigateTo" />
        </div>
        <div class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6">
          <Category title="Women's Clothing" name="women's clothing" link="womens-clothing" :css="['bg-category-women']" @navigate="navigateTo" />
        </div>
      
      </div>
    </div>
  </main>
</template>
