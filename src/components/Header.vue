<template>
  <div :class="[$style.wrapper]" >
    <div :class="[$style.wrapper, $style.sticky]" >
      <button :class="[$style.button, { [$style.button_selected]: selectedButtons.catalog } ]"
              @click="$emit('switch-state', 'catalog')">Catalog</button>
      <button :class="[$style.button, selectedButtons.cart ? $style.button_selected : '' ]"
              @click="$emit('switch-state', 'cart')">Cart{{ cartItemCount }}</button>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    selectedButtons: Object
  },
  methods: {

  },
  computed: {
    cartItemCount() {
      const n = this.$store.getters.getCartItemsDataArray.reduce((acc,val)=>acc+val.count, 0);
      return n ? ` (${n})` : '';
    }
  },
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