import React from 'react';
class PersonalInformation extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
        }
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange({target}) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        })
    }
    render() {
        return(
            <form>
                <fieldset>
                    <legend>Personal Information</legend>
                    <label>
                        Nome:
                        <input id='name' name='name' 
                           type='text' value={this.state.name.toUpperCase()} 
                           maxLength='40' required='true'
                           onChange={this.handleChange}
                         >
                        </input>
                    </label>
                </fieldset>
            </form>
        )
    }
}


export default PersonalInformation;