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
    this.view.drawProduct(this.model.data[id]);


    const anchors = document.querySelectorAll('.forLink');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            urlRoute(e, anchor.id);
        })
    })

    console.log('PRODUCT PAGE')

  }
}

export default ProductController;