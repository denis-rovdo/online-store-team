import { urlHandler } from './urlHandler';

export const urlRoute = (event: Event): void => {
    event = event || window.event;
    event.preventDefault();
    const target = <HTMLElement>event.target;
    const element = <HTMLAnchorElement>target.parentElement;

    if (element){
        window.history.pushState({}, '', element.href);
        urlHandler();
    } 
};
