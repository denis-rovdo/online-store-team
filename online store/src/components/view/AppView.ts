import Cards from "./Card/Cards";
class AppView {
  card: Cards;
  content: HTMLDivElement;
  constructor() {
    const app = document.querySelector('#app');
    this.content = document.createElement('div');
    this.content.classList.add('content')
    app?.append(this.content);

    this.card = new Cards();
  }

}

export default AppView;