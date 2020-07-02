import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../services/authService';
import './header.styles.scss';

const Header = (props) => {
    const handleLogout = () => {
        auth.logout();
        window.location = "/";
    }
    return (
        <div className="header">
            <div className="logo-container"><Link to='/' className="logo"><span style={{ color: "#4285f4" }}>daily</span> Drama</Link></div>
            <div className="side">
                <Link to='/about' className='option'>About</Link>
                <Link to='/contact' className='option'>Contact</Link>
                {
                    props.location.pathname === '/member' ? null
                        : auth.getCurrentUser()
                            ? <div className="option" onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</div>
                            : <Link to='/member' className='option'>Log in</Link>
                }
            </div>
        </div>
    );
}

export default withRouter(Header);