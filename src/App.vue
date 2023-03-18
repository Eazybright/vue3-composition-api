<script>
import YummyMeal from './components/YummyMeal.vue'
import { ref, reactive, watch, provide } from 'vue'

export default{
    components: { YummyMeal },
    setup(){
        provide('currencySymbol', '#')

        const cart = reactive([])
        const name = ref("The Burger King")
        const meals = reactive([
            { name: 'Chinese Burger', price: 5 },
            { name: 'Fries', price: 15 },
            { name: 'Efo Riro', price: 50 },
            { name: 'Stir Fry Spaghetti', price: 105 },
            { name: 'Fried Rice', price: 51 }
        ])

        const placeOrder = () => alert('Your order has been received')
        const addItemToCart = (item) => cart.push(item)
        const removeWatcher = watch(() => [...cart], (newValue, oldValue) => alert(newValue.join('\n')))
        return { name, placeOrder, addItemToCart, meals, removeWatcher }
    }
}
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <input v-model="name" type="text" />
    <button @click="placeOrder">Place your order</button>
    <button @click="removeWatcher">Hide Cart Alerts</button>


    <YummyMeal v-for="meal in meals" :name="meal.name" :price="meal.price" 
        @addToCart="addItemToCart"
    ></YummyMeal>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
