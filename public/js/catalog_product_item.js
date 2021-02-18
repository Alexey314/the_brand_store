import ProductItem from './product_item.js';

/**
 * Catalog product item.
 *  */
export default class CatalogProductItem extends ProductItem {

    addToCartBtnSelector = "catalog-product__add-to-cart-overlay-btn";
    onAddToCartFn = null;
    /**
     * @param {ProductItemData} itemData - Data for creating a new instance of a product item
     */
    constructor(itemData, onAddToCartFn) {
        super(itemData);
        this.onAddToCartFn = onAddToCartFn;
    }

    getMarkup() {
        return `<div class="catalog-product" data-id="${this.id}">
                <div class="catalog-product__img-box">
                    <a href="product.html">
                        <img class="catalog-product__img" src="${this.imgSrc}" alt="product image">
                    </a>
                    <a class="${this.addToCartBtnSelector}" href="javascript:void(0);">
                        <img class="catalog-product__add-to-cart-icon" src="img/cart_add.svg" alt="add to cart">Add to
                        Cart
                    </a>
                </div>
                <div class="catalog-product__description">
                    <a href="product.html">
                        <h3 class="catalog-product__description-heading">${this.name}</h3>
                    </a>
                    <p class="catalog-product__description-text">${this.description}</p>
                    <p class="catalog-product__description-price">$${this.price}</p>
                </div>
            </div>`;
    }

    getElement(product) {
        let el = ProductItem.prototype.getElement.call(this,product);
        el.querySelector("." + this.addToCartBtnSelector)
            .addEventListener("click", this.onAddToCart.bind(this));
        return el;
    }

    onAddToCart(){
        if (this.onAddToCartFn !== null){
            this.onAddToCartFn(this.getProductData());
        }else {
            console.warn("CatalogProductItem.onAddToCartFn is null");
        }
    }

}