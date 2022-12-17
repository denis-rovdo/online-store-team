import { routes } from './routes';

export const urlHandler = () => {
    let url = window.location.pathname;

    if (url.length === 0) {
        url = '/';
    }

    let route: Routes | undefined = routes.find((item) => item.path === url);
    if (!route) {
        route = routes[0].path;
    }
    route.template();
};
