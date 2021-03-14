import CartProductItem from './cart_product_item.js';
import CartProductList from './cart_product_list.js';
import ProductsDataloader from './products_data_loader.js';

import "./../css/style.scss"

// Список товаров видимых в корзине
const cartProductList = new CartProductList(".cart-view__products-box");

// Ссылка без имени файла
const baseUrl = window.location.href.replace(/\/[^\/]+$/,"/");

/**
 * Изменяет в корзине на сервере состояние товара с указанными данными.
 * @param {ProductItemData} productData
 * @param {string} actionName - "add"|"remove"|"destroy"
 * */
const modifyCartItem = (productData, actionName) => {
    if (actionName === "destroy"){
        cartProductList.removeProductById(productData.id);
    }

    fetch(baseUrl + "cart", {
        method: 'POST', // или 'PUT'
        body: JSON.stringify({ id: productData.id, action: actionName }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response)=>{
        if (response.ok) {
            console.log("item " + actionName);
        }else{
            console.error("item NOT " + actionName);
        }
    }).catch(response=>
    {
        console.error("item NOT " + actionName);
    });
};

const addCartItem = productData => modifyCartItem(productData, "add");
const removeCartItem = productData => modifyCartItem(productData, "remove");
const destroyCartItem = productData => modifyCartItem(productData, "destroy");


/**
 * Вызывается когда нужно показать на странице карточки товара на основе массива с их данными
 * @param {ProductItemData[]} productDataArray
 * */
const onCartDataFetched = (productDataArray)=>{
    // Вставляем новые карточки, не забыв прибить к ним обработчик onAddToCart
    cartProductList.addProduct(productDataArray.map(val => new CartProductItem(val,
        addCartItem, removeCartItem, destroyCartItem)));
};

// Отвечает за загрузку товаров из корзины на сервере
const productsDataloader = new ProductsDataloader(baseUrl + "data/cart.json");

// Запускаем асинхронную загрузку корзины
productsDataloader.fetchData(onCartDataFetched);
