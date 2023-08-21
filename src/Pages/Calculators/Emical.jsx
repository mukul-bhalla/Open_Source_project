import React, { useState } from 'react';
// import './App.css';

function App() {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const principalAmount = parseFloat(principal);
    const annualInterestRate = parseFloat(interestRate) / 100;
    const numberOfMonths = parseInt(loanTerm) * 12;

    const monthlyInterestRate = annualInterestRate / 12;
    const emiAmount =
      (principalAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    setEmi(emiAmount.toFixed(2));
  };

  return (
    <div className="App">
      <h1>EMI Calculator (India)</h1>
      <div>
        <label>Loan Amount (INR):</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div>
        <label>Loan Term (years):</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>
      <button onClick={calculateEMI}>Calculate EMI</button>
      {emi !== null && <p>EMI: INR {emi} per month</p>}
    </div>
  );
}

export default App;
