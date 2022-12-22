import { app } from './../main';
import { Routes } from '../types/types';


export const routes: Routes[] = [
    {
        path: /\/404/,
        template: app.notFoundController.startPage,
    },
    {
        path: /^\/cart$/,
        template: app.cartController.startPage,
    },
    {
        path: /^\/product\/.+/,
        template: app.productController.startPage,
    },
    {
        path: /^\/$/,
        template: app.homeController.startPage,
    },
];
