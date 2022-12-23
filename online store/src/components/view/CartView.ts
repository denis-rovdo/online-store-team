import { Product } from "../../types/types";
import Cart from "./cart/cart";
import PageView from "./Pages/MainComponent/PageView";


class CartView {
  mainPage: PageView;
  cart: Cart;
  constructor() {
    this.mainPage = new PageView();
    this.cart = new Cart();
  }
  drawCart(data: Product[]) {

    const container = document.querySelector('main .container');
    while (container?.firstChild) {
      container.removeChild(container.firstChild)
    }
    const cartBlock = document.createElement('div');
    const cartContent =
      `
    <p>${data.length}</p>
    `
    cartBlock.innerHTML = cartContent;
    container?.append(cartBlock);
  }
}
export default CartView;