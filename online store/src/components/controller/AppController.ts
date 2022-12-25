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
        this.view.mainPage.drawLogo();
        this.view.card.drawCard(this.model.data);
        this.view.cart.drawCart(this.model.cart.length);
        this.view.price.drawPrice(this.model.getTotalSum().toString());
        this.view.categories.drawCategories(this.model.categories);
        this.view.search.drawSearch();
        
        this.view.card.bindAddProduct(this.handleAddProduct);
        // this.view.displayContent(this.model.data);
        // this.view.categories.drawCategories(this.model.categories);
        // this.view.card.drawCard(this.model.data);
        // this.view.displayContent(this.model.data);
        // this.resetCategories(this.model.categories);
        // this.view.cart.drawCart(this.model.cart.length);
        // this.view.price.drawPrice(this.model.getTotalSum().toString());
        // this.resetData(this.model.data, this.model.cart.length);
        // console.log('START PAGE')
        const anchors = document.querySelectorAll('.forLink');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                urlRoute(e, anchor.id);
            })
        })
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
    // handlerAddCategory() {
    //     console.log('123123');
    // }
    // пока что не готовая функция
    // handleFilterByBrand = (brand: string) => {
    //     this.model.filterWithParams(brand);
    //     this.view.filterByBrand.drawFilter();
    //     this.startPage()
    // };
    //  функция вызывается при добавлении продукта и закидывает продукт в массив корзины.Перерисовка страницы с новыми данными
    handleAddProduct = (id: number) => {
        this.model.addProduct(id);
        this.startPage();
        
    };
    // для сортировки товара по тексту введенном в инпуте
    // handlerSearchProduct = (textInput: string) => {
    //     console.log(textInput)
    //     this.model.filterByValue(textInput);
    //     this.resetData(this.model.data, this.model.cart.length);
    // };
}

export default AppController;
