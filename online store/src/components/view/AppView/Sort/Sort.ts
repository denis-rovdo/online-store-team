class Sort {
    drawSort(currentSort: string) {
        let defaultValue;
        let currentPriceASC = '';
        let currentPriceDESC = '';
        let currentRatingASC = '';
        let currentRatingDESC = '';
        if (currentSort === '') {
            defaultValue = 'selected="selected"';
        }
        if (currentSort === 'PriceASC') {
            currentPriceASC = 'selected="selected"';
        }
        if (currentSort === 'PriceDESC') {
            currentPriceDESC = 'selected="selected"';
        }
        if (currentSort === 'RatingASC') {
            currentRatingASC = 'selected="selected"';
        }
        if (currentSort === 'RatingDESC') {
            currentRatingDESC = 'selected="selected"';
        }
        const filters = document.querySelector('.filters');
        const sortBlock = document.createElement('div');
        sortBlock.className = 'sortBlock';
        const sortElement = `
      <select class='selectSort' name="sorting">
      <option value="" ${defaultValue}>Default</option>
        <option class='sortElement' value="PriceASC" ${currentPriceASC} >Sort by price ASC</option>
        <option class='sortElement' value="PriceDESC" ${currentPriceDESC}>Sort by price DESC</option>
        <option class='sortElement' value="RatingASC" ${currentRatingASC}>Sort by rating ASC</option>
        <option class='sortElement' value="RatingDESC" ${currentRatingDESC}>Sort by rating DESC</option>
    </select>
      `;
        sortBlock.innerHTML = sortElement;
        filters?.append(sortBlock);
    }

    bindSort(handler: (data: string) => void) {
        const selectBlockBySort = document.querySelector('.selectSort');
        selectBlockBySort?.addEventListener('change', (e) => {
            const target = e.target as HTMLSelectElement;
            handler(target.value);
        });
    }
}

export default Sort;
