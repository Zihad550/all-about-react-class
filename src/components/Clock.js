import React from "react";

//* clock is the base class
class Clock extends React.Component {
  //** state is a simple javascript object that works like a database you can save information of the component into it
/* 
  constructor(props){
    super(props);
    this.state = {data: new Date()};
  } */
  //todo: when you dont need the prop to initialize the state then you don't have to call the constructor and super
  // you can declare the state in this short form
  //
  state = { date: new Date() };

  //* by default constructor gets the props
  /*! constructor(props) {
    // super just calls the base class constructor
    super(props);
    // you can store anything anything inside the state
    //todo: to write state
    this.state = { date: new Date() };
  } */

  // it is called class component life cycle event/hook
  // * it runs after the component has been rendered to the DOM eg: everything has been loaded
  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  // it is a function for changing the state
  tick() {
    //todo: use setState to update the state
    // if there are many states then setState will not replace them instead it will merge them
    this.setState({
      date: new Date(),
    });
  }

  // this will be called when the component will unmount, When the componet  will unmount
  componentWillUnmount() {
    // when the component will unmount this will stop the clock
    // * this means our clock will not run in the background
    clearInterval(this.clockTimer);
  }

  //* render is only called when the setState is called
  render() {
    //todo: to use state
    return <h1>{this.state.date.toLocaleTimeString(this.props.locale)}</h1>;
  }
}

export default Clock;
