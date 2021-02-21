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

//console.log(baseUrl);
fetchProducts(baseUrl + "data/products.json", (productDataArray)=>{
    catalogProductList.addProduct(productDataArray.map(data => {
        return new CatalogProductItem(data,onAddToCart);
    }));
});