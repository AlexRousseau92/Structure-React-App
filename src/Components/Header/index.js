import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const header = () => {
    return (
        <header className='header'>
            <p className='header-logo'>LOGO</p>
            <div className='header-links'>
                <NavLink to="/" className="header-link">Page 1</NavLink>
                <NavLink to="/page2" className="header-link">Page 2</NavLink>
                <NavLink to="/page3" className="header-link">Page 3</NavLink>
            </div>
        </header>
    );
};

export default header;