import Cart from '../AppView/cart/cart';
import Price from '../AppView/price/Price';
import { CreateModal } from '../modal/modal';
import PageView from '../Pages/MainComponent/PageView';
import ProductsFromCart from './ProductsFromCart/ProductsFromCart';

class CartView {
    mainPage: PageView;
    cart: Cart;
    products: ProductsFromCart;
    price: Price;
    modal: CreateModal;
    constructor() {
        this.mainPage = new PageView();
        this.cart = new Cart();
        this.products = new ProductsFromCart();
        this.price = new Price();
        this.modal = new CreateModal();
    }
}
export default CartView;
