import { useState } from "react";

function MyButton() {
  // Declaration of useState
  // const state = useState("Ahmed"); // returns [value, function to change the value]
  // const value = state[0]; // reaching the value
  // const setValue = state[1]; // reaching the function
  // short way to declare useState (best practice)
  const [name, setName] = useState("Ahmed");
  function ButtonClicked() {
    // setName("Mahmoud"); // use the function
    // switching between ahmed and mahmoud using ternary operator
    name === "Ahmed" ? setName("Mahmoud") : setName("Ahmed");
  }
  return (
    <div>
      <button onClick={ButtonClicked}>Click me</button>
      <h1>{name}</h1>{" "}
      {/* accessing the value to see the action of changing it */}
    </div>
  );
}

export default MyButton;
