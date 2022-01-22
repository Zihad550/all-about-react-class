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

        {locale === "bn-BD" ? (
          <Button change={this.handleClick} locale="en-US" />
        ) : (
          <Button change={this.handleClick} locale="bn-BD" />
        )}
      </>
    );
  }
}

export default Clock;
