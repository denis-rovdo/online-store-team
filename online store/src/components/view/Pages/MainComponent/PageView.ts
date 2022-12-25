import { hungRouteListeners } from '../../../../main';
import classes from './PageView.module.sass';

class PageView {
    body: HTMLBodyElement;
    app: HTMLDivElement;
    header: HTMLHeadElement | string;
    main: HTMLHeadElement | string;
    footer: HTMLHeadElement | string;
    constructor() {
        const app = document.querySelector('#app');
        while (app?.firstChild) {
            app.removeChild(app.firstChild);
        }
        this.body = <HTMLBodyElement>document.querySelector('body');
        this.app = <HTMLDivElement>document.querySelector('#app');
        this.header = document.createElement('header');
        this.header.classList.add('header');
        this.main = document.createElement('main');
        this.footer = document.createElement('footer');
        this.header.innerHTML = `<div class="container">
                                    <div class="logo">
                                    </div>
                                    <div class="total__price">
                                        <p class="total__price"></p>
                                    </div>
                                    <div class="cart"></div>
                                </div>`;
        this.main.innerHTML = `
                            <div class="container">
                                <div class="category">
                                </div>
                                <div class="content__block">
                                    <div class="filters"></div>
                                    <div class="content">
                                        <div class="type__cards"></div>
                                        <div div class="cards"></div>
                                    </div>
                                </div>
                            </div>`;
        this.footer.innerHTML = `<div class="container"></div>`;
        this.app.append(this.header, this.main, this.footer);
        // logo.removeEventListener('click', (e) => {
        //     urlRoute(e, '');
        // })

    }
    drawLogo() {
        const main = document.querySelector('main .container');
        main!.innerHTML = `
                                <div class="category">
                                </div>
                                <div class="content__block">
                                    <div class="filters"></div>
                                    <div class="content">
                                        <div class="type__cards"></div>
                                        <div div class="cards"></div>
                                    </div>
                                </div>
                           
        `
        const header = document.querySelector('header .container');
        const logoBlock = document.createElement('div');
        const checkLogoBlock = document.querySelector('.logo');
        if (checkLogoBlock) checkLogoBlock.remove()
        logoBlock.className = 'logo'
        const logoContent =
            `
        <a class='${classes.routingAddEvent}' href="/">
                <img class='header__img forLink logoRouting' src="https://avatars.mds.yandex.net/i?id=f3f1bbeca8b5022d0770b3a81b8b558fa11b885e-7092330-images-thumbs&n=13" alt="logo">
         </a>
        `
        logoBlock.innerHTML = logoContent;

        const cartBlock = document.querySelector('.cart');
        while (cartBlock?.firstChild) {
            cartBlock.removeChild(cartBlock.firstChild);
        }
        header?.prepend(logoBlock);
        hungRouteListeners('logoRouting');
    }
}

export default PageView;
