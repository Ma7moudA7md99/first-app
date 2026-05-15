import { useState } from "react";
function MyInput() {
  const [inputValue, setInputValue] = useState("");
  function handelChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <div>
      <label>Your Name:</label>
      <input value={inputValue} onChange={handelChange} />
    </div>
  );
}

export default MyInput;
