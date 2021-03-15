<template>
    <div  :class=[$style.flex]>
      <CartItem  v-for="item in itemsData" :key="item.id"/>
    </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  components: {
    CartItem,
  },
  data() {
    return {

    }
  },
  computed: {
    itemsData() {
      // console.log('cart', this.$store.getters.getCartItemsDataArray);
      return this.$store.getters.getCartItemsDataArray;
    }
  },
}
</script>

<style module>
.flex {
  display: flex;
  flex-wrap: wrap;
}
.flex > div {
  margin: 8px;
}
</style>