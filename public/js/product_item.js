/**
 * Product item.
 *  */
export default class ProductItem {
    /**
     * A ProductItemData
     * @typedef {{id: string, name: string, description: string, imgSrc: string, price: (string|number)}} ProductItemData
     */
    id = "";
    name = "";
    description = "";
    imgSrc = "";
    price = "";


    /**
     * @param {ProductItemData} itemData - Data for creating a new instance of a product item
     */
    constructor(itemData) {
        this.id = itemData.id;
        this.name = itemData.name;
        this.description = itemData.description;
        this.imgSrc = itemData.imgSrc;
        this.price = itemData.price;
    }

    getMarkup() {

    }
}