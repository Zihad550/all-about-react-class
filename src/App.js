// in react each functions are components and
// everything inside return is react element
/* function App() {
  return (
    <div className="App">
      Hello world{new Date().toLocaleTimeString("bn-BD")}
    </div>
  );
} */

class App {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

export default App;
