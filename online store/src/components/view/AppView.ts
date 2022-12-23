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
    bindAddProduct(handler: (data: number) => void) {
        const cards = document.querySelector('.cards');
        console.log(cards?.firstChild)
        cards?.addEventListener('click', (e) => {
            console.log('Click')
            const target = e.target as Element;
            if (target.className == `forAddCard`) {
                const currentID = Number(target.parentElement?.getAttribute('card-id'));
                handler(currentID);
            }
        });
    }
}
export default AppView;
