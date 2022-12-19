import { Product, CategoriesProduct } from './../../types/types';
import data from '../../data/state';
class Model {
    data: Product[];
    filterData: Array<string>;
    state: Product[];
    basket: Product[];
    categories: CategoriesProduct[]
    constructor() {
        this.state = data;
        this.data = data;
        this.filterData = [];
        this.basket = [];
        this.categories = [{
            name: 'Vacuum cleaners',
            img: 'https://www.svgrepo.com/show/62969/vacuum-cleaner.svg'
        },
        {
            name: 'Coffee machines',
            img: 'https://www.svgrepo.com/show/1281/coffee-maker.svg'
        },
        {
            name: 'Fridges',
            img: 'https://www.svgrepo.com/show/86056/fridge.svg'
        },
        {
            name: 'Microwaves',
            img: 'https://www.svgrepo.com/show/300115/microwave.svg'
        },
        {
            name: 'Kettles',
            img: 'https://www.svgrepo.com/show/67724/kettle.svg'
        },
        {
            name: 'Washing machine',
            img: 'https://www.svgrepo.com/show/79028/washing-machine.svg'
        },         
        ]
    }
    // пока что не используется
    filterWithParams = (params: string) => {
        this.data = this.state.filter((el) => el.brand === params);
    };


    // фильтр данных по введенному тексту в инпуте
    filterByValue = (textInput: string) => {
        this.data = this.state.filter(el => {
            if (el.title.toLowerCase().indexOf(textInput) > -1) {
                return true
            } else {
                return false
            }
        })
    }

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
    // подсчитывает сумму всех товаров которые находятся в корзине
    getTotalSum() {
        const totalPrice = this.basket.reduce((acc, el) => {
            return el.price + acc;
        }, 0)
        return totalPrice;
    }
}



export default Model;
