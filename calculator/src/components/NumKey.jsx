import React, { useContext } from 'react';
import { CalculatorContext } from './Calculator.jsx';

function NumKey(props) {
  const {screenText, setScreenText} = useContext(CalculatorContext);

  const handleClick = () => {
    let newScreenText = screenText + '' + props.number;
    setScreenText(newScreenText);
  }

  return (
    <button className="key" onClick={handleClick}>
      <h1>{props.number || 0}</h1>
    </button>
  );
}

export default NumKey;
