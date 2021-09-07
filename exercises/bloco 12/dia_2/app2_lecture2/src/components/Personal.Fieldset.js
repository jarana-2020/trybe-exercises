import React from 'react';
import ComboboxStates from './Component.Combobox';
import InputText from './Component.Text';
class PersonalInformation extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            cpf: '',
            adress: '',
            stateName: ''
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
                    <div className='container'>
                        <label>
                           Name:
                           <InputText id='name' nameValue='name' type='text'
                           classValue= 'name' maxLength='40' required= {true}
                           handleChange={this.handleChange} value={this.state.name.toUpperCase()} />
                        </label>
                    </div>
                    <div className='container'>
                    <label>
                           E-mail:
                           <InputText id='email' nameValue='email' type='email'
                           classValue= 'email' maxLength='50' required= {true}
                           handleChange={this.handleChange} value={this.state.email} />
                    </label>
                    </div>
                    <div className='container'>
                    <label>
                           Cpf:
                           <InputText id='cpf' nameValue='cpf' type='text'
                           classValue= 'cpf' maxLength='11' required= {true}
                           handleChange={this.handleChange} value={this.state.cpf} />
                    </label>
                    </div>
                    <div className='container'>
                    <label>
                           Adress:
                           <InputText id='adress' nameValue='adress' type='text'
                           classValue= 'adress' required= {true}
                           handleChange={this.handleChange} value={this.state.adress} />
                    </label>
                    </div>
                    <div className='container'>
                    <label>
                           Estado:
                           <ComboboxStates id='stateName' className='stateName'
                           nameValue='stateName' value={this.state.stateName}
                           handleChange={this.handleChange} required={true}/>
                    </label>
                    </div>
                </fieldset>
            </form>
        )
    }
}


export default PersonalInformation;