<template>
  <div class="catalog-product" :data-id="data.id">
    <div class="catalog-product__img-box">
      <a href="product.html">
        <img class="catalog-product__img" :src="data.imgSrc" alt="product image">
      </a>
      <div class="catalog-product__add-to-cart-overlay-btn" v-on:click="addToCart">
        <img class="catalog-product__add-to-cart-icon" src="img/cart_add.svg" alt="add to cart">
        Add to Cart
      </div>
    </div>
    <div class="catalog-product__description">
      <a href="product.html">
        <h3 class="catalog-product__description-heading">{{ data.name }}</h3>
      </a>
      <p class="catalog-product__description-text">{{ data.description }}</p>
      <p class="catalog-product__description-price">${{ data.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  methods: {
    addToCart(event){
      console.log("addToCart ", this.data);
    }
  }
}
</script>

<style module>

</style>