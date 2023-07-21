import React from 'react';
import "../Components/Features.css";
const Card = ({ title, description, gradientColor }) => (
  <div className={`container-card bg-${gradientColor}`}>
    {gradientColor === 'green-box' && (
      <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ... SVG path and elements */}
      </svg>
    )}
    {gradientColor === 'white-box' && (
      <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {
            <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear_1366_4582)" fill-opacity="0.15" stroke="url(#paint1_radial_1366_4582)" stroke-width="2"></rect>
          <path d="M90.9405 64.775L88.0155 69.55L85.1155 64.775H80.0655L85.5155 72.85L79.5905 82H84.4905L88.0155 76.175L91.5155 82H96.4405L90.4905 72.85L95.9405 64.775H90.9405Z" fill="#87A1FF"></path>
          <path d="M44.9833 35.52L27.3433 43.92V52.53L35.1833 49.17V82H44.9833V35.52ZM71.37 35.52L53.73 43.92V52.53L61.57 49.17V82H71.37V35.52Z" fill="#87A1FF"></path>
          <defs>
            <linearGradient id="paint0_linear_1366_4582" x1="120.194" y1="119.827" x2="-13.1225" y2="17.1841" gradientUnits="userSpaceOnUse">
              <stop stop-color="#61A0FF" stop-opacity="0.7"></stop>
              <stop offset="0.489583" stop-color="#61A0FF" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#61A0FF" stop-opacity="0.7"></stop>
            </linearGradient>
            <radialGradient id="paint1_radial_1366_4582" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
              <stop stop-color="#87A1FF"></stop>
              <stop offset="1" stop-color="#16161D" stop-opacity="0.2"></stop>
            </radialGradient>
          </defs>
        </svg>
        }
      </svg>
    )}
    {gradientColor === 'yellow-box' && (
      <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ... SVG path and elements */}
      </svg>
    )}
    {gradientColor === 'blue-box' && (
      <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ... SVG path and elements */}
      </svg>
    )}
    <p className="card-title">{title}</p>
    <p className="card-description">{description}</p>
  </div>
);

const App = () => (
  <div className="container">
    <p className="container-title">Here are the features<br />we’re proud of</p>
    <div className="gradient-cards">
      <div className="card">
        <Card
          title="Zero-cost Possibilities"
          description="Hubble lets users borrow USDH for a one-time 0.5% fee. No variable rates. No interest charged, ever."
          gradientColor="green-box"
        />
      </div>
      <div className="card">
        <Card
          title="Multi-Asset Collateral"
          description="Deposit a variety of assets on Hubble, raise your collateral ratio, and unlock the liquidity in your wallet."
          gradientColor="white-box"
        />
      </div>
      <div className="card">
        <Card
          title="Get Yield on Deposits"
          description="While your collateral is deposited, delegate it to earn the highest yield available in the Solana ecosystem."
          gradientColor="yellow-box"
        />
      </div>
      <div className="card">
        <Card
          title="Get up to 11x Leverage"
          description="Hubble’s capital-efficient 110% collateral ratio lets users leverage up to 11x on their deposits."
          gradientColor="blue-box"
        />
      </div>
    </div>
  </div>
);

export default App;
