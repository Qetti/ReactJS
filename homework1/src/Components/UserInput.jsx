import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <label style={{color: "rgb(255, 203, 0)"}} htmlFor="username">Enter something: </label>
      <input
        type="text"
        maxlength="50"
        name="username"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default UserInput;
