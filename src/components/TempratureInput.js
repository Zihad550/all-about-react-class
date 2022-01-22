import React from "react";

class TempratureInput extends React.Component {
  render() {
    const { scale, temprature, handleData } = this.props;
    return (
      <input
        type="number"
        name={scale}
        placeholder={scale}
        value={temprature}
        onChange={handleData}
      />
    );
  }
}

export default TempratureInput;
