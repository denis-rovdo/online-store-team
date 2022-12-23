import NotFoundView from "../view/NotFoundView";


class NotFoundController {
  view: NotFoundView;
  constructor() {
    this.view = new NotFoundView();
  }
  startPage() {
    this.view.drawNotFound();

    console.log('NOT FOUND PAGE')

  }
}

export default NotFoundController;