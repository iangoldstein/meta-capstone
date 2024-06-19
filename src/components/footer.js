import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='footer-nav'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order-online">Order online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
            <div className='footer-address'>
                <h5>Contact</h5>
                <span>Address</span>
                <span>Phone</span>
                <span>Email</span>
            </div>
            <div className='social-links'>
                <ul>
                    <li>
                        <a href="/"><img src="assets/icons/facebook.png" alt="Facebook" /></a>
                    </li>
                    <li>
                        <a href="/"><img src="assets/icons/twitter.png" alt="Twitter" /></a>
                    </li>
                    <li>
                        <a href="/"><img src="assets/icons/instagram.png" alt="Instagram" /></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;