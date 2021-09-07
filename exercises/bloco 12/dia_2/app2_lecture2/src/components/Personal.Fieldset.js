import React from 'react';
import ComboboxStates from './Component.Combobox';
import InputText from './Component.Text';
import LastJobInformation from './Last.Job.Filedset';
class PersonalInformation extends React.Component {
    render() {
        const { handleChange, namePerson, email, cpf, adress, state, resume, description, office, mouseEnter } = this.props
        return(
            <form>
                <fieldset className='personal-fieldset'>
                    <legend>Personal Information</legend>
                    <div className='container'>
                        <label className='label-form'>
                           Name:
                           <InputText id='name' name='name' type='text'
                           classValue= 'input' maxLength='40' required= {true}
                           handleChange={ handleChange } value={namePerson} />
                        </label>
                    </div>
                    <div className='container'>
                    <label className='label-form'>
                           E-mail:
                           <InputText id='email' name='email' type='email'
                           classValue= 'input' maxLength='50' required= {true}
                           handleChange={ handleChange } value={email}  />
                    </label>
                    </div>
                    <div className='container'>
                    <label className='label-form'>
                           Cpf:
                           <InputText id='cpf' name='cpf' type='text'
                           classValue= 'input' maxLength='11' required= {true}
                           handleChange={ handleChange } value={cpf} />
                    </label>
                    </div>
                    <div className='container'>
                    <label className='label-form'>
                           Adress:
                           <InputText id='adress' name='adress' type='text'
                           classValue= 'input' required= {true}
                           handleChange={ handleChange } value={adress} />
                    </label>
                    </div>
                    <div className='container'>
                    <label className='label-form'>
                           State:
                           <ComboboxStates id='stateName' className='input-state'
                           name='stateName' value={state}
                           handleChange={ handleChange } required={true}/>
                    </label>
                    </div>
                    <div className='container'>
                       <label htmlFor='radio-home'>
                           Home
                           <input type='radio' className='input-radio'
                            id='radio-home' required value='Home'
                            name='typeAdress' onChange={ handleChange }/>
                       </label>
                       <label htmlFor='radio-apartment'>
                           Apartment
                           <input type='radio' className='input-radio'
                            id='radio-apartment' required value='Apartment'
                            name='typeAdress' onChange={ handleChange }/>
                       </label>
                    </div>
                </fieldset>
                <LastJobInformation resume={resume} handleChange={handleChange} 
                  description={description} office={office} mouseEnter={mouseEnter} />
            </form>
        )
    }
}


export default PersonalInformation;