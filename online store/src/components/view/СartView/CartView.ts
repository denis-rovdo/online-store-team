import { Product } from "../../../types/types";
import Cart from "../AppView/cart/cart";
import PageView from "../Pages/MainComponent/PageView";
import ProductsFromCart from "./ProductsFromCart/ProductsFromCart";


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