<template>
    <div>
      <h3 :class=[$style.total]>Items: {{itemsCount}}</h3>
      <h3 :class=[$style.total]>Total: ${{total}}</h3>
      <div  :class=[$style.flex]>
        <CartItem  v-for="item in itemsData" :key="item.id"/>
      </div>
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
      return this.$store.getters.getCartItemsDataArray;
    },
    itemsCount() {
      return this.$store.getters.cartItemCount;
    },
    total() {
      return this.$store.getters.cartTotal;
    }
  },
  created() {
    this.$store.dispatch('fetchCartItems');
  }
}
</script>

<style module>
.total{
  margin: 8px;
}
.flex {
  display: flex;
  flex-wrap: wrap;
}
.flex > div {
  margin: 8px;
}
</style>