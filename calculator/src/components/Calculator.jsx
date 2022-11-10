import React, { useState, useContext } from 'react';
import Screen from './Screen.jsx';
import Keypad from './Keypad.jsx';

export const CalculatorContext = React.createContext('');

function Calculator() {
  const [total, setTotal] = useState(0);
  const [screenText, setScreenText] = useState('');

  return (
    <div className="App">
      <CalculatorContext.Provider value={{ total, setTotal, screenText, setScreenText }}>
        <h1>Calculator</h1>
        <div className="calcContainer">
          <Screen />
          <Keypad />
        </div>
      </CalculatorContext.Provider>
    </div>
  );
}

export default Calculator;