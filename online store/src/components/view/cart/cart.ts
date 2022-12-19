import addHandlersNavigation from '../../../router/addHandlers';
import classes from './cart.module.sass';

class Cart {
    drawCart(count: string) {
        const cart = <HTMLDivElement>document.querySelector('.cart');
        cart.classList.add('cart');
        const cartImg = `
                        <a href='/cart'>
                        <img class="${classes.cartImg}" src="https://www.svgrepo.com/show/59506/online-shop-cart.svg" alt="cart">
                        </a>
    
    `;
        const cartCount = document.createElement('p');
        cartCount.className = `${classes.countProducts}`;
        cartCount.innerText = count;
        cart.innerHTML = cartImg;
        cart.append(cartCount);
        addHandlersNavigation(`.${classes.cartImg}`);
    }
}

export default Cart;
