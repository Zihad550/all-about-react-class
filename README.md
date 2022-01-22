# Lesson-6 , "Lifting State Up"

- What is Lifting State Up: <br/> When we need a common state to be shared with two or more component then we have to lift the state to their parents. The component which contains them. Lifting the state from the child to parent component so all the child component can use them is called **lifting state up** on react.

## Lesson learned

- There should be a single **source of truth** for any data that changes in a React application.

- Rely on Top-Down Data Flow instead of syncing the state between different components.

- Lifting state involves writing more **boilerplate** code but takes less work to find bugs.

- We can implement any custom logic to reject or transform user input.

- If something can be derived from either props or state, it probably shouldn't be in the state.

- Trace the bugs to their source easily by just moving to the top.
