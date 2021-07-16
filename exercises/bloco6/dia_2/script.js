const states = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
let arrayMessages = [];
let arrayErrors = [];
const getForm = document.getElementById('main-form');
const divValues = document.getElementById('div-result');


window.onload = function () {
    const getButtonSubmit = document.querySelector('.button-submit');
    getButtonSubmit.addEventListener('click', handleSubmit);
    const getButtonClear = document.querySelector('.button-clear');
    getButtonClear.addEventListener('click', clearForm);
}

function getStates() {
    const getSelect = document.getElementById('select-state');
    for (let index = 0; index < states.length; index += 1) {
        const getOption = document.createElement('option');
        getOption.className = 'option';
        getOption.innerHTML = states[index];
        getSelect.appendChild(getOption);
    }
}
getStates();

function validateName() {
    const getName = document.querySelector('#input-name');
    if (getName.value !== '') {
        arrayMessages.push('Nome:' + getName.value);
    } else {
        arrayErrors.push('Campo Nome deve ser preenchido.');
    }
};

function validateEmail() {
    const getEmail = document.querySelector('#input-email');
    if (getEmail.value !== '') {
        arrayMessages.push('E-mail:' + getEmail.value);
    } else {
        arrayErrors.push('Campo E-mail deve ser preenchido.');
    }
};

function validateCpf() {
    const getCpf = document.querySelector('#input-cpf');
    if (getCpf.value !== '') {
        arrayMessages.push('Cpf:' + getCpf.value);
    } else {
        arrayErrors.push('Campo Cpf deve ser preenchido.');
    }
};

function validateAdress() {
    const getAdress = document.querySelector('#input-adress');
    if (getAdress.value !== '') {
        arrayMessages.push('Endereço:' + getAdress.value);
    } else {
        arrayErrors.push('Campo Endereço deve ser preenchido.');
    }
};

function validateCity() {
    const getCity = document.querySelector('#input-city');
    if (getCity.value !== '') {
        arrayMessages.push('Cidade:' + getCity.value);
    } else {
        arrayErrors.push('Campo Cidade deve ser preenchido.');
    }
};

function validateState() {
    const getState = document.querySelector('#select-state');
    if (getState.selectedIndex !== 0) {
        arrayMessages.push('Estado:' + getState.value);
    } else {
        arrayErrors.push('Você deve seleconar o Estado.');
    }
};

function validateHouse() {
    const getHouse = document.getElementsByName('input-home');
    if (getHouse[0].checked) {
        arrayMessages.push('Tipo de Moradia:' + getHouse[0].value);
        console.log(arrayMessages);
    } else if (getHouse[1].checked) {
        arrayMessages.push('Tipo de Moradia:' + getHouse[1].value);
    } else {
        arrayErrors.push('Você deve seleconar o tipo de moradia.')
    }
};

function validateResume() {
    const getResume = document.querySelector('#resume-cv');
    if (getResume.value !== "") {
        arrayMessages.push('Resumo do Curriculo:' + getResume.value);
    } else {
        arrayErrors.push('Você deve preencher o resumo do curriculo.');
    }
};

function validateOffice() {
    const getOffice = document.querySelector('#input-office');
    if (getOffice.value !== "") {
        arrayMessages.push('Resumo do Curriculo:' + getOffice.value);
    } else {
        arrayErrors.push('Você deve preencher o cargo.');
    }
};

function validateEmail() {
    const getEmail = document.querySelector('#input-email');
    if (getEmail.value !== '') {
        arrayMessages.push('Resumo do Curriculo:' + getDescription.value);
    } else {
        arrayErrors.push('Você deve preencher a descrição do cargo.');
    }
};

function validateDate() {

    const getDate = document.getElementById('input-date');
    let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
    let separetor = getDate.value.split('/');
    let day = separetor[0];
    let month = separetor[1];
    let year = separetor[2];

    if (getDate.value === '') {
        arrayErrors.push('A data deve ser informada');
    } else if (!regex.test(getDate.value)) {
        arrayErrors.push('Data no formato invalido');
    } else if (day < 0 || day > 30) {
        arrayErrors.push('O dia informado não é valido');
    } else if (month < 1 || month > 12) {
        arrayErrors.push('O mês informado não é valido');
    } else if (year < 0) {
        arrayErrors.push('O ano informado não é valido');
    } else {
        arrayMessages.push('Data: ' + getDate.value);
    }

}

function clearDivResult() {
    while (divValues.firstChild) {
        divValues.removeChild(divValues.firstChild);
    }
}


function handleSubmit(event) {
    event.preventDefault()
    arrayErrors = [];
    arrayMessages = [];
    validateName();
    validateEmail();
    validateCpf();
    validateAdress();
    validateCity();
    validateState();
    validateHouse();
    validateResume();
    validateOffice();
    validateDescription();
    validateDate();

    if (arrayErrors.length > 0) {
        arrayMessages = [];
        clearDivResult();
        for (let index = 0; index < arrayErrors.length; index += 1) {
            const getP = document.createElement('p');
            getP.innerHTML = arrayErrors[index];
            divValues.appendChild(getP);
            divValues.style.backgroundColor = 'red';
            getForm.appendChild(divValues);
        }
    } else {
        clearDivResult();
        for (let index = 0; index < arrayMessages.length; index += 1) {
            const getP = document.createElement('p');
            getP.innerHTML = arrayMessages[index];
            divValues.appendChild(getP);
            divValues.style.backgroundColor = 'cyan';
            getForm.appendChild(divValues);
        }
    }

};

function clearForm(event) {
    event.preventDefault()
    const getInputs = document.querySelectorAll('.input');
    const getTextArea = document.querySelector('#resume-cv');
    const inputRadio = document.getElementsByName('input-home');
    for (let index = 0; index < getInputs.length; index += 1) {
        getInputs[index].value = '';
    }
    clearDivResult();
    getTextArea.value = "";

    for (let index = 0; index < inputRadio.length; index += 1) {
        inputRadio[index].checked = false;
    }
}
