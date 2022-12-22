import { modelSingleton } from './../model/Model';
import AppController from "../controller/AppController";
import CartController from "../controller/CartController";
import NotFoundController from "../controller/NotFoundController";
import ProductController from "../controller/ProductController";
import Model from "../model/Model";
import AppView from "../view/AppView";



class App {
  homeController: AppController;
  cartController: CartController;
  productController: ProductController;
  notFoundController: NotFoundController;
  constructor(homeController: AppController, cartController: CartController, productController: ProductController, notFoundController: NotFoundController) {
    this.homeController = homeController;
    this.cartController = cartController;
    this.productController = productController;
    this.notFoundController = notFoundController;
  }
}

export default App;