import React from 'react';
import PropTypes from 'prop-types'
class PersonalInformation extends React.Component {
    render() {
        const { nameValue, handleChange } = this.props
        return(
            <form>
                <fieldset>
                    <legend>Personal Information</legend>
                    <label>
                        Nome:
                        <input id='name' name='name' 
                         type='text' value={nameValue} 
                         maxLength='40' required='true'
                         onChange={handleChange}
                         >
                        </input>
                    </label>
                </fieldset>
            </form>
        )
    }
}


PersonalInformation.propTypes = {
    nameValue: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}
export default PersonalInformation;