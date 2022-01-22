import React from "react";

class Clock extends React.Component {
  state = { date: new Date(), locale: "bn-BD" };

  /*! constructor(props) {
    // super just calls the base class constructor
    super(props);
    // you can store anything anything inside the state
    //todo: to write state
    this.state = { date: new Date() };
  } */

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

  handleClick() {
    this.setState({
      locale: "en-US",
    });
  }

  printFrameworks() {}

  //todo: this will be called when the component will unmount, When the componet  will unmount
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  render() {
    //todo: to use state
    const { date, locale } = this.state;
    return (
      <>
        <h1>{date.toLocaleTimeString(locale)}</h1>
        <button type="button" onClick={this.handleClick}>
          Click
        </button>
      </>
    );
  }
}

export default Clock;
