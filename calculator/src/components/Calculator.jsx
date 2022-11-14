import React, { useState } from 'react';
import Screen from './Screen.jsx';
import Keypad from './Keypad.jsx';

export const CalculatorContext = React.createContext('');

function Calculator() {
  const [total, setTotal] = useState(0);
  const [screenText, setScreenText] = useState('');
  const [secretMessage, setSecretMessage] = useState('');

  return (
    <div className="App">
      <CalculatorContext.Provider value={{ total, setTotal, screenText, setScreenText, secretMessage, setSecretMessage }}>
        <h1>Calculator for Calculating Your Calculations</h1>
        <div className="calcContainer">
          <Screen />
          <Keypad />
        </div>
        <p>{secretMessage}</p>
      </CalculatorContext.Provider>
    </div>
  );
}

export default Calculator;