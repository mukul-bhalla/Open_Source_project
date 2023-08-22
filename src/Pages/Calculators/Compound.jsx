import React, { useState } from 'react';
import './Compound.css';

function App() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [frequency, setFrequency] = useState(1);
  const [result, setResult] = useState(null);

  const calculateCompoundInterest = () => {
    const compoundInterest =
      principal * Math.pow(1 + rate / (frequency * 100), frequency * years);
    setResult(compoundInterest.toFixed(2));
  };

  return (
    <>
    <div className='ad'>
    <div className="App">
      <h1>Compound Interest Calculator</h1>
      <div>
        <label>Principal Amount:</label>
        <input
          type="number"
          value={principal}
          placeholder='Principal'
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label>Interest Rate (%):</label>
        <input
          type="number"
          placeholder='%'
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div>
        <label>Number of Years:</label>
        <input
          type="number"
          placeholder='eg. 10'
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </div>
      <div>
        <label>Compounding Frequency:</label>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value={1}>Annually</option>
          <option value={2}>Semiannually</option>
          <option value={4}>Quarterly</option>
          <option value={12}>Monthly</option>
        </select>
      </div>
      <button onClick={calculateCompoundInterest}>Calculate</button>
      {result !== null && <p>Final Amount: Rs.{result}</p>}
    </div>
    </div>
    </>
  );
}

export default App;
