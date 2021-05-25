<template>
  <div>
    <h1>Catalog</h1>
    <Catalog />
    <h1>Cart</h1>
    <Cart />
  </div>
</template>

<script>
import Catalog from "./components/Catalog.vue"
import Cart from "./components/Cart.vue"
import ProductsDataloader from './js/products_data_loader.js';

export default {
  data(){
    return {
      // catalogItemsDataArray: [],
      // cartItemsDataArray: [],
    }
  },
  components: {
    Catalog,
    Cart
  },
  created() {

  }
}
</script>

<style module>

</style>