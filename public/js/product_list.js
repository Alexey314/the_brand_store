
/**
 * Abstract product list class. Contains an array of product items,
 *  */
export default class AbstractProductList {
    items = [];
    parentSelector = null;

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

        this.render();
    }

    render() {
        const parentEl = document.querySelector(parentSelector);
        if (this.items.length !== 0 && parentEl !== null) {
            this.items.forEach(item => {
                item.getMarkup();
            });
        }
    }
}