import { Category } from './../../../types/types';
import { CategoriesProduct } from '../../../types/types';
import classes from './Categories.module.sass';

class Categories {
    drawCategories(data: CategoriesProduct[]) {
        const category = document.querySelector('.category');
        data.forEach((el) => {
            const categoryBlock = document.createElement('div');
            categoryBlock?.classList.add(`${classes.categoryBlock}`);
            categoryBlock.setAttribute('data', el.category);
            const categoryContent = `
                                      <h3 class='${classes.name}'>${el.name}</h3>
                                      <img class='${classes.img}' src='${el.img}' alt='vacuum cleaner'>
                                    `;
            categoryBlock.innerHTML = categoryContent;
            category?.append(categoryBlock);
        });
    }

    bindAddCategory(handler: (data: string | null | undefined) => void) {
        const category = document.querySelector('.category');
        category?.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target as Element;
            if (target.closest(`.${classes.categoryBlock}`)) {
                let categoryData: HTMLDivElement | null = target.closest(`.${classes.categoryBlock}`);
                if (!categoryData?.classList.contains(`${classes.active}`)) {
                    categoryData?.classList.add(`${classes.active}`);
                    let categoryAttribute = categoryData?.getAttribute('data');
                    handler(categoryAttribute);
                } else {
                    categoryData?.classList.remove(`${classes.active}`);
                }
            }
        })
    }
}

export default Categories;
