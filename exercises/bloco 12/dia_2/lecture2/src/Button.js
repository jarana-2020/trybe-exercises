import React from 'react';

class Button extends React.Component {
    render() {
        const {children, onclick, type = 'button'} = this.props;
        return (
            <button type= {type} onClick= {onclick}>
                {children}
            </button>
        )
    }
}

export default Button;