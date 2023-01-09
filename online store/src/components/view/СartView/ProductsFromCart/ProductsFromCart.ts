import { CreateModal } from '../../modal/modal';
import { Product } from './../../../../types/types';
import classes from './ProductsFromCart.module.sass';

class ProductsFromCart {
    modal: CreateModal;
    constructor() {
        this.modal = new CreateModal();
    }
    drawCarts(data: Product[], totalSum: number, currentCountProducts: number) {
        console.log(currentCountProducts);
        const container = document.querySelector('main .container');
        while (container?.firstChild) {
            container.removeChild(container.firstChild);
        }
        if (data.length === 0) {
            const notFoundProduct = document.createElement('div');
            notFoundProduct.style.textAlign = 'center';
            notFoundProduct.style.textTransform = 'uppercase';

            const notFoundProductContent = `Cart is Empty`;
            notFoundProduct.innerHTML = notFoundProductContent;
            container?.append(notFoundProduct);
        }
        if (data.length !== 0) {
            // основной контейнер
            const mainCartContainer = document.createElement('div');
            mainCartContainer.className = `${classes.mainCartContainer}`
            // mainCartContainer.style.width = '95%';
            // mainCartContainer.style.display = 'flex';
            // mainCartContainer.style.justifyContent = 'space-between';
            // верхний блок с контроллером лимита и страницами
            const productInCart = document.createElement('div');
            productInCart.className = `${classes.productInCart}`;
            const productInCartContent = `
      <div class='${classes.titleAndPageControl}'>
          <h2 style='font-size: 130%'>Products in Cart</h2>
          <div class='${classes.cartController}'>
              <div class='${classes.limit}'>
                  Limit:
                  <input type='number' min='1' max='13' class='${classes.limitInput}'>
              </div>
              <div class='page' style='margin-left:20px'>
                  Page:
                  <button class='${classes.pageButton} '> < </button>
                  <span style='font-size: 140%;margin: 0 0.5rem;'> 1 </span>
                  <button class='${classes.pageButton}'> > </button>
              </div>
          </div>
      </div>
      `;
            productInCart.innerHTML = productInCartContent;
            // Сами карточки товаров в корзине
            const prodItem = document.createElement('div');
            prodItem.className = 'prod-item';
            data.forEach((el, id) => {
                const cartBlock = document.createElement('div');
                cartBlock.className = `${classes.cartBlock}`;

                const cartContent = `
        <div class='${classes.itemI}' >${id + 1}</div>
        <div class='${classes.itemInfo}'>
            <div class='${classes.imgBlock}'>
                <img class='${classes.imgThumbnail}' src='${el.thumbnail}' alt='photoProduct' >
            </div>
            <div class='${classes.itemDetail}'>
                <div class='${classes.productTitle}'> 
                    <h3 style='color:blue'>${el.title}</h3>
                </div>
                <div class='${classes.productDescription}'>
                    ${el.description}
                </div>
                <div class='${classes.productOther}' >
                    <div>Rating: ${el.rating}</div>
                    <div>Discount: ${el.discountPercentage}</div>
                </div>
            </div>
        </div>
        <div class='${classes.numberControl}'>
            <div class='${classes.stockControl}'>Stock: ${el.stock}</div>
            <div class='${classes.icDecControl}' data-id='${el.id}'>
                <button class='${classes.icDecButton} buttonPlus'> + </button> <span>1</span> <button class='${classes.icDecButton
                    }  buttonMinus'> - </button>
            </div>
            <div class='${classes.amountCount}'>${el.price}</div>
        </div>
        `;

                cartBlock.innerHTML = cartContent;
                prodItem.append(cartBlock);
            });

            productInCart.append(prodItem);
            // Правая панель для покупки и скидок
            const totalCart = document.createElement('div');
            totalCart.className = `${classes.totalCart}`;
            const totalCartContent = `
      <h2 class='${classes.totalCartTitle}'>Summary</h2>
      <div class='${classes.countProducts}'>
          <span>Products: ${data.length + currentCountProducts}</span>
      </div>
      <div class='${classes.totalPrice}'>
        <span>Total: ${totalSum}</span>
      </div>
      <div class='${classes.promoCodeSearch}'>
        <input type='search' placeholder='Enter promo code' class='${classes.promoCodeInput}' >
      </div>
      <span class='${classes.promoCodeTestText}'>Promo for test: 'RS', 'EPM'</span>
      <button id='buy' class='${classes.buyButton}'>BUY NOW</button>
      `;

            totalCart.innerHTML = totalCartContent;
            mainCartContainer.append(productInCart);
            mainCartContainer.append(totalCart);
            container?.append(mainCartContainer);
        }
    }
    /* bindAddAndDeleteProduct(handler) {
        const buttonController = document.querySelectorAll(`.${classes.icDecControl}`);
        buttonController.forEach((el) => {
            el.addEventListener('click', (e) => {
                const target = e.target as Element;
                if (target.className === `${classes.icDecButton} buttonPlus`) {
                    const status = 'add';
                    const id = target.parentElement?.getAttribute('data-id');
                    handler(id, status);
                }
                if (target.className === `${classes.icDecButton}  buttonMinus`) {
                    const status = 'delete';
                    const id = target.parentElement?.getAttribute('data-id');
                    handler(id, status);
                }
            });
        });
    } */

    drawModal = () => {
        this.modal.createLayout();
        this.modal.addListenersForInput();
        console.log('draw');
    };
}

export default ProductsFromCart;

const modalWork = new CreateModal();
export const addListeners = () => {
    window.addEventListener('click', (e) => {
        const target = e.target as Element;
        if (target?.id === 'buy') {
            modalWork.createLayout();
            modalWork.addListenersForInput();
        }
        if (target?.id === 'buyProduct') {
            modalWork.createLayout();
            modalWork.addListenersForInput();
        }
    });
};
