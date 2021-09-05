import React from 'react';


class Form extends React.Component {
    constructor() {
      super();

      this.state = {
        name: '',
        select: '',
        email: '',
        opiniao: '',
      }

      this.handleName = this.handleSelect.bind(this)
    }

    handleSelect(event) {
      this.setState({select: event.target.value})
    }


  render() {
    return (
      <div className='div-form'>
        <h1>Formulario Bloco 12 dia 2</h1>  
        <form className='form'>
          <div>
          <label className='label' htmlFor='pais'>Selecione seu pais</label>
          <select className='input' name= 'select' id='pais' value={this.state.select} onChange={this.handleSelect} defaultValue=''>
            <option value=''>Selecione seu Pais</option>
            <option value='Brasil'>Brasil</option>
            <option value='Argentina'>Argentina</option>
            <option value='Chile'>Chile</option>
          </select> 
          </div>
          <div>
            <label className='label' htmlFor='name'>Nome completo:</label>
            <input className='input' id='name' name='name' type='text' placeholder='Informe seu nome'/> 
          </div>
          <div>
            <label className='label' htmlFor='email'>E-mail:</label>
            <input className='input' id='email' name='email' type='email' placeholder='Informe seu e-mail'/> 
          </div>
          <div className='div-text-area'>
            <label className='label' htmlFor='opiniao'>Deixe sua opinião</label>
            <textarea className='input-text-area' id='opiniao' name='opiniao' rows='10' cols='33'/>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;