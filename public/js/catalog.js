import CatalogProductList from './catalog_product_list.js';
import CatalogProductItem from './catalog_product_item.js';
import CartProductItem from './cart_product_item.js';
import CartProductList from './cart_product_list.js';

const cartProductList = new CartProductList(".cart-view");

const onAddToCart = productData => {
    cartProductList.addProduct(new CartProductItem(productData));
    //console.log(productData);
};

function fetchProducts(url, callbackFn) {
    fetch(url).then((response) => {
        return response.json();
    })
    .then(callbackFn);
}

const catalogProductList = new CatalogProductList(".catalog-view");

const baseUrl = window.location.href.replace(/\/[^\/]+$/,"/");

let catalogProductsData = [];

const scrollCheck = document.querySelector(".scroll-check");

function needShowMoreProducts(){
    const scrollCheckTop = scrollCheck.getBoundingClientRect().top;
    //console.log(scrollCheckTop);
    return scrollCheckTop <= window.innerHeight;
}

function showMoreProducts(productsData, productList, count){
    if (productList.length < productsData.length) {
        let countToShow = Math.min(count, productsData.length - productList.length);
        let productDataIdx = productList.length;
        while (countToShow--) {
            productList.addProduct(new CatalogProductItem(productsData[productDataIdx++], onAddToCart));
        }
    }
}

const onShowMoreProducts = (count) => showMoreProducts(catalogProductsData, catalogProductList, count);

//console.log(baseUrl);
fetchProducts(baseUrl + "data/products.json", (productDataArray)=>{
    catalogProductsData = productDataArray;
    onShowMoreProducts(5);
    document.addEventListener('scroll', (event)=>{
        const lastScrollY = window.scrollY;
        //console.log("scroll=",lastScrollY);
        if (needShowMoreProducts()){
            onShowMoreProducts(5);
            // если так не делать, иногда залипает в конце страницы и грузит все карточки сразу
            window.scroll({
                top: lastScrollY
            });
        }
    });
});



//
// /**
//  * Функция вставляет несколько постов на страницу.
//  */
// function insertPosts() {
//     // 3. в postsMarkup вам надо будет в цикле дописывать с помощью конкатенации
//     // разметку, возвращаемую getPostMarkup.
//     // 3.1 в getPostMarkup в качестве аргумента передавайте счетчик цикла
//     let postsMarkup = '';
//     for (let i = 1; i <= 3; i++){
//         postsMarkup += getPostMarkup(i);
//     }
//
//     // 3.2 Перед scrollCheck вставьте записанную в postsMarkup разметку
//     scrollCheck.insertAdjacentHTML("beforebegin", postsMarkup);
// }
