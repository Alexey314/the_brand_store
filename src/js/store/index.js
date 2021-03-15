import Vue from 'vue'
import Vuex from 'vuex'
import ProductsDataloader from "../products_data_loader";

Vue.use(Vuex)

// Ссылка без имени файла
const baseUrl = window.location.href.replace(/\/[^\/]+$/,"/");

// Отвечает за загрузку товаров из базы на сервере
const productsDataloader = new ProductsDataloader(baseUrl + "data/products.json");

export default new Vuex.Store({
    state: {
        catalogItems: {
            loadedCount: 0,
            allCount: 0,
            itemsData: [],
        },
        cartItems: [],
    },
    mutations: {
        setCatalogItems (state, catalogItemsDataArray) {
            state.catalogItems.itemsData = catalogItemsDataArray;
            console.log('setCatalogItems', catalogItemsDataArray);
        },
        addToCart (state, id) {
            // state.data = payload.newData;
            // state.itemsOnPage = Object.keys(payload.newData);
        },
    },
    getters: {
        getLoadedCatalogItemsCount: state => state.catalogItems.loadedCount,
        getAllCatalogItemsCount: state => state.catalogItems.allCount,
        getCatalogItemsData: state => state.catalogItems.itemsData,
    },
    actions: {
        fetchCatalogItems({ commit, state }, {startItemIndex,itemsCount} ){
            console.log('fetchCatalogItems', startItemIndex, itemsCount);
            // Запускаем асинхронную загрузку начального кол-ва карточек товаров
            productsDataloader.fetchData((catalogItemsDataArray)=>{
                commit('setCatalogItems', catalogItemsDataArray)
            }, startItemIndex, itemsCount);
        }
    },
})
