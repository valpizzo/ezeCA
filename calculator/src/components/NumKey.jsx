import React, { useState, useContext } from 'react';
import { CalculatorContext } from './Calculator.jsx';

function NumKey(props) {
  const {screenText, setScreenText} = useContext(CalculatorContext);

  const handleClick = () => {
    setScreenText((prev) => {
      return prev + ' ' + props.number;
    })
  }

  return (
    <button className="key" onClick={handleClick}>
      <h1>{props.number || 0}</h1>
    </button>
  );
}

export default NumKey;
