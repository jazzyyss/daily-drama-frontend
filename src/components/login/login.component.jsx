import React, { useState } from 'react';
import { toast } from 'react-toastify';
import FormInput from '../form-input/input.component';
import FormButton from '../form-button/form-button.component';
import auth from '../../services/authService';
import './login.styles.scss';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = credentials;
    const handleChange = e => {
        const { value, name } = e.target;
        setCredentials({ ...credentials, [name]: value })
    };
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await auth.login(credentials);
            if (res) {
                if (res.data.isJoi === true) toast.error(res.data.details[0].message);
                if (res.data !== "") toast.error(res.data);
            }
            setCredentials({ email: '', password: '' });
            window.location = "/";
        } catch (err) {
            console.log(err);
            toast.error('Something went Wrong');
        }
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