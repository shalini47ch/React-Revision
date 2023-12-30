import User from "./components/User";
import Customer from "./components/Customer";
import { React, useState } from "react";
import Students from "./components/Students";

function App() {
  const [name, updateName] = useState("shalini");
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  //here we have implemented the functionality of hide as well as show using useState
  const [status,setStatus]=useState(true);//so initially we will want to show the element so we will keep it as true

  function updateData() {
    updateName("Manisha");
  }
  function handleClick() {
    alert("This button was clicked");
  }
  //to show our data on our screen we can use useState hook of react
  function getData(e) {
    console.log(e.target.value);
    setData(e.target.value);
  }

  return (
    <div className="App">
      {print ? <h1>{data}</h1> : null}
      {status?<h1>Hello</h1>:null}
      <User />
      <Customer />
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert("New button clicked")}>New Button</button>
      <p>{name}</p>
      <button onClick={updateData}>Update Name</button>
      <Students name={name} age="24" />
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print Name</button>
      <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>Show</button>
      <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  );
}

export default App;

//either we can create a function and call it on button click or we can declare it entirely inside an arrow function inside the onClick,this is how we handle events in react
//Now we are updating the state of our react application using the use state

//This dynamic update of names or rather data is possible by using the useState in React

//Now applying the logic for hide and show to show or hide button content on the basis of button click
//if we put the opposite of the existing state we can use that to toggle
