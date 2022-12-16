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
        this.main = document.createElement('main');
        this.footer = document.createElement('footer');
        this.header.innerHTML = `<div class="container">
    <div class="logo"></div>
    <div class="input">
    </div>
    <div class="total__price">
    </div>
    <div class="basket">
    </div>
</div>`;
        this.main.innerHTML = ` 
    <div class="container">
<div class="category"> 
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
