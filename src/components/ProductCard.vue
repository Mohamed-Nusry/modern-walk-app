<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        //Retrieve props
        title: {
            type: String,
            required: true
        },   
        price: {
            type: Number,
            required: true
        }, 
        description: {
            type: String,
            required: true
        }, 
        image: {
            type: String,
            required: false
        },   
        category: {
            type: String,
            required: false
        }   
    })

    //Change color according to the category
    let bgColor = computed(() => {
        if(props.category && props.category == "women's clothing") {
            return 'bg-category-women';
        } else {
            return 'bg-category-men';
        }
    });

</script>

<template>
    <div class="max-w-sm max-h-5 min-h-5 rounded overflow-hidden shadow-lg rounded-2xl bg-white">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center limit-title-count">{{ props.title }}</div>
        </div>
        <div class="flex justify-center pb-4">
            <img class="max-h-2 min-h-2" :src="props.image ?? ''" alt="Product Image">
        </div>
        <div class="px-6 pt-4 pb-2 rounded-2xl h-500" :class="bgColor">
            <p class="text-price-color text-xl font-bold pb-1 text-base text-center">Rs {{ props.price }}</p>
            <p class="text-black font-medium text-base  text-center limit-word-count">
                {{ props.description }}
            </p>
        </div>
    </div>
</template>

