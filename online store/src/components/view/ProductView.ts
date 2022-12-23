import { Product } from "../../types/types";
import PageView from "./Pages/MainComponent/PageView";


class ProductView {
  mainPage: PageView;
  constructor() {
    this.mainPage = new PageView();
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