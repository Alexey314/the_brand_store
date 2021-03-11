<template>
    <div  :class=[$style.flex]>
      <CartItem  v-for="item in itemsData" :data="item" :key="item.id"/>
    </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  components: {
    CartItem,
  },
  props: {
    itemsData: Array
  },
  data() {
    return {

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