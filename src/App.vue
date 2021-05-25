<template>
  <div>
    <Header />
    <Catalog v-show="isCatalogVisible"/>
    <Cart  v-show="isCartVisible"/>
  </div>
</template>

<script>
import Catalog from "./components/Catalog.vue"
import Cart from "./components/Cart.vue"
import Header from "./components/Header.vue"
import { CATALOG_VIEW, CART_VIEW } from 'constants';

export default {
  data(){
    return {

    }
  },
  components: {
    Header,
    Catalog,
    Cart
  },
  methods: {

  },
  computed: {
    isCatalogVisible(){
      return this.$store.getters.appView === CATALOG_VIEW;
    },
    isCartVisible(){
      return this.$store.getters.appView === CART_VIEW;
    },
  },
  created() {

  }
}
</script>

<style module>

</style>