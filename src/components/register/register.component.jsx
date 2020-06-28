import React, { useState } from 'react';
import FormInput from '../form-input/input.component';
import FormButton from '../form-button/form-button.component';
import './register.styles.scss';

const Register = () => {
    const [credentials, setCredentials] = useState({ name: '', email: '', password: '', secondPassword: '' });
    const { name, email, password, secondPassword } = credentials;
    const handleChange = e => {
        const { value, name } = e.target;
        setCredentials({ ...credentials, [name]: value })
    };
    const handleSubmit = e => {
        e.preventDefault();
        alert('form submitted');
    };
    return (
        <div className="register">
            <h1 className="heading">Register</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <FormInput
                    type="name"
                    name="name"
                    handleChange={handleChange}
                    value={name}
                    placeholder="Name..."
                    required
                />
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
                <FormInput
                    type="password"
                    name="secondPassword"
                    handleChange={handleChange}
                    value={secondPassword}
                    placeholder="Retype-Password..."
                    required
                />
                <FormButton type="submit" name="submit">Register</FormButton>
            </form>
        </div>
    );
}

export default Register;