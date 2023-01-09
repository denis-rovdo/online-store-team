export class CreateModal {
    createLayout() {
        const body = document.querySelector('body');

        const background = document.createElement('div');
        background.classList.add('pop-up_background');

        const modal = `  
             <form class="pop-up">
             <div class="pop-up_contauner">
                <div class="personal-details">
                   <h2>Personal details</h2>
                   <div><input class="pop-up_input person-name" type="text" required placeholder="Name and surname"></div>
                   <div><input class="pop-up_input phone-number" type="text" required placeholder="Phone number"></div>
                   <div><input class="pop-up_input adres" type="text" required placeholder="Delivery address"></div>
                   <div><input class="pop-up_input email" type="text" required placeholder="E-mail"></div>
                </div>
                <div class="card-details">
                   <h2>Credit card details</h2>
                   <div class="card-data">
                   <div><input class="pop-up_input card-number" type="text" required placeholder="Card number"></div>
                   <div><input class="pop-up_input valid-data" type="text" required placeholder="month/year"></div>
                   <div><input class="pop-up_input cvv"  type="text" required placeholder="CVV: Code"></div>
                   </div>
                </div>
                
                <input type='submit' class='btn-submit-order' value='To order' />
             </div>
             </form>
       `;
        background.innerHTML = modal;
        body?.append(background);
    }
    addListenersForInput() {
        const popUpContainer = document.querySelector('.pop-up_background');
        const popUp = document.querySelector('.pop-up');
        //const btn = popUp?.querySelector('.btn-submit-order');
        const name = popUp?.querySelector('.person-name');
        const phoneNumber = popUp?.querySelector('.phone-number');
        const adres = popUp?.querySelector('.adres');
        const email = popUp?.querySelector('.email');
        const cardNumber = popUp?.querySelector('.card-number');
        const validData = popUp?.querySelector('.valid-data');
        const cvv: HTMLInputElement | null | undefined = popUp?.querySelector('.cvv');

        const closeModal = (e: Event) => {
            if (e.target === popUpContainer) {
                popUpContainer?.remove();
            }
        };

        popUpContainer?.addEventListener('click', closeModal);

        name?.addEventListener('input', () => {
            /*  if (name.value.match(/^(\S){3,}((\s)(\S){3,}){1,}$/)) {
            
          } */
        });

        phoneNumber?.addEventListener('input', () => {
            // console.log(`phoneNumber: ${phoneNumber.value}`);
        });

        adres?.addEventListener('input', () => {
            //console.log(`adres: ${adres.value}`);
        });

        email?.addEventListener('input', () => {
            //console.log(`email: ${email.value}`);
        });

        cardNumber?.addEventListener('input', (/* e: Event */) => {
            /* if (ev.inputType === "insertText" && !numbers.test(ev.data) || input.value.length > 19) {
             input.value = input.value.slice(0, input.value.length - 1)
             return
          }
 
          // обеспечиваем работу клавиш "backspace","delete"
          let value = input.value
          if (ev.inputType === "deleteContentBackward" && regExp.test(value.slice(-4))) {
             input.value = input.value.slice(0, input.value.length - 1);
             return;
          }
 
          // добавяем пробел после 4 цифр подряд
          if (regExp.test(value.slice(-4)) && value.length < 19) {
             input.value += " ";
          } */
        });

        validData?.addEventListener('input', () => {
            //console.log(`validData: ${validData.value}`);
        });

        cvv?.addEventListener('input', () => {
            //console.log(`cvv: ${typeof cvv.value}`);
            let value = cvv.value;
            if (value.length > 3) {
                value = value.substr(0, 3);
            }

            if (!value.match(/^[0-9]/)) {
                value = '';
            }
        });

        /* const generateError = (text: string) => {
            const error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.textContent = text;
            return error;
        };

        const removeEror = function () {
            const errors = popUp?.querySelectorAll('.error');
            if (errors)
                for (let i = 0; i < errors.length; i++) {
                    errors[i].remove();
                }
        }; */

        popUp?.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }
}

/*  modal.createLayout();
 modal.addListenersForInput(); */
