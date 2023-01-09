import Model, { modelSingleton } from './../model/Model';
import CartView from '../view/СartView/CartView';

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
        this.view.products.drawCarts(
            this.model.cart,
            this.model.getTotalSum(),
            this.model.countProductInsideCart.length
        );

        // this.view.products.bindAddAndDeleteProduct(this.handlerAddOrDeleteProduct);
    }

    handlerAddOrDeleteProduct = () =>
        /* id */
        /* status */ {
            /*  if (status === 'add') {
            this.model.addCurrentProductInCart(id);
        }
        if (status === 'delete') {
            this.model.deleteCurrentProductInCart(id);
        } */
            this.view.cart.drawCart(this.model.cart.length + this.model.countProductInsideCart.length);
            this.view.price.drawPrice(this.model.getTotalSum().toString());
            this.view.products.drawCarts(
                this.model.cart,
                this.model.getTotalSum(),
                this.model.countProductInsideCart.length
            );

            //this.view.products.bindAddAndDeleteProduct(this.handlerAddOrDeleteProduct);
        };
}

export default CartController;
