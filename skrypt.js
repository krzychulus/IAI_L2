let send = document.querySelector(".send");

send.addEventListener("click", checkForm);


function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}


function checkForm() {


    let imie = document.querySelector("#name");
    let nazwisko = document.querySelector('#surname');
    let email = document.querySelector('#email');
    let opis = document.querySelector('#description');




    let imieValue = imie.value;
    let nazwiskoValue = nazwisko.value;
    let emailValue = email.value;
    let opisValue = opis.value;



    if (imieValue === '' || parseInt(imieValue)
    {
        addClass(imie, 'is-invalid');
    }
    else {
        removeClass(imie, 'is-invalid');
    }

    if (nazwiskoValue === '' || parseInt(nazwiskoValue)) {
        addClass(nazwisko, 'is-invalid');
    }
    else {
        removeClass(nazwisko, 'is-invalid');
    }

    if (opisValue === '') {
        addClass(nazwisko, 'is-invalid');
    }
    else {
        removeClass(nazwisko, 'is-invalid');
    }

    if (emailValue === '' || !mailReg.test(emailValue)) {
        addClass(nazwisko, 'is-invalid');
    } else {
        removeClass(nazwisko, 'is-invalid');
    }
}