import React from 'react';
import states from '../dataStates';
import PropTypes from 'prop-types';

class ComboboxStates extends React.Component {
    render() {
        const { className, name, required, id, handleChange, value  } =this.props;
        return(
            <select className={className} required={required}
              name={name} id={id} onChange={handleChange}
              value={value}>
              <option value=''>Selecione seu Estado</option>
              {states.map((state, index) => <option key={index} 
                value={state.split('-')[0].trim()}>{state}</option>)}
            </select>
        )
    }
}

ComboboxStates.propTypes = {
    className: PropTypes.string,
    require: PropTypes.bool,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

ComboboxStates.defaultProps = {
    className: null,
    require: false,
    id: null,
}

export default ComboboxStates;