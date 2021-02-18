import ProductItem from './product_item.js';

/**
 * Cart product item.
 *  */
export default class CartProductItem extends ProductItem {

    _quantity = 1;
    /**
     * @param {ProductItemData} itemData - Data for creating a new instance of a product item
     */
    constructor(itemData) {
        super(itemData);
    }

    getMarkup() {
        return `<div class="catalog-product" data-id="${this.id}">
                <div class="catalog-product__description">
                    <a href="product.html">
                        <h3 class="catalog-product__description-heading">${this.name}</h3>
                    </a>
                    <p class="catalog-product__description-price">$${this.price}</p>
                    <p class="catalog-product__description-text">QTY: <span>${this.quantity}</span></p>
                </div>
            </div>`;
    }

    get quantity(){
        return this._quantity;
    }

    set quantity(val){
        this._quantity = val;
        if (this.docElement !== null){
            this.docElement.querySelector(".catalog-product__description-text span").innerText = `${this.quantity}`;
        }
    }

}