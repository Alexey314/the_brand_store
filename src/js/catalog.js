import CatalogProductList from './catalog_product_list.js';
import CatalogProductItem from './catalog_product_item.js';
import CartProductItem from './cart_product_item.js';
import CartProductList from './cart_product_list.js';
import ProductsDataloader from './products_data_loader.js';

import "./../css/style.scss"

// Список товаров видимых в корзине
const cartProductList = new CartProductList(".cart-view");

// Ссылка без имени файла
const baseUrl = window.location.href.replace(/\/[^\/]+$/,"/");

/**
 * Добавляет в корзину на сервере товар по его уникальному id.
 * @param {ProductItemData} productData
 * */
const onAddToCart = productData => {
    fetch(baseUrl + "cart", {
        method: 'POST', // или 'PUT'
        body: JSON.stringify({ id: productData.id, action: "add" }),
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

// Список товаров видимых на странице
const catalogProductList = new CatalogProductList(".catalog-view");

// Находим элемент разметки по положению которого в окне браузера будем решать грузить ли еще карточки товаров
const scrollCheck = document.querySelector(".scroll-check");

/**
 * Возвращает true, если страница прокручена до конца списка товаров и надо догрузить еще
 * @return {boolean}
* */
function needShowMoreProducts(){
    const scrollCheckTop = scrollCheck.getBoundingClientRect().top;
    //console.log(scrollCheckTop);
    return scrollCheckTop <= window.innerHeight;
}

/**
 * Вызывается когда нужно показать на странице еще карточки товара на основе массива с их данными
 * @param {ProductItemData[]} productDataArray
 * */
const onProductsDataFetched = (productDataArray)=>{
    // Запоминаем положение скролла до вставки новых карточек
    const lastScrollY = window.scrollY;

    // Вставляем новые карточки, не забыв прибить к ним обработчик onAddToCart
    catalogProductList.addProduct(productDataArray.map(val => new CatalogProductItem(val, onAddToCart)));

    // Восстанавливаем положение скролла после вставки новых карточек
    window.scroll({
        top: lastScrollY
    });
};

// Отвечает за загрузку товаров из базы на сервере
const productsDataloader = new ProductsDataloader(baseUrl + "data/products.json");

// Запускаем асинхронную загрузку начального кол-ва карточек товаров
productsDataloader.fetchData(onProductsDataFetched, 0, 30);

// Вешаем обработчик скроллинга чтобы динамически подгружать новые карточки товаров
document.addEventListener('scroll', ()=>{
    if (needShowMoreProducts()){
        productsDataloader.fetchData(onProductsDataFetched, productsDataloader.loadedCount, 30);
    }
});