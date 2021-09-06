import React from 'react';
import PropTypes from 'prop-types';

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
            { ( value.length <= 0 ) ? 'Selecione um pais' : 'ok'}
            </label>
        )
    }
}
Select.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};
export default Select;