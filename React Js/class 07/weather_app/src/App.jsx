import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";

function App() {
  let [count, setCount] = useState(0);
  let [toggle, settoggle] = useState(false);
  // console.log("HELOO WORLD")

  // const foo = () => {
  //   console.log("first time render");
  // };
  // foo();

  // useEffect(() => {
  //   console.log("first time render");
  // }, []);

  // useEffect(() => {
  //   console.log("first time render");
  // }, []);

  // const foo = () => {
  //   console.log("first time render");
  // };
  // foo();

  // useEffect(() => {
  //     console.log("first time render");
  // }, []);

  // useEffect(() => {
  //   console.log("toggle state update");
  // }, [toggle, count]);

  // useEffect(() => {
  //   console.log("every render");
  // });

  // console.log("toggle", toggle);

  const [headerShow, setHeaderShow] = useState(false);

  // https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=69e67c8bdadf637986d2a5ad89d314c4&units=metric

  useEffect(() => {
    fetchData();
  }, []);

  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    // fetch(
    //   "https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=69e67c8bdadf637986d2a5ad89d314c4&units=metric"
    // )
    //   .then((res) => res.json())
    //   .then((res) => console.log("res", res))
    //   .catch();
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=69e67c8bdadf637986d2a5ad89d314c4&units=metric"
      );
      setWeatherData(response.data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log("weatherData", weatherData);

  return (
    <>
      {/* {headerShow ? <Header /> : null}
      <button onClick={() => setHeaderShow(!headerShow)}>SHOW </button> */}
      {/* <h1>REACT HOOKS</h1> */}
      {/* 
      <h1 onClick={() => setCount(++count)}>COUNTER : {count} </h1>
      <h1 onClick={() => settoggle(!toggle)}> Toggle </h1> */}
      <h1> CITY NAME : {weatherData?.name} </h1>
      <h1> CITY TEMP : {weatherData?.main?.temp} </h1>
    </>
  );
}

export default App;


// https://we.tl/t-L6nyYNfgp2
