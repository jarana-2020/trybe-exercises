import React from 'react';

class Button extends React.Component {
    render() {
        const {children, onClick, type = 'button',backgroundColor} = this.props;
        return (
            <button type= {type} onClick= {onClick} style={{backgroundColor: {backgroundColor}}}>
                {children}
            </button>
        )
    }
}

export default Button;