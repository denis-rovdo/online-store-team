import { Product } from "../../../types/types";
import Cart from "../AppView/cart/cart";
import PageView from "../Pages/MainComponent/PageView";


class ProductView {
  mainPage: PageView;
  cart: Cart;
  constructor() {
    this.mainPage = new PageView();
    this.cart = new Cart();
  }
  drawProduct(product: Product) {
    const container = document.querySelector('main .container');
    while (container?.firstChild) {
      container.removeChild(container.firstChild)
    }
    const productBlock = document.createElement('div');
    productBlock.className = 'productBlock';
    const productElement =
      `
    <h3>${product.title}</h3>
    <img src='${product.thumbnail}' alt='product'>
    `
    productBlock.innerHTML = productElement;
    container?.append(productBlock);
  }
}

export default ProductView;