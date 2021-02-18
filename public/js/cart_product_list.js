import ProductList from './product_list.js';
import CartProductItem from './cart_product_item.js';

export default class CartProductList extends ProductList {
    constructor(parentSelector, itemArray) {
        super(parentSelector);
        this.parentElement.style.position = "fixed";
        this.parentElement.style.top = "0";
        this.parentElement.style.left = "0";
        this.parentElement.style.display = "block";
        this.items = new Map;
        if (Array.isArray(itemArray)) {
            itemArray.forEach(val => this.addProduct(val));
        }
    }

    addProduct(product) {
        if ( product instanceof CartProductItem){
            let item = this.items.get(product.id);
            if (item === undefined){
                this.items.set(product.id, product);
                this.renderProduct(product);
            } else {
                ++item.quantity;
            }
        }
    }
}