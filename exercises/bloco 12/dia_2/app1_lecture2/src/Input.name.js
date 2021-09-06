import React from 'react';
import PropTypes from 'prop-types'

class Name extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        return(
            <label className='label'>
              Nome completo:
              <input 
              className='input' 
              id='name' value={value} 
              onChange={handleChange} name='name' 
              type='text' placeholder='Informe seu nome'
              /> 
              { (value.length <= 0) ? 'Nome invalido' : 'ok'}
            </label>
        )
    }
}

Name.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default Name;