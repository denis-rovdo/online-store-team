import classes from './Search.module.sass'

class Search {
  constructor() {
    this.inputBlock = document.querySelector('.input');
    this.input = document.createElement('input');
    this.input.setAttribute('type', 'text');
    this.input.setAttribute('placeholder', 'Search product')
    this.inputBlock.append(this.input);
  }
  get _inputText() {
    return this.input.value.toLowerCase();
  }
  bindSearchProduct(handler) {
    this.input.addEventListener('input', () => {
      handler(this._inputText)
    })

  }
}


export default Search;