import { Product } from './../../../../types/types';
import classes from './ProductsFromCart.module.sass';


class ProductsFromCart {
  drawCarts(data: Product[]) {
    const container = document.querySelector('main .container');
    while (container?.firstChild) {
      container.removeChild(container.firstChild)
    }
    data.forEach(el => {
      const cartBlock = document.createElement('div');
      cartBlock.className = `${classes.cartBlock}`
      const cartContent =
        `
      <h3>${el.title}</h3>
      <img class='${classes.img}' src='${el.thumbnail}'
      <p>${el.description}</p>
      `
      cartBlock.innerHTML = cartContent;
      container?.append(cartBlock);
    })

  }
}


export default ProductsFromCart;