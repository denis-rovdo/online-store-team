import Model from '../model/Model';
import AppView from '../view/AppView';
import { urlRoute } from '../../main';

class AppController {
    view: AppView;
    model: Model;
    constructor(view: AppView, modelSingleton: Model) {
        this.view = view;
        this.model = modelSingleton;
        // this.startPage();
        // отрисовывает данные при загрузке страницы
        // вызывает хендлер при добавлении продукта в корзину
        // this.resetData(this.model.data, this.model.cart.length)
        // this.view.search.bindSearchProduct(this.handlerSearchProduct);
        // this.view.categories.bindAddCategory(this.handlerAddCategory);
    }
    startPage() {
        this.model.resetData();
        this.model.globalFilter();
        this.view.mainPage.drawLogo();
        this.view.card.drawCard(this.model.data);
        this.view.cart.drawCart(this.model.cart.length);
        this.view.price.drawPrice(this.model.getTotalSum().toString());
        this.view.categories.drawCategories(this.model.categories);
        this.view.search.drawSearch(this.model.filters.search);
        this.view.card.bindAddProduct(this.handleAddProduct);
        this.view.categories.bindAddCategory(this.handlerAddCategory);
        this.view.search.bindSearchProduct(this.handlerSearchProduct)


    }
    //  сама функция отрисовки  категорий
    // resetCategories(arr: CategoriesProduct[]) {
    //     this.view.categories.drawCategories(arr);
    //     console.log('RESET CATEGORIES')

    // }
    // функция для отрисовки актуальных данных
    // resetData(data: Product[], count: number) {
    //     // вызов отрисовки категорий
    //     this.resetCategories(this.model.categories);
    //     // this.view.displayContent(this.model.data);
    //     this.view.cart.drawCart(this.model.cart.length);
    //     this.view.price.drawPrice(this.model.getTotalSum().toString());
    //     this.startPage();
    //     console.log('RESET DATA');
    // }
    // For categories handler
    handlerAddCategory = (categoryValue: string, param: string): void => {
        if (param === 'add') {
            this.model.addFilterByCategories(categoryValue)
            this.model.globalFilter();
            this.view.card.drawCard(this.model.data);
        }
        if (param === 'delete') {
            this.model.deleteFilterByCategories(categoryValue)
            this.model.globalFilter();
            this.view.card.drawCard(this.model.data);
        }
    }
    // пока что не готовая функция
    // handleFilterByBrand = (brand: string) => {
    //     this.model.filterWithParams(brand);
    //     this.view.filterByBrand.drawFilter();
    //     this.startPage()
    // };
    //  функция вызывается при добавлении продукта и закидывает продукт в массив корзины.Перерисовка страницы с новыми данными
    handleAddProduct = (id: number, parameter: string) => {
        if (parameter === 'Add') {
            this.model.addProduct(id);
            this.view.cart.drawCart(this.model.cart.length);
            this.view.price.drawPrice(this.model.getTotalSum().toString());
            this.view.card.drawCard(this.model.data);

        }
        if (parameter === 'Delete') {
            this.model.deleteProduct(id);
            this.view.cart.drawCart(this.model.cart.length);
            this.view.price.drawPrice(this.model.getTotalSum().toString());
            this.view.card.drawCard(this.model.data);
        }


    };
    // для сортировки товара по тексту введенном в инпуте
    handlerSearchProduct = (textInput: string) => {
        this.model.filterByValue(textInput);
        this.startPage();
        // this.model.globalFilter();
        // this.view.card.drawCard(this.model.data);
        // this.view.card.bindAddProduct(this.handleAddProduct);
    };
}

export default AppController;
