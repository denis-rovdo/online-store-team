import { modelSingleton } from './../model/Model';
import Model from "../model/Model";
import ProductView from "../view/ProductView";
import { urlRoute } from '../../main';


class ProductController {
  view: ProductView;
  model: Model;
  constructor() {
    this.view = new ProductView();
    this.model = modelSingleton;
  }
  startPage(id: number) {
    this.view.mainPage.drawLogo();
    this.model.findProductById(id);
    this.view.drawProduct(this.model.data[0]);
    this.view.cart.drawCart(this.model.cart.length);
    // const anchors = document.querySelectorAll('.forLink');
    // anchors.forEach(anchor => {
    //     anchor.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         urlRoute(e, anchor.id);
    //     })
    // })


  }
}

export default ProductController;