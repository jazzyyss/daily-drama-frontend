import React, { useState } from 'react';
import FormInput from '../form-input/input.component';
import FormButton from '../form-button/form-button.component';
import './login.styles.scss';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = credentials;
    const handleChange = e => {
        const { value, name } = e.target;
        setCredentials({ ...credentials, [name]: value })
    };
    const handleSubmit = e => {
        e.preventDefault();
        alert('form submitted');
    };
    return (
        <div className="login">
            <h1 className="heading">Log in</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <FormInput
                    type="email"
                    name="email"
                    handleChange={handleChange}
                    value={email}
                    placeholder="E-mail..."
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    handleChange={handleChange}
                    value={password}
                    placeholder="Password..."
                    required
                />
                <FormButton type="submit" name="submit">Log In</FormButton>
            </form>
            <div className="forgot-password">Forgot Password?</div>
        </div>
    );
}

export default Login;