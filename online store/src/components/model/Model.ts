import { Product, CategoriesProduct } from './../../types/types';
import data, { categoriesProducts } from '../../data/state';
class Model {
    data: Product[];
    filterData: Array<string>;
    state: Product[];
    cart: Product[];
    categories: CategoriesProduct[];
    constructor() {
        this.state = data;
        this.data = data;
        this.filterData = [];
        this.cart = [];
        this.categories = categoriesProducts;
    }
    // пока что не используется
    filterWithParams = (params: string) => {
        this.data = this.state.filter((el) => el.brand === params);
    };

    // фильтр данных по введенному тексту в инпуте
    filterByValue = (textInput: string) => {
        this.data = this.state.filter((el) => {
            if (el.title.toLowerCase().indexOf(textInput) > -1) {
                return true;
            } else {
                return false;
            }
        });
    };

    // делает уникальный массив продуктов в корзине
    addProduct = (a: number) => {
        if (this.cart.length != 0) {
            this.cart.some((el) => el.id === a) ? '' : this.state.find((el) => (el.id === a ? this.cart.push(el) : ''));
        }
        if (this.cart.length === 0) {
            this.state.find((el) => (el.id === a ? this.cart.push(el) : ''));
        }
    };
    // подсчитывает сумму всех товаров которые находятся в корзине
    getTotalSum() {
        const totalPrice = this.cart.reduce((acc, el) => {
            return el.price + acc;
        }, 0);
        return totalPrice;
    }
}

export let modelSingleton: Model = new Model();

export default Model;
