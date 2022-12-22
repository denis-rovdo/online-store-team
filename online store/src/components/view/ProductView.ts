

class ProductView {
  drawProduct() {
    const container = document.querySelector('main .container');
    while (container?.firstChild) {
      container.removeChild(container.firstChild)
    }
    alert('PRODUCT');
  }
}

export default ProductView;