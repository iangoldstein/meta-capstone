import React from 'react';


const Nav = () => {
    return (
        <nav className='nav-grid'>
            <img className="logo" src="assets/logos/logo.png" alt="Logo" />
            <ul className='nav-links'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;