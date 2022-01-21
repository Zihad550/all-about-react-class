import React from "react";
import ReactDom from "react-dom";

class Clock extends React.Component {
  render() {
    return (
      <h1>
        hello world - {this.props.children}
        {new Date().toLocaleTimeString(this.props.locale)}
      </h1>
    );
  }
}

ReactDom.render(
  <Clock locale="bn-BD"> Testing </Clock>,
  document.getElementById("root")
);
