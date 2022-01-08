import logo from "./logo.svg";
import "./App.css";

function App() {
  var name = "surya";
  return (
    <div>
      <h1>React application</h1>
      <p>paragraph data</p>
      <h2>{name}</h2>
      <p>{5 + 6}</p>
    </div>
  );
}

export default App;
