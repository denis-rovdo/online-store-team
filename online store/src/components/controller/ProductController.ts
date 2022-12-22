import ProductView from "../view/ProductView";


class ProductController {
  view: ProductView;
  constructor() {
    this.view = new ProductView();
  }
  startPage() {
    this.view.drawProduct();
  }
}

export default ProductController;