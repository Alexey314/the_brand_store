<template>
  <div >
<!--    <h1>Catalog:</h1>-->
    <CatalogItem  v-for="item in itemsData" :data="item" :key="item.id"/>
  </div>

</template>

<script>
import CatalogItem from "./CatalogItem.vue";
export default {
  components: {
    CatalogItem
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

</style>