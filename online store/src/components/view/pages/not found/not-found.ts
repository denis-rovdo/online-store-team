export const notFound = () => {
    const main = document.querySelector('main');
    const container = main?.querySelector('.container');
    container?.replaceChildren();
    const div = document.createElement('div');
    div.innerText = `404 page not found`;
    container?.append(div);
};
