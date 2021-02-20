import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav>
            <Link to='/'>
                <img src='images/logo.svg' alt='logo'/>
            </Link>
            <div className='links'>
                <Link to='/'>Features</Link>
                <Link to='/'>Team</Link>
                <Link to='/'>Sign In</Link>
            </div>
        </nav>
    );
}
export default Navbar;