import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header'>

            <Link className='Home' to='/'>Inicio</Link>

            <h2>Menu</h2>

        </div>
    )
}

export default Header
