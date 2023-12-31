//Here we need the states so use usstate from react
import { React, useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setUserError] = useState(false);
  const [pass, setPassError] = useState(false);
  function handleSubmit(e) {
    //this preventDefault helps to prevent automatic submit of our page
    if (user.length < 3 || password.length < 3) {
      alert("Type correct values");
    } else {
      alert("All good values");
    }
    e.preventDefault();
  }
  function UserHandler(e) {
    let ele = e.target.value;
    //here we have added one sort of validation
    if (ele.length < 3) {
      //instead of putting console.log change the state
      setUserError(true);
    } else {
      setUserError(false);
    }
    setUser(ele);
  }
  //similarly create a helper function for password handler

  function PasswordHandler(e) {
    let ele = e.target.value;
    if (ele.length < 3) {
      setPassError(true);
    } else {
      setPassError(false);
    }
    setPassword(ele);
  }
  return (
    <>
      <h1>Login Here</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter User Id" onChange={UserHandler} />
        {error ? <span>Invalid UserId</span> : ""}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={PasswordHandler}
        />
        {pass ? <span>Invalid Password</span> : ""}
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default Login;
