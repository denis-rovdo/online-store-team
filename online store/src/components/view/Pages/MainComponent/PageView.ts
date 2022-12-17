
class PageView {
    body: HTMLBodyElement;
    app: HTMLDivElement;
    header: HTMLHeadElement | string;
    main: HTMLHeadElement | string;
    footer: HTMLHeadElement | string;
    constructor() {
        this.body = <HTMLBodyElement>document.querySelector('body');
        this.app = <HTMLDivElement>document.querySelector('#app');
        this.header = document.createElement('header');
        this.header.classList.add('header')
        this.main = document.createElement('main');
        this.footer = document.createElement('footer');
        this.header.innerHTML = `<div class="container">
    <div class="logo">
    <a href="/">
    <img class='header__img' src="https://avatars.mds.yandex.net/i?id=f3f1bbeca8b5022d0770b3a81b8b558fa11b885e-7092330-images-thumbs&n=13" alt="logo">
    </a>
    </div>
    <div class="total__price">
    <p class="total__price">0</p>
    </div>
    <div class="basket">
    </div>
</div>`;
        this.main.innerHTML = ` 
    <div class="container">
<div class="category"> 
<div class="input">
<input type='text'>
</div>
</div>
<div class="content__block">
    <div class="filters">
    </div>
    <div class="content">
        <div class="type__cards">
        </div>
        <div class="cards">
        </div>
    </div>
</div>
</div>`;
        this.footer.innerHTML = `<div class="container"></div>`;
        this.app.append(this.header, this.main, this.footer);
    }
}

export default PageView;
