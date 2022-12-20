import { routes } from './routes';
import { Routes } from '../types/types';

export const urlHandler = () => {
    let url = window.location.pathname;

    if (url.length === 0) {
        url = '/';
    }

    const route: Routes | undefined = routes.find((r) => r.path.test(url));
    if (!route) {
        route != routes[0].path;
    }
    if (route) route.template();
};
window.addEventListener(`load`, urlHandler); // проверка пути при загрузке станицы нужно вынести куда-то повыше 
