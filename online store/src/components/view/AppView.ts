import { Product } from './../../types/types';
import Cards from './Card/Cards';
import FiltersView from './Filters/Filters';
import PageView from './Pages/MainComponent/PageView';
import Cart from './cart/cart';
import Price from './price/Price';
import Search from './Search/Search';
import Categories from './Categoreis/Categories';
class AppView {
    card: Cards;
    mainPage: PageView;
    filterByBrand: FiltersView;
    cart: Cart;
    price: Price;
    search: Search;
    categories: Categories;
    constructor() {
        this.mainPage = new PageView();
        this.card = new Cards();
        this.cart = new Cart();
        this.price = new Price();
        this.filterByBrand = new FiltersView();
        this.categories = new Categories();
        this.search = new Search();

    }
    //  отрисовка каточек
    // displayContent(data: Product[]) {
    //     const cards = document.querySelector('.cards');
    //     const categoriesBlock = document.querySelector('.forReset');
    //     while (cards?.firstChild && categoriesBlock?.firstChild) {
    //         cards.removeChild(cards.firstChild);
    //         categoriesBlock.remove();
    //     }
    //     if (data.length === 0) {
    //         const p = document.createElement('p');
    //         p.innerText = 'Товаров не найдено';
    //         cards?.append(p);
    //     } else {
    //         this.mainPage.drawLogo();
    //         this.card.drawCard(data);
    //         this.search = new Search();
    //         // this.cart.drawCart(0);
    //     }
    // }
}

export default AppView;
