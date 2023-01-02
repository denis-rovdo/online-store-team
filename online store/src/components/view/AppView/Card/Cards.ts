import { hungRouteListeners, urlRoute } from '../../../../main';
import addHandlersNavigation from '../../../../router/addHandlers';
import { Product } from '../../../../types/types';
import classes from './Cards.module.sass';

class Cards {
    constructor() { }
    drawCard(data: Product[]) {
        const cards = document.querySelector('.cards');
        while (cards?.firstChild) {
            cards.removeChild(cards.firstChild);
        }
        if (data.length === 0) {
            const paragraph = document.createElement('p');
            const paragraphContent = 'Товаров не найдено';
            paragraph.innerHTML = paragraphContent;
            cards?.append(paragraph);
        }
        // card block
        data.forEach((el) => {
            let checked = 'Add'
            if (el.checking) {
                checked = 'Delete'
            }
            const card = document.createElement('div');
            card.classList.add(`${classes.card}`);
            card.setAttribute('data-id', `${el.id}`);
            // card title
            const title = `<h2 class="${classes.title}">${el.title}</h2>`;
            // thumbnail
            const thumbnail = `<img class='${classes.image}' src="${el.thumbnail}" alt='Grocery'>`;
            //    price
            const description = `<div>
                                    <p class='${classes.text}'>Category: ${el.category}</p>
                                    <p class='${classes.text}'>Brand: ${el.brand}</p> 
                                    <p class='${classes.text}'>Price: ${el.price}</p>
                                    <p class='${classes.text}'>Discount: ${el.discountPercentage}%</p>
                                    <p class='${classes.text}'>Rating: ${el.rating}</p>
                                    <p class='${classes.text}'>Stock: ${el.stock}</p>  
                                </div>`;
           
            const buttonAdd = `<a  class='${classes.buttonLinkAdd}'  card-id='${el.id}'>
                                        <button class='${classes.btn} forAddCard' >${checked}</button>
                                </a>`;
            const buttonDetail = ` 
                                <a class='${classes.buttonLinkDetails} ${classes.routingAddEvent}'  href='/product/${el.id}'>
                                    <button class='${classes.btn} forLink detailButton' id='${el.id}'>Details</button>
                                </a>
            `;
            const buttonBlock = `<div class='${classes.buttonBlock}'>${buttonAdd}${buttonDetail}</div>`;

            card.innerHTML = thumbnail + title + description + buttonBlock;
            cards?.append(card);
            const addLink = document.querySelector(`${classes.buttonLinkAdd}`);
            addLink?.setAttribute('data-id', `${el.id}`);
        });
        hungRouteListeners('detailButton');
    }
    // Накидываем обработчики на кнопки Add, функция принимает функцию из контроллера
    bindAddProduct(handler: (data: number, parameter: string) => void) {
        const cards = document.querySelector('.cards');
        cards?.addEventListener('click', (e) => {
            const target = e.target as Element;
            if (target.textContent === 'Delete') {
                const currentContent = target.textContent;
                target.textContent = 'Add';
                const currentID = Number(target.parentElement?.getAttribute('card-id'));
                handler(currentID, currentContent);
            } else if (target.textContent === 'Add') {
                const currentContent = target.textContent;
                target.textContent = 'Delete';
                const currentID = Number(target.parentElement?.getAttribute('card-id'));
                handler(currentID, currentContent);
            }
        });
    }
}
// target.className == `${classes.btn} forAddCard`

export default Cards;
