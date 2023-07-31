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

            {/* <div className="intro-area">
                <div className="container overlap">
                    
                <div className="row mt-1">
      <div className="col-10 offset-1 onset-1">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                className="w-100"
                alt="..."
                height="600px"
              />
              <div className="carousel-caption  d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
            <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                className="w-100"
                alt="..."
                height="600px"
              />
              <div className="carousel-caption  d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
            <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                className="w-100"
                alt="..."
                height="600px"
              />
              <div className="carousel-caption d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="/carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="/carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
                </div>
            </div> */}
        </header>
    );
    
};

export default Header;