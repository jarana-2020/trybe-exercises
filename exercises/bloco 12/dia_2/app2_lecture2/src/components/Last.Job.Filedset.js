import React from 'react';

class LastJobInformation extends React.Component {
    render() {
        const { resume, handleChange, description, office, mouseEnter } = this.props;
        return(
            <fieldset className='job-fieldset'>
                <legend>Last Job informations</legend>
                <div className='container'>
                   <label className='label-form'>
                       Office Description
                       <input type='text' className='input'
                         id='description' name='description'
                         onChange={handleChange} value={description}
                         required maxLength='500'/>
                   </label>
                </div>
                <div className='container'>
                    <div className='div-text-areas'>
                      <label htmlFor='resume' className='label-form'>
                         Curriculum Resume
                         <textarea className='text-area' name='resume'
                          id='resume' value={resume} maxLength='1000'
                          wrap='true' required onChange={handleChange}
                          cols='50' rows='20'/>
                      </label>
                      <label htmlFor='office-description' className='label-form'>
                         Office Description
                         <textarea className='text-area' name='office'
                          id='office-description' value={office} maxLength='40'
                          wrap='true' required onChange={handleChange}
                          cols='30' rows='10' onMouseEnter={ mouseEnter}/>
                      </label>
                    </div>
                </div>
            </fieldset>
        )
    }
}

export default LastJobInformation;