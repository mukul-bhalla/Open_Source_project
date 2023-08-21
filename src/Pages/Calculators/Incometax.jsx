import React, { useState } from 'react';
import '../Calculators/Compound.css';

function App() {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(null);

  const calculateIncomeTax = () => {
    const taxSlabs = [
      { range: 250000, rate: 0 },
      { range: 500000, rate: 5 },
      { range: 1000000, rate: 20 },
      { range: Infinity, rate: 30 },
    ];

    let remainingIncome = income;
    let calculatedTax = 0;

    for (const slab of taxSlabs) {
      if (remainingIncome <= 0) {
        break;
      }
      const slabAmount = Math.min(slab.range, remainingIncome);
      calculatedTax += (slabAmount * slab.rate) / 100;
      remainingIncome -= slabAmount;
    }

    setTax(calculatedTax.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Income Tax Calculator (India)</h1>
      <div>
        <label>Income (INR):</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </div>
      <button onClick={calculateIncomeTax}>Calculate</button>
      {tax !== null && <p>Income Tax: INR {tax}</p>}
    </div>
  );
}

export default App;



