<template>
  <div>
    <h1>Catalog</h1>
    <Catalog :items-data="catalogItemsDataArray"/>
    <h1>Cart</h1>
    <Cart :items-data="cartItemsDataArray" />
  </div>
</template>

<script>
import Catalog from "./components/Catalog.vue"
import Cart from "./components/Cart.vue"
import ProductsDataloader from './js/products_data_loader.js';

// Ссылка без имени файла
const baseUrl = window.location.href.replace(/\/[^\/]+$/,"/");

// Отвечает за загрузку товаров из базы на сервере
const productsDataloader = new ProductsDataloader(baseUrl + "data/products.json");



export default {
  data(){
    return {
      catalogItemsDataArray: [],
      cartItemsDataArray: [],
    }
  },
  components: {
    Catalog,
    Cart
  },
  created() {
    // Запускаем асинхронную загрузку начального кол-ва карточек товаров
    productsDataloader.fetchData((catalogItemsDataArray)=>{
      this.catalogItemsDataArray = catalogItemsDataArray.slice(0,3);
      this.cartItemsDataArray = catalogItemsDataArray.slice(3);
    }, 0, 6);

  }
}
</script>

<style module>

</style>