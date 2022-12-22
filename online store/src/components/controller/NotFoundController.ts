import NotFoundView from "../view/NotFoundView";


class NotFoundController {
  view: NotFoundView;
  constructor() {
    this.view = new NotFoundView();
  }
  startPage() {
    this.view.drawNotFound();
  }
}

export default NotFoundController;