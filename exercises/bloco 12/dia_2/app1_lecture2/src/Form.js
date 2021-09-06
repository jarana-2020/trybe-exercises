import React from 'react';


class Form extends React.Component {
    constructor() {
      super();

      this.state = {
        name: '',
        select: '',
        email: '',
        opiniao: '',
        confirma: false,
      }

      this.handleChange = this.handleChange.bind(this)
    }

    handleChange({target}) {
      const {name} = target;
      const value = target.type === 'checkbox' ? target.checked : target.value
      this.setState({[name]: value})
    }


  render() {
    return (
      <div className='div-form'>
        <h1>Formulario Bloco 12 dia 2</h1>  
        <form className='form'>
          <div>
          <label className='label' htmlFor='pais'>Selecione seu pais</label>
          <select 
            className='input' name= 'select'
            id='pais' value={this.state.select}
            onChange={this.handleChange} defaultValue=''>
            <option value=''>Selecione seu Pais</option>
            <option value='Brasil'>Brasil</option>
            <option value='Argentina'>Argentina</option>
            <option value='Chile'>Chile</option>
          </select> 
          </div>
          <div>
            <label className='label' htmlFor='name'>Nome completo:</label>
            <input 
              className='input' 
              id='name' value={this.state.name} 
              onChange={this.handleChange} name='name' 
              type='text' placeholder='Informe seu nome'
            /> 
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