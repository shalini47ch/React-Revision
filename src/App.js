import User from "./components/User";
import Customer from "./components/Customer";
import {React,useState} from "react";

function App() {
  const [name,updateName]=useState("shalini")
  function updateData(){
    updateName("Manisha")
  }
  function handleClick() {
    alert("This button was clicked");
  }

  return (
    <div className="App">
      <User />
      <Customer />
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert("New button clicked")}>New Button</button>
      <p>{name}</p>
      <button onClick={updateData}>Update Name</button>
    </div>
  );
}

export default App;

//either we can create a function and call it on button click or we can declare it entirely inside an arrow function inside the onClick,this is how we handle events in react
//Now we are updating the state of our react application using the use state 

//This dynamic update of names or rather data is possible by using the useState in React