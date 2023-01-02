class CountProducts {
    drawCount(value: number) {
        const typeCardsBlock = document.querySelector('.type__cards');
        while (typeCardsBlock?.firstChild) {
            typeCardsBlock.removeChild(typeCardsBlock.firstChild);
        }
        const countProductsBlock = document.createElement('div');
        const countProductsContent = `
    Stock: ${value}
    `;
        countProductsBlock.innerHTML = countProductsContent;
        typeCardsBlock?.append(countProductsBlock);
    }
}

export default CountProducts;
