class Price {
    drawPrice(data: string) {
        const priceElement = document.querySelector('.total__price');
        const countPrice = `<span>${data}</span>`;
        if (priceElement) priceElement.innerHTML = countPrice;
    }
}

export default Price;
