import { Product } from './../../../types/types';
import classes from './Cards.module.sass'

class Cards {
    drawCard(data: Product[]) {
        const content = document.querySelector('.content');
        // card block
        data.forEach(el => {
            const card = document.createElement('div');
            card.classList.add(`${classes.card}`)
            // card title
            const title = `<h2 class="${classes.title}">${el.title}</h2>`
            // thumbnail
            const thumbnail = `<img class='${classes.image}' src="${el.thumbnail}" alt='Grocery'>`
            //    price
            const price = `<p class='${classes.price}'>${el.price}</p>`
            card.innerHTML = title + thumbnail + price;
            content?.append(card);
        });

    }

}

export default Cards;
