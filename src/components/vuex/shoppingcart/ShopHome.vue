<template>
  <div>
    <h1>Vuex--Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <h2>Cart</h2>
    <cart></cart>
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import Cart from './Cart.vue'

export default {
  components: { ProductList, Cart }
}
</script>
