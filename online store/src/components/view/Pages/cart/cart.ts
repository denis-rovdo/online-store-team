export const cart = () => {
    //рендер карзины (basket старое название)
    const main = document.querySelector('main');
    const container = main?.querySelector('.container');
    container?.replaceChildren();
    const div = document.createElement('div');
    div.innerText = `cart помойка`
    container?.append(div);
};
