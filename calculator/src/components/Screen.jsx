import React, { useState, useContext } from 'react';
import { CalculatorContext } from './Calculator.jsx';

function Screen() {
  const {screenText, setScreenText} = useContext(CalculatorContext);

  return (
    <div className="screen">
      <h1>SCREEN</h1>
      <p>{screenText}</p>
    </div>
  );
}

export default Screen;
