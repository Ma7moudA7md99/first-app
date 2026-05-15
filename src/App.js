import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [devices, setDevices] = useState(["apple", "mac", "samsung", "hp"]);
  const devicesList = devices.map((device) => {
    return <li>{device}</li>;
  });

  function handleClick() {
    // ### this will not work because we are creating a pointer(newDevices) to the same array(devices)
    // const newDevices = devices;
    // newDevices.push(inputValue);
    // setDevices(newDevices);
    // ### this will work because we are creating a new parameter(newDevices) separated from the old(devices)
    // const newDevices = [...devices];
    // newDevices.push(inputValue);
    // setDevices(newDevices);
    // short way for this process
    setDevices([...devices, inputValue]);
  }
  return (
    <div className="App" style={{ paddingTop: "200px", fontSize: "2rem" }}>
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
      <div>{devicesList}</div>
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default App;
