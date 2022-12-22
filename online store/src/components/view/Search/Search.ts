import classes from './Search.module.sass';

class Search {
    inputBlock: HTMLInputElement | null;
    input: HTMLInputElement;
    constructor() {
        this.categoryContainer = document.querySelector('.category');
        this.inputBlock = document.createElement('div');
        this.inputBlock.className = 'input'
        this.input = document.createElement('input');
        this.input.setAttribute('type', 'text');
        this.input.setAttribute('placeholder', 'Search product');
        this.inputBlock?.append(this.input);
        this.categoryContainer.append(this.inputBlock);
    }
    get _inputText() {
        return this.input.value.toLowerCase();
    }
    bindSearchProduct(handler: (data: string) => void) {
        this.input.addEventListener('input', () => {
            handler(this._inputText);
        });
    }
}

export default Search;
