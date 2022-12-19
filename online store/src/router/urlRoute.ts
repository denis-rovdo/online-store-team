import { urlHandler } from './urlHandler';

export const urlRoute = (event: Event): void => {
    event = event || window.event;
    event.preventDefault();
    const target = <HTMLAnchorElement>event.target;
    if (target) {
        window.history.pushState({}, '', target.href);
        urlHandler();
    }
};
