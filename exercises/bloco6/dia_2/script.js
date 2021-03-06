import './node_modules/just-validate/dist/js/just-validate.js'

const states = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

const picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'D/M/YYYY',
    toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }
  });

function getStates() {
    const getSelect = document.getElementById('state');
    for (let index = 0; index < states.length; index += 1) {
        const getOption = document.createElement('option');
        getOption.className = 'option';
        getOption.innerHTML = states[index];
        getSelect.appendChild(getOption);
    }
}
getStates();

new JustValidate('.js-form', {
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLength: 40
      },
      email: {
        required: true,
        email: true,
        maxLength: 50
      },
      cpf: {
        required: true,
        maxLength: 11
      },
      address: {
        required: true,
        maxLength: 200
      },
      city: {
        required: true,
        maxLength: 28
      },
      state: {
        required: true,
        maxLength: 2
      },
      radio: {
        required: true,
      },
      text: {
        required: true,
        maxLength: 1000
      },
      position: {
        required: true,
        maxLength: 40
      },
      description: {
        required: true,
        maxLength: 500
      },
      date: {
        required: true,
      }
    },
    messages: {
      name: {
        required: 'O campo de nome ?? obrigat??rio.',
        maxLength: 'O limite ?? de 40 caracteres.'
      },
      email: {
        required: 'O campo de email ?? obrigat??rio.',
        email: 'O email digitado n??o ?? v??lido.',
        maxLength: 'O limite ?? de 50 caracteres.'
      },
      cpf: {
        required: 'O campo de CPF ?? obrigat??rio.',
        maxLength: 'O limite ?? de 11 caracteres.'
      },
      address: {
        required: 'O campo endere??o ?? obrigat??rio.',
        maxLength: 'O limite ?? de 200 caracteres.'
      },
      city: {
        required: 'O campo cidade ?? obrigat??rio.',
        maxLength: 'O limite ?? de 28 caracteres.'
      },
      state: {
        required: 'O campo estado ?? obrigat??rio.',
        maxLength: 'Voc?? deve selecionar o estado'
      },
      radio: {
        required: 'A escolha de um item ?? obrigat??ria.',
      },
      text: {
        required: 'Este campo ?? obrigat??rio.',
        maxLength: 'O limite ?? de 1000 caracteres.'
      },
      position: {
        required: 'Este campo ?? obrigat??rio.',
        maxLength: 'O limite ?? de 40 caracteres.'
      },
      description: {
        required: 'Este campo ?? obrigat??rio.',
        maxLength: 'O limite ?? de 500 caracteres.'
      },
      date: {
        required: 'Este campo ?? obrigat??rio.',
      }
    },
    submitHandler: function (form, values) {
      console.log(form, values);
    }});
