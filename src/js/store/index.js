import Vue from 'vue'
import Vuex from 'vuex'
import ProductsDataloader from "../products_data_loader";
import { CATALOG_VIEW } from 'constants';

Vue.use(Vuex)

// Ссылка без имени файла
const baseUrl = window.location.href.replace(/\/[^\/]+$/,"/");
const cartUrl = baseUrl + 'cart';

// Отвечает за загрузку товаров из базы на сервере
const productsDataloader = new ProductsDataloader(baseUrl + "data/products.json");

export default new Vuex.Store({
    state: {
        appView: CATALOG_VIEW,
        catalogItems: {
            loadedCount: 0,
            canLoadMore: 1,
            fetchActive: 0,
            itemsData: [],
        },
        cartItems: [],
    },
    mutations: {
        setCatalogItems (state, catalogItemsDataArray) {
            state.catalogItems.itemsData.push(...catalogItemsDataArray);
            state.catalogItems.loadedCount += catalogItemsDataArray.length;
            state.catalogItems.canLoadMore = catalogItemsDataArray.length > 0;
            state.catalogItems.fetchActive = 0;
        },
        setCartItems (state, cartItemsDataArray) {
            state.cartItems = cartItemsDataArray;
        },
        removeFromCart (state, id) {
            const cartItemIdx = state.cartItems.findIndex(val => val.id === id);
            if (cartItemIdx !== -1){
                state.cartItems.splice(cartItemIdx,1);
            }
        },
        setAppView(state, view) {
            state.appView = view;
        },
        setFetchCatalogItemsActive(state){
            state.catalogItems.fetchActive = 1;
        }
    },
    getters: {
        getLoadedCatalogItemsCount: state => state.catalogItems.loadedCount,
        canLoadMoreCatalogItems: state => state.catalogItems.canLoadMore,
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
            if (!state.catalogItems.fetchActive){
                commit('setFetchCatalogItemsActive');
                productsDataloader.fetchData((catalogItemsDataArray)=>{
                    commit('setCatalogItems', catalogItemsDataArray);
                }, startItemIndex, itemsCount);
            }
        },
        fetchCartItems({ commit, state }){
            fetch(cartUrl)
                .then((response) => {
                    //console.log(response);
                    return response.json();
                })
                .then((response) => {
                    commit('setCartItems', response);
                });
        },
        addToCart ({ commit, state }, id) {
            fetch(cartUrl, {
                    method: 'POST', // или 'PUT'
                    body: JSON.stringify({ id: id, action: "add" }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then((response)=>{
                    //console.log(response);
                    return response.json();
                })
                .then((response)=>{
                    commit('setCartItems', response);
                })
                .catch(response=>
                {
                    console.error("item NOT added to cart");
                });
            // console.log('storage mutation addToCart', id, state.cartItems);
        },
        removeFromCart ({ commit, state }, id) {
            fetch(cartUrl, {
                method: 'POST', // или 'PUT'
                body: JSON.stringify({ id: id, action: "destroy" }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response)=>{
                    //console.log(response);
                    return response.json();
                })
                .then((response)=>{
                    commit('setCartItems', response);
                })
                .catch(response=>
                {
                    console.error("item NOT destroyed in cart");
                });
            // console.log('storage mutation addToCart', id, state.cartItems);
        },
    },
})
