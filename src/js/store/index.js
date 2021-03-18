import Vue from 'vue'
import Vuex from 'vuex'
import ProductsDataloader from "../products_data_loader";
import { CATALOG_VIEW } from 'constants';

Vue.use(Vuex)

// Ссылка без имени файла
const baseUrl = window.location.href.replace(/\/[^\/]+$/,"/");

// Отвечает за загрузку товаров из базы на сервере
const productsDataloader = new ProductsDataloader(baseUrl + "data/products.json");

export default new Vuex.Store({
    state: {
        appView: CATALOG_VIEW,
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
            // console.log('setCatalogItems', catalogItemsDataArray);
        },
        addToCart (state, id) {
            const cartItemIdx = state.cartItems.findIndex(val => val.id === id);
            if (cartItemIdx !== -1){
                const cartItem = state.cartItems[cartItemIdx];
                ++cartItem.count;
                Vue.set(state.cartItems, cartItemIdx, cartItem);
            } else {
                const catalogItem = state.catalogItems.itemsData.find(val => val.id === id);
                catalogItem.count = 1;
                state.cartItems.push(catalogItem);
            }
            // console.log('storage mutation addToCart', id, state.cartItems);
        },
        removeFromCart (state, id) {
            const cartItemIdx = state.cartItems.findIndex(val => val.id === id);
            if (cartItemIdx !== -1){
                state.cartItems.splice(cartItemIdx,1);
            }
        },
        setAppView(state, view) {
            console.log(view);
            state.appView = view;
        }
    },
    getters: {
        getLoadedCatalogItemsCount: state => state.catalogItems.loadedCount,
        getAllCatalogItemsCount: state => state.catalogItems.allCount,
        getCatalogItemsData: state => state.catalogItems.itemsData,
        getCartItemsDataArray: state => state.cartItems,
        getCartItemData: state => id => state.cartItems.find(val => val.id === id),
        appView: state => state.appView,
    },
    actions: {
        fetchCatalogItems({ commit, state }, {startItemIndex,itemsCount} ){
            // console.log('fetchCatalogItems', startItemIndex, itemsCount);
            // Запускаем асинхронную загрузку начального кол-ва карточек товаров
            productsDataloader.fetchData((catalogItemsDataArray)=>{
                commit('setCatalogItems', catalogItemsDataArray)
            }, startItemIndex, itemsCount);
        }
    },
})
