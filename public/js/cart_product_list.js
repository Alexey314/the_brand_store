import ProductList from './product_list.js';
import CartProductItem from './cart_product_item.js';

export default class CartProductList extends ProductList {
    constructor(parentSelector, itemArray) {
        super(parentSelector);
        this.items = new Map;
        if (Array.isArray(itemArray)) {
            itemArray.forEach(val => this.addProduct(val));
        }
    }

    addProduct(product) {
        if (Array.isArray(product)){
            product.forEach(val=>this.addProduct(val));
        } else if ( product instanceof CartProductItem){
            let item = this.items.get(product.id);
            if (item){
                ++item.quantity;
            } else {
                this.items.set(product.id, product);
                this.renderProduct(product);
            }
        }
    }

    removeProductById(productId){
        let item = this.items.get(productId);
        if (item){
            item.docElement.remove();
        }
    }
}