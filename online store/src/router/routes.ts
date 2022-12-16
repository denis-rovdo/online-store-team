import { Routes } from '../types/types';
import { product } from '../components/view/pages/product/product';
import { notFound } from '../components/view/pages/not found/not-found';
import { description } from '../components/view/pages/product description/description';
import { basket } from '../components/view/pages/basket/basket';

export const routes: Routes[] = [
    {
        path: '/404',
        template: notFound,
    },
    {
        path: '/',
        template: product,
    },
    {
        path: '/basket',
        template: basket,
    },
    {
        path: '/description',
        template: description,
    },
];
