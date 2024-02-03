import { useState } from "react";

function App() {
  // const foo = () => {
  //   console.log("HELLO WORLD");
  // };

  // const foo = (firstName) => {
  //   console.log("HELLO WORLD", firstName);
  // };

  // const foo = (elem, firstName) => {
  //   console.log("HELLO WORLD", elem.target, firstName);
  // };

  // var userName = "Jaffar";
  // const changeName = () => {
  //   userName = "Jaffar Aman";
  //   console.log(userName, "userName");
  // };
  // read   write
  // const [state, setState] = useState("Jaffar");
  // const [userName, setUserName] = useState("Jaffar");
  // // console.log("userName", userName[1]("Jaffar Aman"));
  // console.log("userName", userName);
  // const changeName = () => {
  //   // userName = "Jaffar Aman";
  //   setUserName("Jaffar Aman");
  //   // console.log(userName, "userName");
  // };

  // console.log("Render");

  const [userName, setUserName] = useState("Jaffar");
  const [number, setnumber] = useState(10);

  // let [nullState, setNullState] = useState(null);
  // console.log("nullState", nullState);
  // 100
  // let [arr, setArr] = useState(["Aman"]);

  // console.log("render");

  // const updateARr = () => {
  //   // const newArr = ["Jaffar"];
  //   arr.push("Jaffar");
  //   setArr([...arr]);
  // };

  // const [obj, setObj] = useState({ name: "Jaffar" });
  // console.log("render", obj);
  // const updateObj = () => {
  //   setObj({ ...obj, name2: "Aman" });
  // };

  return (
    <>
      <h1>HELLO WORLD! {userName} </h1>
      <h1>HELLO WORLD! {number} </h1>

      {/* <button onClick={updateARr}>UPDATE ARR</button> */}
      <button onClick={updateObj}>UPDATE OBJ</button>
      <button
        onClick={() => {
          setNullState(true);
        }}
      >
        Update State
      </button>
      {/* <h1>HELLO WORLD</h1> */}

      {/* <h1>HELLO {userName}  </h1>
      <button onClick={changeName}>CHANGE NAME</button> */}
      {/* <h1>HELLO WORLD</h1> */}
      {/* <button
        onClick={() => {
          foo("Jaffar");
        }}
      >
        click
      </button> */}
      {/* <button
        onClick={(ele) => {
          foo(ele, "Jaffar");
        }}
      >
        CLICK !
      </button> */}

      {/* States */}
    </>
  );
}

export default App;
