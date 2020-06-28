import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => {
    return (
        <div className="header">
            <Link to='/' className="logo">daily Drama</Link>
            <div className="side">
                <Link to='/about' className='option'>About</Link>
                <Link to='/contact' className='option'>Contact</Link>
                <Link to='/member' className='option'>Login</Link>
            </div>
        </div>
    );
}

export default Header;