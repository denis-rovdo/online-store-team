import { routes } from '../../../../router/routes';

export const product = () => {
    const url = window.location.pathname.split('/');
    const id = Number(url.at(-1)); // id нашей карточки
    if (id < 0 || id > 100 || url.length > 3 || Number.isNaN(id)) {
        routes[0].template();
    } else {
        //если все ок то рендер нашей карточки по необходиомму пути
        const main = document.querySelector('main');
        const container = main?.querySelector('.container');
        container?.replaceChildren();
        const div = document.createElement('div');
        div.innerText = `CARD + ${id}`
        container?.append(div);
    }
};
