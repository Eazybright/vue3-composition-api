<script>
import YummyMealPrice from './YummyMealPrice.vue'

export default{
    components: { YummyMealPrice },
    props: {
        name: String,
        price: Number
    },

    setup(props, { emit }) {

        const addToCart = () => emit('addToCart', props.name)
        return { addToCart }
    }
}
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
