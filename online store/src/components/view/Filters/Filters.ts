import classes from './Filters.module.sass';

class FiltersView {
    drawFilter() {
        const content = document.querySelector('.content');
        const filterBlock = document.createElement('div');
        const filterByBrand = `<select id='filterByBrand'>
      <option disable='Brand'>Brands</option>
      <option value='Philips'>Philips</option>
      <option value='Samsung'>Samsung</option>
      <option value='Xiaomi'>Xiaomi</option>
      <option value='Bosch'>Bosch</option>
      <option value='LG'>LG</option>
      <option value='ATLANT'>ATLANT</option>
      <option value='BEKO'>BEKO</option>
      <option value='Horizont'>Horizont</option>
      <option value='Media'>Media</option>
      <option value='Atlanta'>Atlanta</option>
      <option value='DeLonghi'>DeLonghi</option>
    </select>`;
        filterBlock.innerHTML = filterByBrand;

        content?.prepend(filterBlock);
    }
}

export default FiltersView;
