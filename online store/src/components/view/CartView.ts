

class CartView {
  drawCart(data) {
    const container = document.querySelector('main .container');
    const cards = document.querySelector('.cards');
    const category = document.querySelector('.category');
    const cartContainer = document.createElement('div');
    const cartContent = document.createElement('p');
    cartContent.innerText = `Length ${data.length}`;
    if (cartContainer) cartContainer.remove();
    // cartContainer.innerHTML = `CART`
    while (cards?.firstChild) {
      cards.removeChild(cards.firstChild);
    }
    // while (container?.firstChild) {
    //   container.removeChild(container.firstChild);
    // }
    while (category?.firstChild) {
      category.removeChild(category.firstChild);
    }
    cartContainer.append(cartContent);
    container?.append(cartContainer);
    console.log(`Page Cart`)
  }

}

export default CartView;