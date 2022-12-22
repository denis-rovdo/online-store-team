import Model, { modelSingleton } from './../model/Model';
import CartView from "../view/CartView";


class CartController {
  view: CartView;
  model: Model;
  constructor(view: CartView) {
    this.view = view;
    this.model = modelSingleton;
  }
  startPage() {
    this.view.drawCart(this.model.cart);
  }
}

export default CartController;