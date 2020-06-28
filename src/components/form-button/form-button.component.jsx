import React from 'react';
import './form-button.styles.scss'
const FormButton = ({ children, ...rest }) => {
    return (
        <div className="button-container">
            <button className="button" {...rest}>{children}</button>
        </div>
    );
}

export default FormButton;