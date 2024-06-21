import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='footer-logo'>
                <img className="logo" src="assets/logos/vertical-logo.png" alt="Logo" />
            </div>
            <div className='footer-nav'>
                <h5>Site Map</h5>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/bookings">Bookings</a></li>
                    <li><a href="/order-online">Order online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
            <div className='footer-address'>
                <h5>Contact</h5>
                <span>180 Main Street
                    <br />New York, New York
                    <br />10001
                    <br />212-555-1234
                    <br /><a href="mailto:customer@littlelemon.com">customer@littlelemon.com</a>
                </span>
            </div>
            <div className='social-links'>
                <h5>Social Media</h5>
                <ul>
                    <li>
                        <a href="/">Facebook</a>
                    </li>
                    <li>
                        <a href="/">Twitter</a>
                    </li>
                    <li>
                        <a href="/">Instagram</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;