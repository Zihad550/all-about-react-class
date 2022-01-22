# Lesson -4

- shouldComponentUpdate(): It is called when the component is gonna re-render. Before the re-render of a component it is fired . It is react life cycle hook. It receives two props, shouldComponentUpdate(nextProps, nextState){}

```
// if we return true from the shouldComponentUpdate() hook then the component will re-render
// if we return false from the shouldComponentUpdate() hook then the component will not re-render
```

- Don't use shouldComponentUpdate() lifecycle hook in every component even don't use it on medium sized components.

- Here it is used to lesson purpose.
