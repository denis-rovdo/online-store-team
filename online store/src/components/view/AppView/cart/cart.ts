import { hungRouteListeners, urlRoute } from '../../../../main';
import classes from './cart.module.sass';

class Cart {
    drawCart(count: string | number) {
        const cart = <HTMLDivElement>document.querySelector('.cart');
        cart.classList.add('cart');
        while (cart.firstChild) {
            cart.removeChild(cart.firstChild);
        }
        const cartImg = `
                        <a  href='/cart'>
                            <img class="${classes.cartImg} ${classes.routingAddEvent} forLink cartRouting" src="https://www.svgrepo.com/show/59506/online-shop-cart.svg" alt="cart">
                        </a>
    `;
        const cartCount = document.createElement('p');
        cartCount.className = `${classes.countProducts}`;
        cartCount.innerText = count as string;
        cart.innerHTML = cartImg;
        cart.append(cartCount);
        hungRouteListeners('cartRouting');
    }
}
export default Cart;
