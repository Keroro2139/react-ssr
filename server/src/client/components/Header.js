import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
    console.log('Auth status is', auth);

    const authButton = auth ? (
        <a href='/api/logout'>Logout</a>
    ) : (
            <a href='/api/auth/google'>Login</a>
        );

    return (
        <nav>
            <div className='nav-wrapper'>
                <Link className='brand-logo' to='/'>React SSR</Link>
                <div className='right'>
                    <ul>
                        <li><Link to='/users'>Users</Link></li>
                        <li><Link to='/admins'>Admins</Link></li>
                        <li>{authButton}</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = ({ auth }) => {
    return { auth };
};

export default connect(mapStateToProps)(Header);