<script setup>
import YummyMealPrice from './YummyMealPrice.vue'

const props = defineProps({
    name: String,
    price: Number
})

const emit = defineEmits(['addToCart'])

const addToCart = () => emit('addToCart', props.name)
</script>

<template>
    <p>
        <strong>
            {{ name }}
        </strong>

        <YummyMealPrice :price="price"/>

        <button @click="addToCart">Add to cart</button>
    </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
