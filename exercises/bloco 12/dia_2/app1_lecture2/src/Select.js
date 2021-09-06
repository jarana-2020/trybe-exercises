import React from 'react';

class Select extends React.Component {
    render() {
        const { className, name, value, id, defaultValue, handleChange } =this.props;
        return(
            <label className='label' htmlFor='pais'>
              Selecione seu pais
            <select 
              className={className} name= {name}
              id={id} value={value}
              onChange={handleChange} defaultValue={defaultValue}>
              <option value=''>Selecione seu Pais</option>
              <option value='Brasil'>Brasil</option>
              <option value='Argentina'>Argentina</option>
              <option value='Chile'>Chile</option>
            </select> 
            </label>
        )
    }
}


export default Select;