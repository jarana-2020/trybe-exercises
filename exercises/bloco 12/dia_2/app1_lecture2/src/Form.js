import React from 'react';
import Name from './Input.name';
import Select from './Select';


class Form extends React.Component {
    constructor() {
      super();

      this.state = {
        name: '',
        select: '',
        email: '',
        opiniao: '',
        confirma: false,
        formularioComErros: false,
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleErrors = this.handleErrors.bind(this)
    }

    handleErrors() {
      const { name, select } = this.state;

      const errors = [
        !name.length,
        !select.length,
      ];

      const formFilled = errors.some((error) => error === true);
      
      this.setState({ formularioComErros: formFilled })
    }

    handleChange({target}) {
      const {name} = target;
      const value = target.type === 'checkbox' ? target.checked : target.value
      this.setState({[name]: value,
      }, () => {this.handleErrors()});
    };

  render() {
    return (
      <div className='div-form'>
        <h1>Formulario Bloco 12 dia 2</h1>  
        <form className='form'>
          <div>
            <Select className='input' id='select'
                name='select' value={this.state.select} 
                handleChange={this.handleChange} 
                defaultValue= '' />
          </div>
          <div>
            <Name handleChange={this.handleChange} value= {this.state.name} />
          </div>
          <div>
            <label className='label' htmlFor='email'>E-mail:</label>
            <input className='input' id='email'
              name='email' type='email'
              value={this.state.email}
              onChange={this.handleChange}
              placeholder='Informe seu e-mail'/> 
          </div>
          <div className='div-text-area'>
            <label className='label' htmlFor='opiniao'>Deixe sua opinião</label>
            <textarea className='input-text-area'
              id='opiniao' name='opiniao'
              rows='10' cols='33'
              value={this.state.opiniao}
              onChange={this.handleChange}/>
          </div>
          <div>
              <label className='label'>
                Confirma sua Participação?
                <input 
                  type= 'checkbox' className='input'
                  name='confirma' checked={this.state.confirma}
                  onChange={this.handleChange}>
                </input>
              </label>
          </div>
          <div>
            <label className='label'>
              Selecione o Arquivo  
              <input 
                type='file'
                className='input'
                name='input-file'>
              </input>
            </label>
          </div>
          <div>
            <fieldset className='fieldset'>
                <legend>Time do coração:</legend>
                <label className='label'>
                  São Paulo
                  <input 
                    type='radio' id='radio'
                    name='radio' className='input'
                    value='São Paulo'>
                  </input>
                </label>
                <label className='label'>
                  Palmeiras
                  <input 
                    type='radio' id='radio'
                    name='radio' className='input'
                    value='Palmeiras'>
                  </input>
                </label>
            </fieldset>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;