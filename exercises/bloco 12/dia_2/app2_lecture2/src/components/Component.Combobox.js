import React from 'react';
import states from '../dataStates';

class ComboboxStates extends React.Component {
    render() {
        const { className, nameValue, required, id, handleChange, defaultValue, value  } =this.props;
        return(
            <select className={className} required={required}
              name={nameValue} id={id} onChange={handleChange}
              defaultValue= {defaultValue} value={value}>
              <option value=''>Selecione seu Estado</option>
              {states.map((state, index) => <option key={index} 
                value={state.split('-')[0].trim()}>{state}</option>)}
            </select>
        )
    }
}

export default ComboboxStates;