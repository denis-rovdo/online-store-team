import classes from './slider.module.sass';


class CreateDubleInput {
    constructor() {
    }

    createLayout(min, max) {
       
        const body = document.querySelector('.filters');
      
        if(document.querySelector('.slider_container')){
        document.querySelector('.slider_container')?.remove();
        }
        const container = document.createElement('div');
        container.className = 'slider_container';

        const multiRange = document.createElement('div');
        multiRange.className = `${classes.multiRangeStule}`;
        container.append(multiRange);

        const lowerInput = document.createElement('input');
        
        lowerInput.className = `${classes.input}`;
        lowerInput.classList.add('lowerPriceInput');
        lowerInput.setAttribute('type', 'range');
        lowerInput.setAttribute('min', '42');
        lowerInput.setAttribute('max', '4500'); // максимальная цена
        lowerInput.setAttribute('value', min); //текущее значение
        multiRange.append(lowerInput);


        const upperInput = document.createElement('input');
        upperInput.className = `${classes.input}`;
        upperInput.classList.add('upperPriceInput');
        upperInput.setAttribute('type', 'range');
        upperInput.setAttribute('min', '42'); //минимальная цена
        upperInput.setAttribute('max', '4500');// максимальная цена
        upperInput.setAttribute('value', max); // текущее значение
        multiRange.append(upperInput);

        //const numberContainer

        const lowerNumber = document.createElement('div');
        lowerNumber.className = 'lower_number';
        lowerNumber.textContent = lowerInput.value;
        container.append(lowerNumber);

        const upperNumber = document.createElement('div');
        upperNumber.className = 'upper_number';
        upperNumber.textContent = upperInput.value;
        container.append(upperNumber);

        body?.append(container);

        const chengeUperInput = () => {

            let lowerVal = parseInt(lowerInput.value);
            let upperVal = parseInt(upperInput.value);

            if (upperVal < lowerVal + 4) {
                lowerInput.value = upperVal - 4;

                if (lowerVal == lowerInput.min) {
                    upperInput.value = 4;
                }
            }
            lowerNumber.textContent = lowerVal;
            upperNumber.textContent = upperVal;
        };

        upperInput.addEventListener('input', chengeUperInput);



        const chengeLowerInput = () => {
            let lowerVal = parseInt(lowerInput.value);
            let upperVal = parseInt(upperInput.value);

            if (lowerVal > upperVal - 4) {
                upperInput.value = lowerVal + 4;

                if (upperVal == upperInput.max) {
                    lowerInput.value = parseInt(upperInput.max) - 4;
                }

            }
            lowerNumber.innerText = lowerVal;
            upperNumber.innerText = upperVal;
        };

        lowerInput.addEventListener('input', chengeLowerInput);
    }

    bindePriseInput(handler){
        const lowerPriceInput = document.querySelector('.lowerPriceInput');
        const upperPriceInput =  document.querySelector('.upperPriceInput');

        lowerPriceInput?.addEventListener('change', (e)=>{
           handler(lowerPriceInput.value, upperPriceInput.value);
        })

        upperPriceInput?.addEventListener('change', (e)=>{
            handler(lowerPriceInput.value, upperPriceInput.value);
         })

    }
}
export default CreateDubleInput;