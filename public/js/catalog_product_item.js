import ProductItem from './product_item.js';

/**
 * Catalog product item.
 *  */
export default class CatalogProductItem extends ProductItem {

    /**
     * @param {ProductItemData} itemData - Data for creating a new instance of a product item
     */
    constructor(itemData) {
        super(itemData);
    }

    getMarkup() {

    }
}