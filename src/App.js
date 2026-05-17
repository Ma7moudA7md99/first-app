import { useState } from "react";
import "./App.css";
/*
 * setCount(count + 1) — sets state to count + 1.
 * setCount((count) => count + 1) — uses an updater function
 *   that receives the latest queued state as its argument, so it gets 1 and returns 2.
 */
function App() {
  /*
   * IN THIS FUNCTION USING A STATE WITH A CALLBACK FUNCTION
   * WILL READ THE COUNT WITH THE NEWEST VALUE NOT THE DEFAULT
   * SO IT WILL INCREASE BY +2.
   */
  function handleClick() {
    setCount(count + 1);
    setCount((count) => {
      return count + 1;
    });
  }
  /*
   * IN THIS FUNCTION THE COUNT WILL BE INCREASED +1 NOT +2
   * BECAUSE THE SECOND STATE WILL READ THE DEFAULT VALUE FOR THE COUNT NOT NEW VALUE
   */
  // function handleClick() {
  //   setCount(count + 1);
  //   setCount(count + 1);
  // }
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>The Count is: {count}</h1>
      <button onClick={handleClick} style={{ fontSize: "1.5rem" }}>
        +
      </button>
    </div>
  );
}

export default App;
