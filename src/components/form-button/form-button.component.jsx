import React from 'react';
import './form-button.styles.scss'
const FormButton = ({ children, commentButton, ...rest }) => {
    return (
        <div className={`button-container ${commentButton?'comment-button':''}`}>
            <button className="button" {...rest}>{children}</button>
        </div>
    );
}

export default FormButton;