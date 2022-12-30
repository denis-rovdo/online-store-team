import { Product } from "../../../types/types";
import Cart from "../AppView/cart/cart";
import PageView from "../Pages/MainComponent/PageView";
import classes from './ProductView.module.sass'

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

    let checked = 'Add'
    if (product.checking) {
      checked = 'Delete'
    }
    const productMap = document.createElement('div');
    productMap.className = 'productMap';
    const productMapContent =
      `
    <span>STORE</span>
    <span>>></span>
    <span>${product.category.toUpperCase()}</span>
    <span>>></span>
    <span>${product.brand.toUpperCase()}</span>
    <span>>></span>
    <span>${product.title.toUpperCase()}</span>
    `
    productMap.innerHTML = productMapContent;

    let srcImages = '';
    product.images.forEach(el => {
      srcImages += `<img class='${classes.srcImages}' src='${el}' alt='img'>`
    })

    const productBlock = document.createElement('div');
    productBlock.className = classes.productBlock;


    const productElement =
      `
      ${productMapContent}
<div class='${classes.containerForBlock}'>
  <h3 class='${classes.productTitle}'>${product.title}</h3>
    <div class='${classes.infoBlock}'>
      <div class='${classes.imagesBlock}'>
        <div class='${classes.slides}'>
          ${srcImages}
          <img class='${classes.srcImages}' src='${product.thumbnail}' alt='product'>
        </div>
        <div class='${classes.thumbnail}'>
          <img class='${classes.thumbnailImg}' src='${product.thumbnail}' alt='product'>
        </div>
     </div>

     <div class='${classes.optionsBlock}'>
        <div class='${classes.productOption}'>
        <h3>Description:</h3>
        <p>${product.description}</p>
     </div>

     <div class='${classes.productOption}'>
       <h3>Discount Percentage:</h3>
       <p>${product.discountPercentage}</p>
     </div>

     <div class='${classes.productOption}'>
       <h3>Rating:</h3>
       <p>${product.rating}</p>
     </div>
    
     <div class='${classes.productOption}'>
       <h3>Stock:</h3>
       <p>${product.stock}</p>
     </div>

     <div class='${classes.productOption}'>
       <h3>Brand:</h3>
       <p>${product.brand}</p>
     </div>

     <div class='${classes.productOption}'>
       <h3>Category:</h3>
       <p>${product.category}</p>
     </div>
   </div>

  <div class='${classes.controllerBlock}' >
    <div class='${classes.controllerBlockContent}'>
      <p>${product.price}р.</p>
        <a  class='${classes.buttonLinkAdd}'  card-id='${product.id}'>
          <button class='${classes.btn} forAddCard' >${checked}</button>
        </a>
        <a  class='${classes.buttonLinkBuy}'  card-id='${product.id}'>
          <button class='${classes.btn} forAddCard' >Buy</button>
        </a>
      </div>
    </div>
  <div>
</div>
    `
    productBlock.innerHTML = productElement;
    container?.append(productBlock);
  }
  
  drawPrice(data: string) {
    const priceElement = document.querySelector('.total__price');
    const countPrice = `<span>${data}</span>`;
    if (priceElement) priceElement.innerHTML = countPrice;
  }
  bindAddProduct(handler: (data: number, parameter: string) => void) {
    const cards = document.querySelector(`.${classes.controllerBlockContent}`);
    cards?.addEventListener('click', (e) => {
      const target = e.target as Element;
      if (target.textContent === 'Delete') {
        const currentContent = target.textContent;
        target.textContent = 'Add';
        const currentID = Number(target.parentElement?.getAttribute('card-id'));
        handler(currentID, currentContent);
      } else if (target.textContent === 'Add') {
        const currentContent = target.textContent;
        target.textContent = 'Delete';
        const currentID = Number(target.parentElement?.getAttribute('card-id'));
        handler(currentID, currentContent);
      }
    });
  }
}

export default ProductView;