import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  var number = 100;

  // const [userName, setUserName] = useState("");
  // const getValue = (event) => {
  //   console.log(userName, "userNAme");
  // };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const signup = () => {
    console.log(firstName, "firstName");
    console.log(lastName, "lastName");
    if (!firstName || !lastName) {
      alert("required field missing");
      return;
    }
    setFirstName("");
    setLastName("");
  };
  return (
    <>
      {/* <Header myNumber={number} myNumber2={200} />
      <h1>MAIN BODY</h1>
      <Footer number={number} /> */}
      {/* <input type="text" onChange={(e) => setUserName(e.target.value)} />

      <h1>HELLO {userName} </h1>
      <button onClick={getValue}>GET VALUE</button> */}

      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        value={lastName}
        type="text"
        onChange={(e) => setLastName(e.target.value)}
      />

      <button onClick={signup}>GET VALUES</button>
      {/* <button onClick={signup}>CLEAR VALUES</button> */}
    </>
  );
}

export default App;
