


class Sort {
  drawSort() {
    const filters = document.querySelector('.filters');
    const sortBlock = document.createElement('div');
    sortBlock.className = 'sortBlock'
    const sortElement =
      `
      <select class='selectSort' name="sorting">
      <option value="" selected="selected" disabled>Default</option>
        <option class='sortElement' value="PriceASC" >Sort by price ASC</option>
        <option class='sortElement' value="PriceDESC">Sort by price DESC</option>
        <option class='sortElement' value="RatingASC">Sort by rating ASC</option>
        <option class='sortElement' value="RatingDESC">Sort by rating DESC</option>
    </select>
      `
    sortBlock.innerHTML = sortElement;
    filters?.append(sortBlock);
  }

  bindSort(handler) {
    // const options = document.querySelectorAll('.sortElement');
    // options.forEach(el => {
    //   el.addEventListener('')
    // })
    const selectBlockBySort = document.querySelector('.selectSort');
    selectBlockBySort?.addEventListener('change', () => {
      handler(selectBlockBySort.value);
    })
  }
}

export default Sort;