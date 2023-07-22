import React, { useEffect } from 'react';
import "./Navbar.css";
const Header = () => {
    useEffect(() => {
        const navToggler = document.querySelector('.nav-toggler');
        const navMenu = document.querySelector('.site-navbar ul');
        const navLinks = document.querySelectorAll('.site-navbar a');

        // load all event listeners
        allEventListeners();

        // functions of all event listeners
        function allEventListeners() {
            // toggler icon click event
            navToggler.addEventListener('click', togglerClick);
            // nav links click event
            navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
        }

        // togglerClick function
        function togglerClick() {
            navToggler.classList.toggle('toggler-open');
            navMenu.classList.toggle('open');
        }

        // navLinkClick function
        function navLinkClick() {
            if (navMenu.classList.contains('open')) {
                navToggler.click();
            }
        }

        // Clean up the event listeners when the component unmounts
        return () => {
            navToggler.removeEventListener('click', togglerClick);
            navLinks.forEach(elem => elem.removeEventListener('click', navLinkClick));
        };
    }, []);

    return (
        <header className="header-area">
            {/* site-navbar start */}
            <div className="navbar-area">
                <div className="container">
                    <nav className="site-navbar">
                        {/* site logo */}
                        <a href="/home" className="site-logo">OSP</a>

                        {/* site menu/nav */}
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Calculators</a></li>
                            <li><a href="/">Articles</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Service</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Login</a></li>
                            <li><a href="/">Register</a></li>
                        </ul>

                        {/* nav-toggler for mobile version only */}
                        <button className="nav-toggler">
                            <span></span>
                        </button>
                    </nav>
                </div>
            </div>{/* navbar-area end */}

            <div className="intro-area">
                <div className="container">
                    <h2>Content Goes here</h2>

                </div>
            </div>
        </header>
    );
};

export default Header;