import { Product } from './../../types/types';
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
    displayContent(data: Product[]) {
        const cards = document.querySelector('.cards');
        while (cards?.firstChild) {
            cards.removeChild(cards.firstChild);
        }
        if (data.length === 0) {
            const p = document.createElement('p');
            p.innerText = 'Товаров не найдено';
            cards?.append(p);
        } else {
            this.card.drawCard(data);
        }
    }
}

export default AppView;
