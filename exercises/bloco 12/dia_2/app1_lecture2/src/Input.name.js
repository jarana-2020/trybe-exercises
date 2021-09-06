import React from 'react';

class Name extends React.Component {
    render() {
        const { value, handleChange } = this.props
        return(
            <label className='label'>
              Nome completo:
              <input 
              className='input' 
              id='name' value={value} 
              onChange={handleChange} name='name' 
              type='text' placeholder='Informe seu nome'
              /> 
            </label>
        )
    }
}


export default Name;