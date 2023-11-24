
import React, { useState } from 'react';
import Select from 'react-select';
import './App.css';

const operators = [
  { value: '+', label: '+' },
  { value: '-', label: '-' },
  { value: '*', label: '*' },
  { value: '/', label: '/' },
];

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operator, setOperator] = useState(operators[0]);
  const [result, setResult] = useState('');

  const calculateResult = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Invalid input');
      return;
    }

    switch (operator.value) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        if (num2 === 0) {
          setResult('Cannot divide by zero');
        } else {
          setResult(num1 / num2);
        }
        break;
      default:
        setResult('Invalid operator');
    }
  };

  return (
    <div className="calculator">
      <div>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Enter number 1"
        />
      </div>
      <div>
        <Select
          options={operators}
          value={operator}
          onChange={(selectedOption) => setOperator(selectedOption)}
        />
      </div>
      <div>
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Enter number 2"
        />
      </div>
      <button onClick={calculateResult}>Calculate</button>
      <div>
        <label>Result:</label>
        <div>{result}</div>
      </div>
    </div>
  );
}

export default App;
