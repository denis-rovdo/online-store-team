import { urlRoute } from '../../../main';
import addHandlersNavigation from '../../../router/addHandlers';
import classes from './cart.module.sass';

class Cart {
    drawCart(count: string) {
        const cart = <HTMLDivElement>document.querySelector('.cart');
        cart.classList.add('cart');
        const cartImg = `
                        <a  href='/cart'>
                            <img class="${classes.cartImg} ${classes.routingAddEvent} forLink" src="https://www.svgrepo.com/show/59506/online-shop-cart.svg" alt="cart">
                        </a>
    `;
        const cartCount = document.createElement('p');
        cartCount.className = `${classes.countProducts}`;
        cartCount.innerText = count;
        cart.innerHTML = cartImg;
        cart.append(cartCount);
        console.log('change')
        const link = document.querySelector('forLink');
        link?.addEventListener('click', (e) => {
            e.preventDefault();
            urlRoute(e, link.id);
        })
    }
}

export default Cart;
