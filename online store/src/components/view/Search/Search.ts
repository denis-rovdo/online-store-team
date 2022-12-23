import classes from './Search.module.sass';

class Search {
    // inputBlock: HTMLInputElement | null;
    // input: HTMLInputElement;
    // categoryContainer: HTMLDivElement | null;
    // inputBlock: DocumentFragment | null
    // constructor() {
    //     this.categoryContainer = document.querySelector('.category');
    //     this.inputBlock = document.createElement('div');
    //     this.inputBlock.className = 'input'
    //     this.input = document.createElement('input');
    //     this.input.setAttribute('type', 'text');
    //     this.input.setAttribute('placeholder', 'Search product');
    //     this.inputBlock?.append(this.input);
    //     this.categoryContainer!.append(this.inputBlock);
    // }
    // get _inputText() {
    //     return this.input.value.toLowerCase();
    // }
    drawSearch() {
        const categoryContainer = document.querySelector('.category');
        const inputBlock = document.createElement('div');
        inputBlock.className = 'input'
        const input = document.createElement('input');
        input.classList.add('inputText');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Search product');
        inputBlock?.append(input);
        categoryContainer!.prepend(inputBlock);
    }


    bindSearchProduct(handler: (data: string) => void) {
        const input: HTMLInputElement | null = document.querySelector('.inputText');
        input?.addEventListener('input', () => {
            const value = input.value
            handler(value);
        });
    }
}

export default Search;
