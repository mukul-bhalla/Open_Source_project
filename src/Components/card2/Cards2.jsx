import React from 'react';
import "./card2.css";
const GradientBannerCards = () => {
    return (
        <div className="main-container">
            <div className="heading">
                <h1 className="heading__title">Gradient Banner Cards</h1>
                <p className="heading__credits">
                    <a className="heading__link" target="blank" href="https://dribbble.com/sl">
                        Design by Simon Lurwer on Dribbble
                    </a>
                </p>
            </div>
            <div className="cards">
                <div className="card card-1">
                    <div className="card__icon"><i className="fa fa-bolt"></i></div>
                    <p className="card__exit"><i className="fa fa-times"></i></p>
                    <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p className="card__apply">
                        <a className="card__link" href="/">Apply Now <i className="fa fa-arrow-right"></i></a>
                    </p>
                </div>
                <div className="card card-2">
                    <div className="card__icon"><i className="fa fa-bolt"></i></div>
                    <p className="card__exit"><i className="fa fa-times"></i></p>
                    <h2 className="card__title">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                    <p className="card__apply">
                        <a className="card__link" href="/">Apply Now <i className="fa fa-arrow-right"></i></a>
                    </p>
                </div>
                <div className="card card-3">
                    <div className="card__icon"><i className="fa fa-bolt"></i></div>
                    <p className="card__exit"><i className="fa fa-times"></i></p>
                    <h2 className="card__title">Ut enim ad minim veniam.</h2>
                    <p className="card__apply">
                        <a className="card__link" href="/">Apply Now <i className="fa fa-arrow-right"></i></a>
                    </p>
                </div>
                <div className="card card-4">
                    <div className="card__icon"><i className="fa fa-bolt"></i></div>
                    <p className="card__exit"><i className="fa fa-times"></i></p>
                    <h2 className="card__title">Quis nostrud exercitation ullamco laboris nisi.</h2>
                    <p className="card__apply">
                        <a className="card__link" href="/">Apply Now <i className="fa fa-arrow-right"></i></a>
                    </p>
                </div>
                <div className="card card-5">
                    <div className="card__icon"><i className="fa fa-bolt"></i></div>
                    <p className="card__exit"><i className="fa fa-times"></i></p>
                    <h2 className="card__title">Ut aliquip ex ea commodo consequat. Duis aute irure dolor.</h2>
                    <p className="card__apply">
                        <a className="card__link" href="/">Apply Now <i className="fa fa-arrow-right"></i></a>
                    </p>
                </div>
                <div className="card card-1">
                    <div className="card__icon"><i className="fa fa-bolt"></i></div>
                    <p className="card__exit"><i className="fa fa-times"></i></p>
                    <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p className="card__apply">
                        <a className="card__link" href="/">Apply Now <i className="fa fa-arrow-right"></i></a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GradientBannerCards;