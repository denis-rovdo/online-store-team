// import classes from './Filters.module.sass';

class FiltersView {
    drawFilter(data: {
        name: string,
        checked: boolean,
    }[]) {
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

    bindAddBrand(handler: (data: string, value: string) => void) {
        const brandInputs = document.querySelectorAll('.brands');
        brandInputs.forEach(inp => {
            inp.addEventListener('change', (e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                    handler(target.value, 'Check')
                } else {
                    console.log(target.value)
                    handler(target.value, 'Uncheck')
                }
            })

        })
    }

}

export default FiltersView;
