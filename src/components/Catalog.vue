<template>
  <div  :class="[$style.flex]">
    <CatalogItem  v-for="item in itemsData" :data="item" :key="item.id"/>
    <div ref="scroll-check"></div>
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
    },
    canLoadMoreItems() {
      return this.$store.getters.canLoadMoreCatalogItems;
    }
  },
  methods:{
    needShowMoreProducts(){
      const scrollCheckTop = this.$refs['scroll-check'].getBoundingClientRect().top;
      console.log(scrollCheckTop, window.innerHeight);
      return scrollCheckTop <= window.innerHeight;
    },
    fetchMoreItems(count){
      this.$store.dispatch('fetchCatalogItems', {
        startItemIndex: this.$store.getters.getLoadedCatalogItemsCount,
        itemsCount: count})
    }
  },
  created() {
    this.fetchMoreItems(10);
    document.addEventListener('scroll', ()=>{
      if ( this.canLoadMoreItems && this.needShowMoreProducts() ){
        this.fetchMoreItems(10);
      }
    });
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