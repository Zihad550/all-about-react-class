import React from "react";

class Form extends React.Component {
  state = {
    value: "Jehad",
    text: "I'm a MERN stack web developer",
    library: "React",
    isAwesome: true,
  };

  // if you want to use a common function to update all the data then you have to use [e.target.name]: e.target.value
  handleData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value, text, library, isAwesome } = this.state;
    console.log(value, text, library, isAwesome);
  };
  render() {
    const { value, text, library, isAwesome } = this.state;
    console.log(value, text);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* when I am gonna use the value on input field then the react will take control over it. More specifically the Component will take control over it */}
          {/* But you can't use absolute value. If you do this react will make the field readonly.*/}
          {/* <input type="text" name="" id="" value="jehad" /> */}
          {/* //* to solve this you have to set the value to state. and you can update it using the setState */}
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your name"
            value={value}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
          <br />
          <br />
          <textarea
            value={text}
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <br />
          <br />
          <select
            value={library}
            onChange={(e) => this.setState({ library: e.target.value })}
          >
            <option value="React">React</option>
            <option value="Node">Node</option>
            <option value="Redux">Redux</option>
          </select>

          <br />
          <br />
          {/* you have to use e.target.checked */}
          {/* and use true or false as value */}
          <input
            type="checkbox"
            name=""
            id=" "
            checked={isAwesome}
            onChange={(e) => this.setState({ isAwesome: e.target.checked })}
          />

          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
