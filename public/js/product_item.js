/**
 * Product item.
 *  */
export default class ProductItem {
    /**
     * A ProductItemData
     * @typedef {{name: string, description: string, imgSrc: string, price: (string|number)}} ProductItemData
     */

    name = "";
    description = "";
    imgSrc = "";
    price = "";

    /**
     * @param {ProductItemData} itemData - Data for creating a new instance of a product item
     */
    constructor(itemData) {
        this.name = itemData.name;
        this.description = itemData.description;
        this.imgSrc = itemData.imgSrc;
        this.price = itemData.price;
    }

    getMarkup() {

    }
}