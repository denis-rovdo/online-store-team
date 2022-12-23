

class ProductView {
  drawProduct(id:  number) {
    const container = document.querySelector('main .container');
    while (container?.firstChild) {
      container.removeChild(container.firstChild)
    }
    console.log(id);
  }
}

export default ProductView;