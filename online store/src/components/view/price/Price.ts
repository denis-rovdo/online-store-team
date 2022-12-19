import classes from './Price.module.sass';

class Price {
    drawPrice(data: string) {
        const priceElement = document.querySelector('.total__price');
        const countPrice = `<span>${data}</span>`;
        priceElement!.innerHTML = countPrice;
    }
}

export default Price;
