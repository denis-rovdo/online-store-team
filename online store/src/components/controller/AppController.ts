import Model from '../model/Model';
import AppView from '../view/AppView/AppView';

class AppController {
    view: AppView;
    model: Model;
    constructor(view: AppView, modelSingleton: Model) {
        this.view = view;
        this.model = modelSingleton;
    }
    startPage() {
        this.model.resetData();
        this.model.globalFilter();
        this.model.getMinAndMaxPrice();
        this.model.getMinAndMaxStock();
        this.view.mainPage.drawLogo();
        this.view.card.drawCard(this.model.data);
        this.view.cart.drawCart(this.model.cart.length);
        this.view.price.drawPrice(this.model.getTotalSum().toString());
        this.view.categories.drawCategories(this.model.categories);
        this.view.search.drawSearch(this.model.filters.search);
        this.view.filterByBrand.drawFilter(this.model.brands);
        this.view.sort.drawSort(this.model.filters.sortString);
        this.view.countProduct.drawCount(this.model.data.length);
        this.view.dualSlider.createLayout(this.model.filters.priceCount[0], this.model.filters.priceCount[1]);
        this.view.dualStockSlider.createLayout(this.model.filters.stockCount[0], this.model.filters.stockCount[1]);

        this.view.filterByBrand.bindAddBrand(this.handleFilterByBrand);
        this.view.card.bindAddProduct(this.handleAddProduct);
        this.view.categories.bindAddCategory(this.handlerAddCategory);
        this.view.search.bindSearchProduct(this.handlerSearchProduct);
        this.view.sort.bindSort(this.handlerSelectSort);
        this.view.dualSlider.bindePriseInput(this.handlerChangePrice);
        this.view.dualStockSlider.bindeStockInput(this.handlerChangeStock);
    }
    handlerChangeStock = (lowerNumber: string, upperNumber: string): void => {
        this.model.getMinAndMaxStock();
        this.model.filterByStock(lowerNumber, upperNumber);
        // this.model.globalFilter();
        this.model.globalFilterBySlider();
        this.view.card.drawCard(this.model.data);
    };
    handlerChangePrice = (lowerNumber: string, upperNumber: string): void => {
        this.model.filterByPrice(lowerNumber, upperNumber);
        //this.model.globalFilter();
        this.model.globalFilterBySlider();
        //this.model.getMinAndMaxPrice();
        this.view.card.drawCard(this.model.data);
    };

    handlerSelectSort = (stringValue: string) => {
        this.model.addSortValue(stringValue);
        this.model.globalFilter();
        this.view.card.drawCard(this.model.data);
    };
    // For categories handler
    handlerAddCategory = (categoryValue: string, param: string): void => {
        if (param === 'add') {
            this.model.addFilterByCategories(categoryValue);
        }
        if (param === 'delete') {
            this.model.deleteFilterByCategories(categoryValue);
        }
        this.model.globalFilter();
        this.view.card.drawCard(this.model.data);
        this.view.countProduct.drawCount(this.model.data.length);

        this.model.getMinAndMaxPrice();
        this.view.dualSlider.bindePriseInput(this.handlerChangePrice);
        this.view.dualSlider.createLayout(this.model.filters.priceCount[0], this.model.filters.priceCount[1]);

        this.model.getMinAndMaxStock();
        this.view.dualStockSlider.createLayout(this.model.filters.stockCount[0], this.model.filters.stockCount[1]);
        this.view.dualStockSlider.bindeStockInput(this.handlerChangeStock);
    };
    // фильтрация по брэнду
    handleFilterByBrand = (value: string, brand: string) => {
        if (brand === 'Check') {
            this.model.addFilterByBrand(value);
        }
        if (brand === 'Uncheck') {
            this.model.deleteFilterByBrand(value);
        }

        this.model.globalFilter();
        this.view.card.drawCard(this.model.data);
        this.view.countProduct.drawCount(this.model.data.length);

        this.model.getMinAndMaxPrice();
        this.view.dualSlider.createLayout(this.model.filters.priceCount[0], this.model.filters.priceCount[1]);
        this.view.dualSlider.bindePriseInput(this.handlerChangePrice);

        this.model.getMinAndMaxStock();
        this.view.dualStockSlider.createLayout(this.model.filters.stockCount[0], this.model.filters.stockCount[1]);
        this.view.dualStockSlider.bindeStockInput(this.handlerChangeStock);
    };

    //  функция вызывается при добавлении продукта и закидывает продукт в массив корзины.Перерисовка страницы с новыми данными
    handleAddProduct = (id: number, parameter: string) => {
        if (parameter === 'Add') {
            this.model.addProduct(id);
        }
        if (parameter === 'Delete') {
            this.model.deleteProduct(id);
        }
        this.view.cart.drawCart(this.model.cart.length);
        this.view.price.drawPrice(this.model.getTotalSum().toString());
        this.view.card.drawCard(this.model.data);
        this.view.countProduct.drawCount(this.model.data.length);
    };
    // для сортировки товара по тексту введенном в инпуте
    handlerSearchProduct = (textInput: string) => {
        this.model.filterByValue(textInput);
        this.startPage();
    };
}

export default AppController;
