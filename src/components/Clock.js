import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: "bn-BD" };
  }

  //todo: will update the state when the page is fully loaded
  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  tick() {
    //todo: use setState to update the state

    this.setState({
      date: new Date(),
    });
  }

  //todo: updates the clock style
  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  printFrameworks() {}

  //todo: this will be called when the component will unmount, When the componet  will unmount
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  render() {
    //todo: to use state
    console.log("clock component rendered");
    const { date, locale } = this.state;
    return (
      <>
        <h1>{date.toLocaleTimeString(locale)}</h1>
        {/* here bind method always creates a new function thats why our components re-renders thats why it gives new props at the button component and the button component re-renders 
        // * To solve this
        //* best practice:
       1. declare the function into arrow function
        2. pass  them like parameters
        */}
        {/* <Button change={this.handleClick.bind(this, "en-US")} /> */}
        <Button change={this.handleClick} locale="en-US" />
      </>
    );
  }
}

export default Clock;
