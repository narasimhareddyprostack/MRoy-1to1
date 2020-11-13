import React, { useState } from "react";

function LoginForm() {
  const [name, setName] = useState("Mansi");
  //useState hook return two
  let changeNameHandler = () => {
    setName("Mansi Roy");
  };
  return (
    <div className="container">
      <h1> Login - Name :{name}</h1>
      <button type="submit" onClick={changeNameHandler}>
        Change Name
      </button>
    </div>
  );
}

export default LoginForm;
