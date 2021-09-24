import React from 'react';

class DataConsolidated extends React.Component {
    render() {
        const { name, email, cpf, adress, state, typeHome, display } = this.props;
        return(
           <div className='container' 
             style={display === true ? null : {display: 'none'}}>
               <h2>Sended Informations</h2>
               <p>Name: {name}</p>
               <p>E-mail: {email}</p>
               <p>Cpf: {cpf}</p>
               <p>Adress: {adress}</p>
               <p>State: {state}</p>
               <p>Home type: {typeHome}</p>
           </div>
        )
    }
}


export default DataConsolidated;