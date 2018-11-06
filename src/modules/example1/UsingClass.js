import React, { Component } from "react";

class UsingClass extends Component {
  state = {
    value: 0
  };

  setValue = newValue => {
    this.setState({
      value: newValue
    });
  };

  render = () => {
    const { value } = this.state;
    return (
      <div>
        <button
          className="flat-button"
          onClick={() => this.setValue(value + 1)}
        >
          + 1
        </button>
        <span className="result-value">{value}</span>
        <pre>
            {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    );
  };
}

export default UsingClass;
