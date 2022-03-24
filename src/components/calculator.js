import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, operation: '', next: '' };
  }

  handleClick = (items) => this.setState((e) => calculate(e, items.target.textContent));

  render() {
    const { total, operation, next } = this.state;
    const display = `${total || operation || next ? `${total || ''} ${operation || ''} ${next || ''}` : '0'} `;
    return (
      <div className="calculator_container">
        <div className="display"><div className="display_string">{display}</div></div>
        <div className="button_container">
          <button type="button" className="button" onClick={this.handleClick}>
            AC
          </button>
          <button type="button" className="button" onClick={this.handleClick}>
            +/-
          </button>
          <button type="button" className="button" onClick={this.handleClick}>
            %
          </button>
          <button
            type="button"
            className="button operator"
            onClick={this.handleClick}
          >
            ÷
          </button>
          <button type="button" className="button" onClick={this.handleClick}>
            7
          </button>
          <button type="button" className="button" onClick={this.handleClick}>
            8
          </button>
          <button type="button" className="button" onClick={this.handleClick}>
            9
          </button>
          <button
            type="button"
            className="button operator"
            onClick={this.handleClick}
          >
            x
          </button>
          <button type="button" className="button" onClick={this.handleClick}>
            4
          </button>
          <button type="button" className="button" onClick={this.handleClick}>
            5
          </button>
          <button type="button" className="button" onClick={this.handleClick}>
            6
          </button>
          <button
            type="button"
            className="button operator"
            onClick={this.handleClick}
          >
            -
          </button>
          <button type="button" className="button" onClick={this.handleClick}>
            1
          </button>
          <button type="button" className="button" onClick={this.handleClick}>
            2
          </button>
          <button type="button" className="button" onClick={this.handleClick}>
            3
          </button>
          <button
            type="button"
            className="button operator"
            onClick={this.handleClick}
          >
            +
          </button>
          <button
            type="button"
            className="button item0"
            onClick={this.handleClick}
          >
            0
          </button>
          <button type="button" className="button" onClick={this.handleClick}>
            .
          </button>
          <button
            type="button"
            className="button operator"
            onClick={this.handleClick}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
