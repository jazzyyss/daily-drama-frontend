import React from 'react';
import './loginandsignup.styles.scss';
import Login from '../../components/login/login.component';
import Register from '../../components/register/register.component';
const MemberPage = (props) => {

    return (
        <div className="member">
            <Register />
            <Login />
        </div>
    );
}

export default MemberPage;