import { modelSingleton } from './../model/Model';
import Model from "../model/Model";
import ProductView from "../view/ProductView";


class ProductController {
  view: ProductView;
  model: Model;
  constructor() {
    this.view = new ProductView();
    this.model = modelSingleton;
  }
  startPage(id) {
    this.view.drawProduct(this.model.data[id]);
  }
}

export default ProductController;