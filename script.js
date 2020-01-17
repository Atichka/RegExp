const form = document.querySelector('.form');
const buttonSend = document.querySelector('.form__button');
const error = document.querySelector('.form__error');

buttonSend.addEventListener('click', sendForm);

function sendForm (event) {
    event.preventDefault();

    const inputs = Array.from(form.elements);

    inputs.forEach((elem) => {
        if (elem.className == "form__input") {
            if (!elem.value) {
                alert("Поле '" + elem.placeholder + "' не должно быть пустым!");
            }
        }
    })
}