

import ProductList from './product_list.js';

export default class CatalogProductList extends ProductList{
    constructor(parentSelector, itemArray) {
        super(parentSelector, itemArray);
    }

    // renderProduct(product) {
    //     let el = ProductList.prototype.renderProduct.call(this, product);
    //     // el.addEventListener("click", product.onAddToCart.bind(product));
    //    // this.parentElement.insertAdjacentHTML("beforeend", product.getMarkup());
    // }
}