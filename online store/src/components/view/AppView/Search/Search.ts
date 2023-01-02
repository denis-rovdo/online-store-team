import classes from './Search.module.sass';

class Search {
    drawSearch(value: string) {
        const categoryContainer = document.querySelector('.category');
        const inputBlock = document.createElement('div');
        inputBlock.className = 'inputBlock'
        const input = document.createElement('input');
        input.classList.add('inputText');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Search product');
        input.value = value;
        inputBlock?.append(input);
        categoryContainer!.prepend(inputBlock);
    }

    bindSearchProduct(handler: (data: string) => void) {
        const input: HTMLInputElement | null = document.querySelector('.inputText');
        input?.focus();
        input?.addEventListener('input', () => {
            const value = input.value
            handler(value);
        });
    }
}

export default Search;
