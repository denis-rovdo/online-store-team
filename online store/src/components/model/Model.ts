import { Product } from './../../types/types';
import data from '../../data/state';

class Model {
    data: Product[];
    filterData: Array<string>;
    state: Product[];
    basket: Product[];
    constructor() {
        this.state = data;
        this.data = data;
        this.filterData = [];
        this.basket = [];
    }

    filterWithParams = (params: string) => {
        this.data = this.state.filter((el) => el.brand === params);
    };

    // делает уникальный массив продуктов в корзине
    addProduct = (a: number) => {
        if (this.basket.length != 0) {
            this.basket.some((el) => el.id === a)
                ? ''
                : this.state.find((el) => (el.id === a ? this.basket.push(el) : ''));
        }
        if (this.basket.length === 0) {
            this.state.find((el) => (el.id === a ? this.basket.push(el) : ''));
        }
    };
}

export default Model;
