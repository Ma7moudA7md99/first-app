// import logo from "./logo.svg";
import "./App.css";
// import MyButton from "./MyButton";
// import MyInput from "./MyInput";
import MyForm from "./MyForm";

function App() {
  return (
    <div className="App" style={{ paddingTop: "200px" }}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton />
        <MyInput />
      </header> */}
      <MyForm />
    </div>
  );
}

export default App;
