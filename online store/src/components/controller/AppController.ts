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
    }
    resetData = (data: Product[]) => {
        this.view.card.drawCard(data);
        this.view.filterByBrand.drawFilter();
    };

    handleFilterByBrand = (brand: string) => {
        this.model.filterWithParams(brand);
        // let data = this.model.data;
        this.view.filterByBrand.drawFilter();
    };
}

export default AppController;
