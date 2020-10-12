import React, { useState } from "react";
import "./App.css";

import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";


function App() {
  const [inputValue, setInputValue] = useState();
  const handleChange = (e) => setInputValue(e.target.value)

  UserOutput.defaultProps  = {
    username: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur corporis facilis praesentium, quis nemo deleniti magnam unde reiciendis dolor, impedit blanditiis rerum! Maiores ex et, rem ipsum quos voluptates ducimus!"
  }

  return (
    <div className="App">
      <UserInput
        value={inputValue}
        placeholder="Type something"
        onChange={handleChange}
      />

      <UserOutput username={inputValue}/>
      <UserOutput />
      <UserOutput />

    </div>
  );
}

export default App;
