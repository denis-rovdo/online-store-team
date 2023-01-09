import classes from './slider.module.sass';


class CreateDubleInputStock {
    constructor() {
    }

    createLayout(min: number, max: number) {

        const body = document.querySelector('.filters');

        if (document.querySelector('.slider_container_stock')) {
            document.querySelector('.slider_container_stock')?.remove();
        }
        const container = document.createElement('div');
        container.className = 'slider_container_stock';

        const multiRange = document.createElement('div');
        multiRange.className = `${classes.multiRangeStule}`;
        container.append(multiRange);

        const lowerInput = document.createElement('input');

        lowerInput.className = `${classes.input}`;
        lowerInput.classList.add('lowerStockInput');
        lowerInput.setAttribute('type', 'range');
        lowerInput.setAttribute('min', '1');
        lowerInput.setAttribute('max', '52'); // максимальное значение
        lowerInput.setAttribute('value', `${min}`); //текущее значение
        multiRange.append(lowerInput);


        const upperInput = document.createElement('input');
        upperInput.className = `${classes.input}`;
        upperInput.classList.add('upperStockInput');
        upperInput.setAttribute('type', 'range');
        upperInput.setAttribute('min', '1'); //минимальное значение
        upperInput.setAttribute('max', '52');// максимальное значение
        upperInput.setAttribute('value', `${max}`); // текущее значение
        multiRange.append(upperInput);

        //const numberContainer
        const containerForNumbers = document.createElement('div');
        containerForNumbers.className = classes.containerForNum;
        container.append(containerForNumbers);
        const lowerNumber = document.createElement('div');
        lowerNumber.className = 'lower_number_stock';
        lowerNumber.textContent = `${lowerInput.value}`;;
        containerForNumbers.append(lowerNumber);

        const upperNumber = document.createElement('div');
        upperNumber.className = 'upper_number_stock';
        upperNumber.textContent = `${upperInput.value}`;
        containerForNumbers.append(upperNumber);

        body?.append(container);

        const chengeUperInput = () => {

            let lowerVal = parseInt(lowerInput.value);
            let upperVal = parseInt(upperInput.value);

            if (upperVal < lowerVal + 4) {
                lowerInput.value = `${upperVal - 4}`;

                const inputNum = + lowerInput.min;

                if (lowerVal == inputNum) {
                    upperInput.value = `${4}`;
                }
            }
            lowerNumber.textContent = `${lowerVal}`;
            upperNumber.textContent = `${upperVal}`;
        };

        upperInput.addEventListener('input', chengeUperInput);



        const chengeLowerInput = () => {
            let lowerVal = parseInt(lowerInput.value);
            let upperVal = parseInt(upperInput.value);

            if (lowerVal > upperVal - 4) {
                upperInput.value = `${lowerVal + 4}`;

                const inputNumMax = +upperInput.max;
                if (upperVal == inputNumMax) {
                    lowerInput.value = `${parseInt(upperInput.max) - 4}`;
                }

            }
            lowerNumber.textContent = `${lowerVal}`;
            upperNumber.textContent = `${upperVal}`;
        };

        lowerInput.addEventListener('input', chengeLowerInput);
    }

    bindeStockInput(handler) {
        const lowerStockInput = <HTMLInputElement> document.querySelector('.lowerStockInput');
        const upperStockInput = <HTMLInputElement> document.querySelector('.upperStockInput');
        
        lowerStockInput?.addEventListener('change', () => {
            handler(lowerStockInput.value, upperStockInput.value);
        })

        upperStockInput?.addEventListener('change', () => {
            handler(lowerStockInput.value, upperStockInput.value);
        })

    }
}
export default CreateDubleInputStock;