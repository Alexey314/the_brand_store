import CartProductItem from './cart_product_item.js';
import CartProductList from './cart_product_list.js';
import ProductsDataloader from './products_data_loader.js';

// Список товаров видимых в корзине
const cartProductList = new CartProductList(".cart-view__products-box");

// Ссылка без имени файла
const baseUrl = window.location.href.replace(/\/[^\/]+$/,"/");

/**
 * Добавляет в cartProductList товар с указанными данными.
 * @param {ProductItemData} productData
 * */
const onAddToCart = productData => {
    // cartProductList.addProduct(new CartProductItem(productData));
    // //console.log(productData);
    fetch(baseUrl + "cart", {
        method: 'POST', // или 'PUT'
        body: JSON.stringify({ id: productData.id }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response)=>{
        if (response.ok) {
            console.log("item added to cart");
        }else{
            console.error("item NOT added to cart");
        }
    }).catch(response=>
    {
        console.error("item NOT added to cart");
    });
};

/**
 * Вызывается когда нужно показать на странице еще карточки товара на основе массива с их данными
 * @param {ProductItemData[]} productDataArray
 * */
const onCartDataFetched = (productDataArray)=>{
    // Вставляем новые карточки, не забыв прибить к ним обработчик onAddToCart
    cartProductList.addProduct(productDataArray.map(val => new CartProductItem(val)));
};

// Отвечает за загрузку товаров из корзины на сервере
const productsDataloader = new ProductsDataloader(baseUrl + "data/cart.json");

// Запускаем асинхронную загрузку корзины
productsDataloader.fetchData(onCartDataFetched);
