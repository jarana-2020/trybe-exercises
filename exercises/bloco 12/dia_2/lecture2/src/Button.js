import React from 'react';

class Button extends React.Component {
    render() {
        const {children, onClick, type = 'button'} = this.props;
        return (
            <button type= {type} onClick= {onClick}>
                {children}
            </button>
        )
    }
}

export default Button;