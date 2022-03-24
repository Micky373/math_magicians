import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, operation: '', next: '' });

  const handleClick = (items) => {
    const displayValue = calculate(state, items.target.textContent);
    setState(displayValue);
  };
  let idValue = '';
  const display = `${state.total || state.operation || state.next ? `${state.total || ''} ${state.operation || ''} ${state.next || ''}` : '0'} `;
  const buttonsArray = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='].map((keys) => {
    if (keys === '÷' || keys === 'x' || keys === '-' || keys === '+' || keys === '=') idValue = 'operator';
    else if (keys === 0) idValue = 'button-0';
    else idValue = 'button';
    return <button type="button" className="button" id={idValue} key={keys} onClick={handleClick}>{keys}</button>;
  });
  return (
    <div className="calculator_container">
      <div className="display"><div className="display_string">{display}</div></div>
      <div className="button_container">{buttonsArray}</div>
    </div>
  );
};

export default Calculator;
