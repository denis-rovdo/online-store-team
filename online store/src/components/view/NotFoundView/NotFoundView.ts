import PageView from "../Pages/MainComponent/PageView";


class NotFoundView {
  mainPage: PageView;
  constructor() {
    this.mainPage = new PageView();
  }
  drawNotFound() {
    const main = document.querySelector('main');
    const container = main?.querySelector('.container');
    container?.replaceChildren();
    const div = document.createElement('div');
    // div.className = classes.not_found_container;
    container?.append(div);
    const h1 = document.createElement('h1');
    // h1.className = classes.not_found;
    h1.innerText = 'PAGE NOT FOUND (404)';
    div.append(h1);
  }
}

export default NotFoundView;