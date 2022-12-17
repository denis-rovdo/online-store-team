import { Product } from './../../types/types';
import Model from '../model/Model';
import AppView from '../view/AppView';

class AppController {
    view: AppView;
    model: Model;
    constructor(view: AppView, model: Model) {
        this.view = view;
        this.model = model;
        this.resetData(this.model.data);
        this.view.card.bindAddProduct(this.handleAddProduct);
    }
    resetData = (data: Product[]) => {
        this.view.displayContent(data);
        this.view.filterByBrand.drawFilter();
    };

    handleFilterByBrand = (brand: string) => {
        this.model.filterWithParams(brand);
        // let data = this.model.data;
        this.view.filterByBrand.drawFilter();
    };

    handleAddProduct = (id: number) => {
        this.model.addProduct(id);
    };
}

export default AppController;
