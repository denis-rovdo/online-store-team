import { CategoriesProduct, Product } from './../../types/types';
import Model from '../model/Model';
import AppView from '../view/AppView';

class AppController {
    view: AppView;
    model: Model;
    constructor(view: AppView, modelSingleton: Model) {
        this.view = view;
        this.model = modelSingleton;
        // отрисовывает данные при загрузке страницы
        this.resetData(this.model.data, this.model.cart.length);
        // вызывает хендлер при добавлении продукта в корзину
        this.view.card.bindAddProduct(this.handleAddProduct);
        this.view.search.bindSearchProduct(this.handlerSearchProduct);
        this.view.categories.bindAddCategory(this.handlerAddCategory);
    }
    startPage() {
        this.view.displayContent(this.model.data);
        this.view.categories.drawCategories(this.model.categories);
        // this.view.search.drawSearch();
    }
    //  сама функция отрисовки  категорий
    resetCategories(arr: CategoriesProduct[]) {
        this.view.categories.drawCategories(arr);
    }
    // функция для отрисовки актуальных данных
    resetData(data: Product[], count: number) {
        // вызов отрисовки категорий
        this.resetCategories(this.model.categories);
        this.view.displayContent(data);
        this.view.cart.drawCart(count.toString());
        this.view.price.drawPrice(this.model.getTotalSum().toString());
    }
    // For categories handler
    handlerAddCategory() {
        console.log('123123');
    }
    // пока что не готовая функция
    handleFilterByBrand = (brand: string) => {
        this.model.filterWithParams(brand);
        // let data = this.model.data;
        this.view.filterByBrand.drawFilter();
    };
    //  функция вызывается при добавлении продукта и закидывает продукт в массив корзины.Перерисовка страницы с новыми данными
    handleAddProduct = (id: number) => {
        this.model.addProduct(id);
        this.resetData(this.model.data, this.model.cart.length);
    };
    // для сортировки товара по тексту введенном в инпуте
    handlerSearchProduct = (textInput: string) => {
        this.model.filterByValue(textInput);
        this.view.displayContent(this.model.data);
    };
}

export default AppController;
