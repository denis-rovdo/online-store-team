import { urlRoute } from '../../../main';
import addHandlersNavigation from '../../../router/addHandlers';
import { Product } from './../../../types/types';
import classes from './Cards.module.sass';

class Cards {
    constructor() {}
    drawCard(data: Product[]) {
        const cards = document.querySelector('.cards');
        // card block
        data.forEach((el) => {
            const card = document.createElement('div');
            card.classList.add(`${classes.card}`);
            card.setAttribute('data-id', `${el.id}`);
            // card title
            const title = `<h2 class="${classes.title}">${el.title}</h2>`;
            // thumbnail
            const thumbnail = `<img class='${classes.image}' src="${el.thumbnail}" alt='Grocery'>`;
            //    price
            const price = `<p class='${classes.price}'>${el.price}</p>`;
            const buttonAdd = `<a  class='${classes.buttonLinkAdd}'  card-id='${el.id}'>
                                        <button class='${classes.btn} forAddCard'>Add</button>
                                </a>`;
            const buttonDetail = ` 
                                <a class='${classes.buttonLinkDetails} ${classes.routingAddEvent}'  href='/product/${el.id}'>
                                    <button class='${classes.btnDetails} forLink' id='${el.id}'>Details</button>
                                </a>
            `;
            const buttonBlock = `<div class='${classes.buttonBlock}'>${buttonAdd}${buttonDetail}</div>`;

            card.innerHTML = thumbnail + title + price + buttonBlock;
            cards?.append(card);
            const addLink = document.querySelector(`${classes.buttonLinkAdd}`);
            addLink?.setAttribute('data-id', `${el.id}`);
        });
    }
    // Накидываем обработчики на кнопки Add, функция принимает функцию из контроллера
    bindAddProduct(handler: (data: number) => void) {
        const cards = document.querySelector('.cards');
        console.log(cards)
        cards?.addEventListener('click', (e) => {
            console.log('Click')
            const target = e.target as Element;
            if (target.className == `${classes.btn}`) {
                const currentID = Number(target.parentElement?.getAttribute('card-id'));
                handler(currentID);
            }
        });
    }
}

export default Cards;
