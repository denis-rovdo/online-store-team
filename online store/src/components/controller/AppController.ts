import { CategoriesProduct, Product } from './../../types/types';
import Model from '../model/Model';
import AppView from '../view/AppView';
import addHandlersNavigation from '../../router/addHandlers';

class AppController {
    view: AppView;
    model: Model;
    constructor(view: AppView, model: Model) {
        this.view = view;
        this.model = model;
        // отрисовывает данные при загрузке страницы
        this.resetData(this.model.data, this.model.cart.length);
        // вызов отрисовки категорий
        this.resetCategories(this.model.categories);
        console.log(this.model.categories);
        // вызывает хендлер при добавлении продукта в корзину
        this.view.card.bindAddProduct(this.handleAddProduct);
        this.view.search.bindSearchProduct(this.handlerSearchProduct);
    }
    //  сама функция отрисовки  категорий
    resetCategories(arr: CategoriesProduct[]) {
        console.log(arr);
        this.view.categories.drawCategories(arr);
    }
    // функция для отрисовки актуальных данных
    resetData = (data: Product[], count: number) => {
        this.view.displayContent(data);
        this.view.cart.drawCart(count.toString());
        this.view.price.drawPrice(this.model.getTotalSum().toString());
    };
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
