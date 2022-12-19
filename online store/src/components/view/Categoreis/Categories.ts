import { CategoriesProduct } from '../../../types/types';
import classes from './Categories.module.sass';

class Categories {
    drawCategories(data: CategoriesProduct[]) {
        const category = document.querySelector('.category');
        data.forEach((el) => {
            const categoryBlock = document.createElement('div');
            categoryBlock?.classList.add(`${classes.categoryBlock}`);
            const categoryContent = `
                            <div>
                                <h3 class='${classes.name}'>${el.name}</h3>
                                <img class='${classes.img}' src='${el.img}' alt='vacuum cleaner'>
                            </div>
      `;
            categoryBlock.innerHTML = categoryContent;
            category?.append(categoryBlock);
        });
    }
}

export default Categories;
