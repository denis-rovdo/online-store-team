import { basket } from './Pages/basket/basket';
import { Product } from './../../types/types';
import Cards from './Card/Cards';
import FiltersView from './Filters/Filters';
import PageView from './Pages/MainComponent/PageView';
import Basket from './basket/Baset';
import Price from './price/Price';
import Search from './Search/Search';
class AppView {
    card: Cards;
    mainPage: PageView;
    filterByBrand: FiltersView;
    basket: Basket;
    price: Price;
    search: Search;
    constructor() {
        this.mainPage = new PageView();
        this.card = new Cards();
        this.basket = new Basket();
        this.price = new Price();
        this.filterByBrand = new FiltersView();
        this.search = new Search();
    }
    //  отрисовка каточек
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
