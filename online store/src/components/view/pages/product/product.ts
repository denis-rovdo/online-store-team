import { routes } from '../../../../router/routes';

export const product = () => {
    const url = window.location.pathname.split('/');
    const item = Number(url.at(-1)); // id нашей карточки
    if (item < 0 || item > 100 || url.length > 3) {
        history.pushState({}, '', '/404');
        routes[0].template();
    } else {
        //если все ок то рендер нашей карточки по необходиомму пути
    }
};
