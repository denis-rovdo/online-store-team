// import classes from './Filters.module.sass';

class FiltersView {
    drawFilter(data) {
        const content = document.querySelector('.filters');
        const brand = document.createElement('div');
        brand.className = 'brandsBlock';
        content?.append(brand);
        data.forEach(el => {
            let checking = '';
            if (el.checked) {
                checking = 'checked'
            }
            const filterBlock = document.createElement('div');
            const filterByBrand = `
            <input class="brands" type="checkbox" id="${el.name}" name="brands" value="${el.name}" ${checking}/>
            <label for="${el.name}">${el.name}</label>
      `;

            filterBlock.innerHTML = filterByBrand;

            brand?.prepend(filterBlock);
        })
    }

    bindAddBrand(handler) {
        const brandInputs = document.querySelectorAll('.brands');
        brandInputs.forEach(inp => {
            inp.addEventListener('change', () => {
                if (inp.checked) {
                    handler(inp.value, 'Check')
                } else {
                    console.log(inp.value)
                    handler(inp.value, 'Uncheck')
                }
            })

        })
    }

}

export default FiltersView;
