import Cards from './Card/Cards';
import FiltersView from './Filters/Filters';
import PageView from './Pages/MainComponent/PageView';
class AppView {
    card: Cards;
    mainPage: PageView;
    filterByBrand: FiltersView;
    constructor() {
        this.mainPage = new PageView();
        this.card = new Cards();
        this.filterByBrand = new FiltersView();
    }
}

export default AppView;
