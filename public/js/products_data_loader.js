
/**
 * Асинхронно загружает частями данные карточек товаров по заданной ссылке.
 * @property {string} jsonUrl
 * @property {number} loadedCount
 * @property {boolean} nothingToLoad
 * @property {Promise} activeFetch
 * */
export default class ProductsDataloader{
    jsonUrl = null;
    loadedCount = 0;
    nothingToLoad = false;
    activeFetch = null;

    /**
     * Инициализирует новый объект ProductsDataloader.
     * @param {string} jsonUrl*/
    constructor(jsonUrl) {
        this.jsonUrl = jsonUrl.valueOf();
    }

    /**
     * Инициализирует новый объект ProductsDataloader.
     * @param {function} callbackFn - обпаботчик массива карточек
     * @param {number} [startIndex] - начальный индекс карточки для загрузки
     * @param {number} [count] - сколько всего карточек загрузить
     * */
    fetchData(callbackFn, startIndex, count){
        // Запрещаем параллельные запросы, чтобы не путать порядок карточек и если уже нечего грузить
        if (this.activeFetch != null || this.nothingToLoad){
            //console.log("No products data to load");
            return;
        }

        // Если в аргументах есть диапазон, дополняем ссылку соответствующими параметрами
        let url = this.jsonUrl;
        if (Number.isInteger(startIndex) && Number.isInteger(count)){
            url += `?start=${startIndex}&count=${count}`;
        }

        // Запрашиваем массив карточек
        this.activeFetch = fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                // Обновляем состояние объекта
                this.loadedCount += response.length;
                this.activeFetch = null;
                if (response.length < count){
                    this.nothingToLoad = true;
                }

                // Отдаем карточки для обработки
                callbackFn(response);
            });
    }
};
