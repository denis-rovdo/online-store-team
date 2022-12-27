import { Product, CategoriesProduct } from './../../types/types';
import data, { brandsFilter, categoriesProducts } from '../../data/state';
class Model {
    data: Product[];
    filterData: Array<string>;
    state: Product[];
    cart: Product[];
    categories: CategoriesProduct[];
    totalPrice: number;
    inputValue: string;
    filterCategories: Array<string>;
    brands: {
        name: string,
        checked: boolean,
    }
    filters: {
        search: string,
        categories: Array<string>,
        brands: Array<string>,
        haveCount: Array<number>,
        priceCount: Array<number>
    }
    constructor() {
        this.state = data;
        this.data = data;
        this.filters = {
            search: '',
            categories: [],
            brands: [],
            haveCount: [],
            priceCount: [],
        }
        this.filterData = [];
        this.filterCategories = [];
        this.cart = [];
        this.totalPrice = 0;
        this.categories = categoriesProducts;
        this.brands = brandsFilter;
        this.inputValue = '';
    }
    addFilterByBrand(brand) {
        this.brands.map(el => {
            if (el.name.toLowerCase().indexOf(brand.toLocaleLowerCase()) > -1) {
                el.checked = !el.checked;
            } else {
                el.checked = el.checked;
            }
        });
        this.filters.brands.push(brand);
        console.log(this.filters.brands);
    }

    deleteFilterByBrand(brand) {
        this.brands.map(el => {
            if (el.name.toLowerCase().indexOf(brand.toLocaleLowerCase()) > -1) {
                el.checked = !el.checked;
            } else {
                el.checked = el.checked;
            }
        });
        this.filters.brands = this.filters.brands.filter(el => el.toLocaleLowerCase() !== brand.toLocaleLowerCase());
        console.log(this.filters.brands);

    }
    // добавление категории
    addFilterByCategories(categoryValue: string) {
        this.categories.map(el => {
            if (el.name.toLowerCase().indexOf(categoryValue.toLocaleLowerCase()) > -1) {
                el.checking = !el.checking;
            } else {
                el.checking = el.checking;
            }
        });
        this.filters.categories.push(categoryValue);

    }
    // удаление категории 
    deleteFilterByCategories(categoryValue: string) {
        this.categories.map((el) => {
            if (el.name.toLowerCase().indexOf(categoryValue.toLocaleLowerCase()) > -1) {
                el.checking = !el.checking;
            } else {
                el.checking = el.checking;
            }
        });
        this.filters.categories = this.filters.categories.filter(el => el.toLocaleLowerCase() !== categoryValue.toLocaleLowerCase());

    }
    // пока что не используется
    filterWithParams = (params: string) => {
        this.data = this.state.filter((el) => el.brand === params);
    };
    // перезаписываем дату в исходное состояние
    resetData() {
        this.data = this.state;
        this.inputValue = '';
    }
    findProductById(id: number) {
        this.data = this.state.filter(el => el.id === id);
    }
    // фильтр данных по введенному тексту в инпуте
    filterByValue = (textInput: string) => {
        this.inputValue = textInput.toLocaleLowerCase();
        this.filters.search = textInput;
    };

    //добавляет продукт в корзину делает уникальный массив продуктов в корзине
    addProduct = (a: number) => {
        this.state.map(el => el.id === a ? el.checking = !el.checking : '');
        if (this.cart.length != 0) {
            this.cart.some((el) => el.id === a) ? '' : this.state.find((el) => (el.id === a ? this.cart.push(el) : ''));
        }
        if (this.cart.length === 0) {
            this.state.find((el) => (el.id === a ? this.cart.push(el) : ''));
        }
    };
    // удаляем продукт из массива ккорзины
    deleteProduct(a: number) {
        this.state.map(el => el.id === a ? el.checking = !el.checking : '');
        this.cart = this.cart.filter(el => el.id !== a);
    }
    // подсчитывает сумму всех товаров которые находятся в корзине
    getTotalSum() {
        const totalPrice = this.cart.reduce((acc, el) => {
            return el.price + acc;
        }, 0);
        return totalPrice;
    }
    // сортирует наши данные по всем критериям
    globalFilter() {
        this.data = this.state.filter((el) => {
            if (el.title.toLowerCase().indexOf(this.filters.search.toLocaleLowerCase()) > -1) {
                return true;
            } else {
                return false;
            }
        });
        if (this.filters.categories.length !== 0) {
            let filtersData: Product[] = [];
            this.data = this.data.filter((el) => {
                this.filters.categories.some(categoryValueFromArray => {
                    if (el.category.toLocaleLowerCase().indexOf(categoryValueFromArray.toLocaleLowerCase()) > -1) {
                        filtersData.push(el)
                        return true;
                    } else {
                        return false;
                    }
                })
            });
            this.data = filtersData;
        }
        if (this.filters.brands.length !== 0) {
            let filtersData: Product[] = [];
            this.data = this.data.filter((el) => {
                this.filters.brands.some(brandValueFromArray => {
                    if (el.brand.toLocaleLowerCase().indexOf(brandValueFromArray.toLocaleLowerCase()) > -1) {
                        filtersData.push(el)
                        return true;
                    } else {
                        return false;
                    }
                })
            });
            this.data = filtersData;
        }
    }
}

export let modelSingleton: Model = new Model();

export default Model;
