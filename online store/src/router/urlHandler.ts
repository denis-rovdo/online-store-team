import { description } from './../components/view/Pages/product description/description';
import { routes } from './routes';
import { Routes } from '../types/types';


export const urlHandler = () => {
    let url = window.location.pathname;
    let newUrl = url.split('/');

    let id = newUrl.at(-1);
    newUrl = '/' + newUrl.at(-2);
    
    if (newUrl !== '/description') {
        newUrl = '/' + id;
    }


    if (newUrl.length === 0) {
        newUrl = '/';
    }

    let route: Routes | undefined = routes.find((item) => item.path === newUrl);
    if (!route) {
        route != routes[0].path;
    }
    if (route.path === '/description') {
        console.log(id);
        route?.description(id);
    };
    console.log(route);
    route!.template!();
};
