<template>
  <div class="catalog-product" :data-id="data.id">
    <div class="catalog-product__img-box">
      <a href="product.html">
        <img class="catalog-product__img" :src="data.imgSrc" alt="product image">
      </a>
      <a class="catalog-product__add-to-cart-overlay-btn" href="javascript:void(0);">
        <img class="catalog-product__add-to-cart-icon" src="img/cart_add.svg" alt="add to cart">
        Add to Cart
      </a>
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
}
</script>

<style module>

</style>