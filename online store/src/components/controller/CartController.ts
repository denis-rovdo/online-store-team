import Model, { modelSingleton } from './../model/Model';
import CartView from "../view/СartView/CartView";
import { urlRoute } from '../../main';
import Cart from '../view/AppView/cart/cart';


class CartController {
  view: CartView;
  model: Model;
  constructor(view: CartView) {
    this.view = view;
    this.model = modelSingleton;
  }
  startPage() {
    this.view.mainPage.drawLogo();
    this.view.cart.drawCart(this.model.cart.length);
    this.view.products.drawCarts(this.model.cart);





    
    const anchors = document.querySelectorAll('.forLink');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        urlRoute(e, anchor.id);
      })
    })
  }
}

export default CartController;