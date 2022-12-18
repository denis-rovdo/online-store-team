import { Product } from './../../types/types';
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
        this.resetData(this.model.data, this.model.basket.length);
        // вызывает хендлер при добавлении продукта в корзину
        this.view.card.bindAddProduct(this.handleAddProduct);
        this.view.search.bindSearchProduct(this.handlerSearchProduct);
    }

    // функция для отрисовки актуальных данных
    resetData = (data: Product[], count: number) => {
        this.view.displayContent(data);
        this.view.basket.drawBasket(count.toString());
        this.view.price.drawPrice(this.model.getTotalSum().toString())

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
        this.resetData(this.model.data, this.model.basket.length);

    };
    // для сортировки товара по тексту введенном в инпуте
    handlerSearchProduct = (textInput: string) => {
        this.model.filterByValue(textInput);
        this.view.displayContent(this.model.data);
    }
}

export default AppController;
