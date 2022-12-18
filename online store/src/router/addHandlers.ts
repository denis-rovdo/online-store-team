import { urlRoute } from './urlRoute';
//экспартировать клас из css и потом вставить в вызов функции

const addHandlersNavigation = (className: string) => {
    const name = document.querySelectorAll(className);

    name.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            urlRoute(e);
        });
    });
};

addHandlersNavigation(''); //вызвать с необходимым классом
