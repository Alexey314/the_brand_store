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
    fetch(url)
    // let products = [];
    // for (let i = 0; i < count; i++) {
    //     products.push(new CatalogProductItem(getRandomProductData(), onAddToCart));
    // }
    // return products;
}

const catalogProductList = new CatalogProductList(".catalog-view");

const baseUrl = window.location.href.replace(/\/[^\/]+$/,"/");

//console.log(baseUrl);
fetchProducts(baseUrl + "data/products.json", (productDataArray)=>{
    catalogProductList.addProduct(productDataArray);
});