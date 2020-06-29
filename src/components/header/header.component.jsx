import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = (props) => {
    return (
        <div className="header">
            <div className="logo-container"><Link to='/' className="logo"><span style={{ color: "#4285f4" }}>daily</span> Drama</Link></div>
            <div className="side">
                <Link to='/about' className='option'>About</Link>
                <Link to='/contact' className='option'>Contact</Link>
                {props.location.pathname === '/member'
                    ? null : <Link to='/member' className='option'>Log in</Link>}
            </div>
        </div>
    );
}

export default withRouter(Header);