import React from 'react';
import { Redirect } from 'react-router-dom';

class StrictAcccess extends React.Component {
    render() {
        const { userName, password } = this.props.user;
        if ( !(userName === 'joao' && password === 1234)){
          alert('Access denied');
          return <Redirect to='/' />
        }
        return(
           <p>Welcome joao!</p>
        )
    }
}

export default StrictAcccess;