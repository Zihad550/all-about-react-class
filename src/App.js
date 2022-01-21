// in react each functions are components and
// everything inside return is react element
/* function App() {
  return (
    <div className="App">
      Hello world{new Date().toLocaleTimeString("bn-BD")}
    </div>
  );
} */

import Clock from "./components/Clock";

const App = () => {
  // if you change locale="en-US" then clock will change its layout
  return <Clock locale="bn-BD" />;
};

export default App;
