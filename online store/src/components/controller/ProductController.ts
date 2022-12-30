import { modelSingleton } from './../model/Model';
import Model from "../model/Model";
import ProductView from "../view/ProductView/ProductView";
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
    this.view.drawPrice(this.model.getTotalSum().toString());
    this.model.findProductById(id);
    this.view.drawProduct(this.model.data[0]);
    this.view.cart.drawCart(this.model.cart.length);

    this.view.bindAddProduct(this.handleAddProduct);
    // const anchors = document.querySelectorAll('.forLink');
    // anchors.forEach(anchor => {
    //     anchor.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         urlRoute(e, anchor.id);
    //     })
    // })


  }

  handleAddProduct = (id: number, parameter: string) => {
    if (parameter === 'Add') {
      this.model.addProduct(id);
      this.view.cart.drawCart(this.model.cart.length);
      this.view.drawPrice(this.model.getTotalSum().toString());
      this.view.drawProduct(this.model.data[0]);
      this.view.bindAddProduct(this.handleAddProduct);
    }
    if (parameter === 'Delete') {
      this.model.deleteProduct(id);
      this.view.cart.drawCart(this.model.cart.length);
      this.view.drawPrice(this.model.getTotalSum().toString());
      this.view.drawProduct(this.model.data[0]);
      this.view.bindAddProduct(this.handleAddProduct);
    }
  };

}

export default ProductController;