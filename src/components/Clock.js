import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: "bn-BD" };
    // this.handleClick = this.handleClick.bind(this);
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

  //! the function is referenced with the onClick event. When the event is triggered it is called but here this is undefined
  /* handleClick() {
    
    this.setState({
      locale: "en-US",
    });
  } 
  */

  //todo:1 to solve this you can simply make the function into a a arrow function. Because arrow function does not modifies the this keyword.
  // * It is the best practice
  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  //todo:2 you can use bind() method. To do this you have to write the bind method into the constructor.
  /* 
  handleClick(){
    this.setState({
      locale: "en-US",
    });
  } 
  */

  // todo: 3 you can use bind() with the onClick event and you can even pass parameters with it.

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
        {/* to pass parameters on a onClick event 
          1. you can use the bind() method
          //* 2. you can use arrow function like the functional components. It is the best practice.
        */}
        {/* 1.  <button type="button" onClick={this.handleClick.bind(this, "en-US")}> */}

        {/* 2.  */}
        <button type="button" onClick={() => this.handleClick("en-US")}>
          Click
        </button>
      </>
    );
  }
}

export default Clock;
