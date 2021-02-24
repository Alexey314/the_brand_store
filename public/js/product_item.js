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
    docElement = null;

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

    getElement(){
        let div = document.createElement("div");
        div.innerHTML = this.getMarkup();
        this.docElement = div.firstChild;
        return this.docElement;
    }

    getProductData(){
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            imgSrc: this.imgSrc,
            price: this.price
        };
    }
}