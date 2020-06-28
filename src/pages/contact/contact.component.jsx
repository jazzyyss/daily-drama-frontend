import React, { useState } from 'react';
import './contact.styles.scss';
import FormInput from '../../components/form-input/input.component';
import FormButton from '../../components/form-button/form-button.component';

const ContactPage = () => {
    const [credentials, setCredentials] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = credentials;
    const handleChange = e => {
        const { value, name } = e.target;
        setCredentials({ ...credentials, [name]: value })
    };
    const handleSubmit = e => {
        e.preventDefault();
        alert('form submitted');
    };
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form className="form-container" onSubmit={handleSubmit}>
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
                    type="message"
                    name="message"
                    handleChange={handleChange}
                    value={message}
                    placeholder="Message..."
                    required
                />
                <FormButton type="submit" name="submit">Submit</FormButton>
            </form>
        </div>
    );
}

export default ContactPage;