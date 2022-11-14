import NumKey from './NumKey.jsx';
import Key from './Key.jsx';

function Keypad() {
  const nums = Array.from(Array(10).keys());
  const keys = ['(', ')', '+', '-', '*', '÷', '^', '.', '=', 'Clear'];

  return (
    <div className="keypad">
      <h1>KEYPAD</h1>
      <div className="keyContainer">
        {nums.map((num) => (
          <NumKey number={num} key={'num' + num}/>
        ))}
        {keys.map((key) => (
          <Key symbol={key} key={'key' + key} />
        ))}
      </div>
    </div>
  );
}

export default Keypad;
