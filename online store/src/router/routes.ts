import { description } from './../components/view/Pages/product description/description';
import { Routes } from '../types/types';
import { product } from '../components/view/pages/product/product';
import { notFound } from '../components/view/pages/not found/not-found';
import { description } from '../components/view/pages/product description/description';
import { basket } from '../components/view/pages/basket/basket';


export const routes: Routes[] = [
    {
        path: '/404',
        template: function () {
        },
    },
    {
        path: '/',
        template: product,
    },
    {
        path: '/basket',
        template: function () {
            const main = document.querySelector('main');
            const container = main?.querySelector('.container');
            container?.replaceChildren();
            const div = document.createElement('div');
            div.innerText = `Basket`
            container?.append(div);

        },
    },
    {
        path: '/description',
        description(id) {
            const main = document.querySelector('main');
            const container = main?.querySelector('.container');
            container?.replaceChildren();
            const div = document.createElement('div');
            div.innerText = `CARD + ${id}`
            container?.append(div);
        },
    },
];
