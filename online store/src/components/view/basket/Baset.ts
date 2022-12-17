import classes from './Basket.module.sass'

class Basket {

  drawBasket(count: string) {
    const basket = <HTMLDivElement>document.querySelector('.basket');
    const basketImg = `
    <img class="${classes.basketImg}" src="https://www.svgrepo.com/show/59506/online-shop-cart.svg" alt="basket">
    `
    const basketCount = document.createElement('p');
    basketCount.className = `${classes.countProducts}`;
    basketCount.innerText = count;
    basket.innerHTML = basketImg;
    basket.append(basketCount);
  }
}

export default Basket;