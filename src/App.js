import { useState } from "react";
import "./App.css";

let nextId = 5;
function App() {
  const [inputValue, setInputValue] = useState("");
  const [devices, setDevices] = useState([
    { id: 1, name: "apple" },
    { id: 2, name: "mac" },
    { id: 3, name: "samsung" },
    { id: 4, name: "hp" },
  ]);
  const devicesList = devices.map((device) => {
    return (
      <li key={device.id}>
        {device.name}{" "}
        <button
          onClick={() => {
            handleDelClick(device.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });
  function handleDelClick(id) {
    // const oldDevices = [...devices];
    // let index = 0,
    //   selectedIndex = 0;
    // for (let device of oldDevices) {
    //   if (device.id === id) {
    //     selectedIndex = index;
    //   }
    //   index++;
    // }
    // oldDevices.splice(selectedIndex, 1);
    const oldDevices = devices.filter((device) => {
      // if (device.id === id) return false;
      // return true;

      // return device.id !== id;

      return device.id === id ? false : true;
    });
    setDevices(oldDevices);
  }
  function handleAddClick() {
    // ### this will not work because we are creating a pointer(newDevices) to the same array(devices)
    // const newDevices = devices;
    // newDevices.push(inputValue);
    // setDevices(newDevices);
    // ### this will work because we are creating a new parameter(newDevices) separated from the old(devices)
    // const newDevices = [...devices];
    // newDevices.push(inputValue);
    // setDevices(newDevices);
    // short way for this process
    setDevices([...devices, { id: nextId, name: inputValue }]);
    nextId = nextId + 1;
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
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default App;
