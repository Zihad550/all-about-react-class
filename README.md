# React Class Component

- how to declare state on a class component:
  state is a object which stores information about the component. When the setState() is called only then the component reRenders
  this.state={}

- how to update state:
  setState({
  stateName: newValue;
  })
  or,\

  setState((state, props) => {
  stateName: state + props;
  })

- About componentDidMount():
  It gets called when the component is fully loaded on the webpage.

- About componentWillUnmount():
  It gets called when the component will unmount. Or the user will switch route.
