<template>
  <div>
    <Header :selectedButtons="appState" @switch-state="switchState"/>
    <Catalog v-show="appState.catalog"/>
    <Cart  v-show="appState.cart"/>
  </div>
</template>

<script>
import Catalog from "./components/Catalog.vue"
import Cart from "./components/Cart.vue"
import Header from "./components/Header.vue"

export default {
  data(){
    return {
      appState : {
        catalog:1,
        cart:0
      }
    }
  },
  components: {
    Header,
    Catalog,
    Cart
  },
  methods: {
    switchState(arg){
      this.appState.catalog = arg === 'catalog';
      this.appState.cart = arg === 'cart';
    }
  },
  created() {

  }
}
</script>

<style module>

</style>