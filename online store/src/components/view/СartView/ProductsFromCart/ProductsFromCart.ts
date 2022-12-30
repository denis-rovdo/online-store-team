import { Product } from './../../../../types/types';
import classes from './ProductsFromCart.module.sass';


class ProductsFromCart {
  drawCarts(data: Product[]) {
    const container = document.querySelector('main .container');
    while (container?.firstChild) {
      container.removeChild(container.firstChild)
    }
    const productInCart = document.createElement('div');
    const productInCartContent = 
    `
    <h2>Products in Cart</h2>
    <div class='cartController'>
      <div class='limit'>
      <input type='number' min='1' max='13'>
      </div>
      <div class='page'>

      </div>
    </div>
    `
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