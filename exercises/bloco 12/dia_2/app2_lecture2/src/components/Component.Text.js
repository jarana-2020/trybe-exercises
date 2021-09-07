import React from 'react';
import ProTypes from 'prop-types';

class InputText extends React.Component {
    render() {
        const {type, nameValue, id, classValue, maxLength, required, handleChange, value} = this.props
        return(
            <input type={type} name={nameValue}
              id={id} className={classValue}
              maxLength={maxLength} required={required}
              onChange={handleChange} value={value}>
            </input>
        )
    }
}

InputText.propTypes = {
    nameValue: ProTypes.string.isRequired,
    type: ProTypes.string.isRequired,
    id: ProTypes.string,
    classValue: ProTypes.string,
    maxLength: ProTypes.string,
    require: ProTypes.bool,
    handleChange: ProTypes.func.isRequired,
    value: ProTypes.string.isRequired,

}

InputText.defaultProps = {
    id: '',
    classValue: '',
    maxLength: '200',
    required: false,
}

export default InputText;