import React from "react";
import ReactDom from "react-dom";

// end of the day react reutrns a function in a incapsulated way
class Clock extends React.Component {
  // react will automatically call the render method
  // never update this.props inside a class component
  // because when a props changes react re-renders the component
  render() {
    return (
      <h1>
        hello world - {this.props.children}
        {new Date().toLocaleTimeString(this.props.locale)}
      </h1>
    );
  }
}

//  when i will send a element to reactdom.render then it will create a virtual dom with the new elment
ReactDom.render(
  <Clock locale="bn-BD"> Testing </Clock>,
  document.getElementById("root")
);
