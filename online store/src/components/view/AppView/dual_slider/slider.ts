import classes from './slider.module.sass';


class CreateDubleInput {
    constructor() {
    }

    createLayout(min:number, max:number) {
       
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
        lowerInput.setAttribute('value', `${min}`); //текущее значение
        multiRange.append(lowerInput);


        const upperInput = document.createElement('input');
        upperInput.className = `${classes.input}`;
        upperInput.classList.add('upperPriceInput');
        upperInput.setAttribute('type', 'range');
        upperInput.setAttribute('min', '42'); //минимальная цена
        upperInput.setAttribute('max', '4500');// максимальная цена
        upperInput.setAttribute('value', `${max}`); // текущее значение
        multiRange.append(upperInput);

        
        const containerForNumbers = document.createElement('div');
        containerForNumbers.className = classes.containerForNum;
        container.append(containerForNumbers);
        const lowerNumber = document.createElement('div');
        lowerNumber.className = 'lower_number';
        lowerNumber.textContent = `${lowerInput.value} BYN`;;
        containerForNumbers.append(lowerNumber);

        const upperNumber = document.createElement('div');
        upperNumber.className = 'upper_number';
        upperNumber.textContent = `${upperInput.value} BYN`;
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
            lowerNumber.textContent = `${lowerVal} BYN`;
            upperNumber.textContent = `${upperVal} BYN`;
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
            lowerNumber.textContent = `${lowerVal} BYN`;
            upperNumber.textContent = `${upperVal} BYN`;
        };

        lowerInput.addEventListener('input', chengeLowerInput);
    }

    bindePriseInput(handler){
        const lowerPriceInput  = <HTMLInputElement> document.querySelector('.lowerPriceInput');
        const upperPriceInput =  <HTMLInputElement> document.querySelector('.upperPriceInput');
    
        lowerPriceInput.addEventListener('change', ()=>{
            console.log(lowerPriceInput.value)
           handler(lowerPriceInput.value, upperPriceInput.value);
        })

        upperPriceInput.addEventListener('change', ()=>{
            handler(lowerPriceInput.value, upperPriceInput.value);
         })

    }
}
export default CreateDubleInput;