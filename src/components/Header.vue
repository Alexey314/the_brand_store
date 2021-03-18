<template>
  <div :class="[$style.wrapper]" >
    <div :class="[$style.wrapper, $style.sticky]" >
      <button :class="[$style.button, { [$style.button_selected]: isCatalogVisible } ]"
              @click="showCatalog()">Catalog</button>
      <button :class="[$style.button, { [$style.button_selected]: isCartVisible } ]"
              @click="showCart()">Cart{{ cartItemCount }}</button>
    </div>
  </div>

</template>

<script>
import { CATALOG_VIEW, CART_VIEW } from 'constants';

export default {
  props: {

  },
  methods: {
    showCatalog(){
      this.$store.commit('setAppView', CATALOG_VIEW);
    },
    showCart(){
      this.$store.commit('setAppView', CART_VIEW);
    },
  },
  computed: {
    cartItemCount() {
      const n = this.$store.getters.cartItemCount;
      return n ? ` (${n})` : '';
    },
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
.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  background-color: lightgreen;
}

.sticky{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.button{
  height: 25px;
  width: 100px;
  background-color: lightgray;
  margin: 8px;
  border: 1px solid darkgray;
  outline: none;
}

.button:hover{
  cursor: pointer;
}

.button_selected{
  background-color: darkgray;
}
</style>