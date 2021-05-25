<template>
  <div  :class=[$style.flex]>
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
  data() {
    return {

    }
  },
  computed: {
    itemsData() {
      return this.$store.getters.getCatalogItemsData;
    }
  },
  created() {
    this.$store.dispatch('fetchCatalogItems', {
      startItemIndex: this.$store.getters.getLoadedCatalogItemsCount,
      itemsCount: 3});
  }
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