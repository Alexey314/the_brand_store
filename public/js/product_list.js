
/**
 * Abstract product list class. Contains an array of product items,
 *  */
export default class ProductList {
    items = [];
    parentSelector = null;
    parentElement = null;

    /**
     * @param {string} parentSelector - Selector of parent html element to insert items markup to
     * @param {[]} [itemArray] - Array of product items to insert into new list instance
     */
    constructor(parentSelector, itemArray) {
        if (parentSelector !== undefined) {
            this.parentSelector = parentSelector;
        }

        if (Array.isArray(itemArray)) {
            this.items = Array.from(itemArray);
        }

        this.parentElement = document.querySelector(this.parentSelector);

        this.renderList();
    }

    renderProduct(product) {
        let el = product.getElement();
        this.parentElement.appendChild(el);
        return el;
    }

    renderList() {
        if (this.items.length !== 0 && this.parentElement !== null) {
            this.items.forEach(product => this.renderProduct(product) );
        }
    }

    addProduct(product){
        this.items.push(product);
        this.renderProduct(product);
    }
}