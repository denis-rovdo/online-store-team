import { Product } from "../../types/types";
import Cart from "./cart/cart";
import PageView from "./Pages/MainComponent/PageView";
import ProductsFromCart from "./СartView/ProductsFromCart/ProductsFromCart";


class CartView {
  mainPage: PageView;
  cart: Cart;
  products: ProductsFromCart;
  constructor() {
    this.mainPage = new PageView();
    this.cart = new Cart();
    this.products = new ProductsFromCart();
  }

}
export default CartView;