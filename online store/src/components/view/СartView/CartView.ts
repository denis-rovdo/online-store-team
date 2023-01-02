import { Product } from '../../../types/types';
import Cart from '../AppView/cart/cart';
import Price from '../AppView/price/Price';
import PageView from '../Pages/MainComponent/PageView';
import ProductsFromCart from './ProductsFromCart/ProductsFromCart';

class CartView {
    mainPage: PageView;
    cart: Cart;
    products: ProductsFromCart;
    price: Price;
    constructor() {
        this.mainPage = new PageView();
        this.cart = new Cart();
        this.products = new ProductsFromCart();
        this.price = new Price();
    }
}
export default CartView;
