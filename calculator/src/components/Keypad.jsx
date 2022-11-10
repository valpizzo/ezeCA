import React, { useState } from 'react';
import NumKey from './NumKey.jsx';

function Keypad() {
  const [nums, setNums] = useState(Array.from(Array(10).keys()));

  return (
    <div className="keypad">
      <h1>KEYPAD</h1>
      <div className="keyContainer">
        {nums.map((num) => (
          <NumKey number={num} key={'num' + num}/>
        ))}
      </div>
    </div>
  );
}

export default Keypad;
