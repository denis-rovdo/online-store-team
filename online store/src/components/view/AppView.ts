import Cards from './Card/Cards';
import FiltersView from './Filters/Filters';
import PageView from './Pages/MainComponent/PageView';
import Cart from './cart/cart';
import Price from './price/Price';
import Search from './Search/Search';
import Categories from './Categoreis/Categories';
import Sort from './Sort/Sort';
class AppView {
    card: Cards;
    mainPage: PageView;
    filterByBrand: FiltersView;
    cart: Cart;
    price: Price;
    search: Search;
    categories: Categories;
    sort: Sort;
    constructor() {
        this.mainPage = new PageView();
        this.card = new Cards();
        this.cart = new Cart();
        this.price = new Price();
        this.filterByBrand = new FiltersView();
        this.categories = new Categories();
        this.search = new Search();
        this.sort = new Sort();
    }
}
export default AppView;
