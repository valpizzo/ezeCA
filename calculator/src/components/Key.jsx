import React, { useContext } from 'react';
import { CalculatorContext } from './Calculator.jsx';

function Key(props) {
  const {screenText, setScreenText, setSecretMessage} = useContext(CalculatorContext);

  const handleClick = (e) => {
    if (e.target.outerText === 'Clear') {
      setScreenText('');
    } else if (e.target.outerText === '(' || e.target.outerText === ')') {
      setScreenText(screenText + props.symbol);
    } else if (screenText[screenText.length - 1] !== ' ') {
      if (e.target.outerText === '=') {
        setScreenText(evaluate(screenText));
      } else if (e.target.outerText === '^') {
        setScreenText(screenText + ' ** ');
      } else if (e.target.outerText === '.') {
        setScreenText(screenText + '.');
      } else {
        setScreenText(screenText + ' ' + props.symbol + ' ');
      }
    } else if (e.target.outerText === '-') {
      setScreenText(screenText + '-');
    }
  }

  const evaluate = (equation) => {
    let result = eval(screenText);

    if (result === 42) {
      setSecretMessage('The meaning of life, the universe, and everything.');
    }

    return result;
  }

  return (
    <button className="key" onClick={handleClick}>
      <h1>{props.symbol || 'Err'}</h1>
    </button>
  );
}

export default Key;
