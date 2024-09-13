<script setup>
    const props = defineProps({
        //Retrieve props
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },         
        css: {
            type: Array,
            required: false
        }         
    })

    //Define the emits
    const emit = defineEmits(['navigate'])

</script>

<template>
    <div class="grid justify-items-stretch overflow-hidden shadow-lg h-64 w-full text-white rounded-2xl cursor-pointer" :class="props.css" @click="emit('navigate', {title: props.title, name: props.name, link: props.link})">
        <div class="mb-2 text-center flex justify-center items-center px-4 py-2">
            <p class="font-bold text-3xl">{{ props.title }}</p>
        </div>
    </div>
</template>

