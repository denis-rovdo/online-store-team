import { Routes } from '../types/types';
import { home } from '../components/view/pages/home/home';
import { notFound } from '../components/view/pages/not found/not-found';
import { product } from '../components/view/pages/product/product';
import { cart } from '../components/view/pages/cart/cart';

export const routes: Routes[] = [
    {
        path: /\/404/,
        template: notFound,
    },
    {
        path: /\/cart/,
        template: cart,
    },
    {
        path: /\/product\/.+/,
        template: product,
    },
    {
        path: /\/$/,
        template: home,
    },
];
