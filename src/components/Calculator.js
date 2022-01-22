import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TempratureInput from "./TempratureInput";

class Calculator extends React.Component {
  state = {
    temprature: 0,
    celsius: 0,
    fahrenheit: 0,
  };

  handleData = (e) => {
    if (e.target.name === "Celsius") {
      this.setState({
        temprature: e.target.value,
        celsius: e.target.value,
        fahrenheit: e.target.value * (9 / 5) + 32,
      });
    } else {
      this.setState({
        temprature: (e.target.value - 32) * (5 / 9),
        celsius: (e.target.value - 32) * (5 / 9),
        fahrenheit: e.target.value,
      });
    }
    console.log(this.state);
  };
  render() {
    return (
      <>
        <TempratureInput
          scale="Celsius"
          temprature={this.state.celsius}
          handleData={this.handleData}
        />
        <br />
        <br />
        <TempratureInput
          scale="Fahrenheit"
          temprature={this.state.fahrenheit}
          handleData={this.handleData}
        />
        <BoilingVerdict temprature={this.state.temprature} />
      </>
    );
  }
}

export default Calculator;
