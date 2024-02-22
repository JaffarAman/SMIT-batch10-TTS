import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [headerShow, setHeaderShow] = useState(false);

  // https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=69e67c8bdadf637986d2a5ad89d314c4&units=metric

  useEffect(() => {
    getLocation();
  }, []);

  const [weatherData, setWeatherData] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const fetchData = async (searchValue = "london") => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=69e67c8bdadf637986d2a5ad89d314c4&units=metric`
      );
      setWeatherData(response.data);
      console.log("response", response.data);
    } catch (error) {
      alert("Something went wrong");
      console.log("error", error);
    }
  };

  const fetchData2 = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=69e67c8bdadf637986d2a5ad89d314c4&units=metric`
      );
      setWeatherData(response.data);
      console.log("response", response.data);
    } catch (error) {
      alert("Something went wrong");
      console.log("error", error);
    }
  };

  // console.log("weatherData", weatherData);

  const searchHandler = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return;
    }
    fetchData(inputValue);
    setInputValue("");
    console.log("searchHandler", inputValue);
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, (error) => {
        fetchData();
        console.log("location block");
      });
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
    console.log("location allow");

    console.log(position, "position");
    fetchData2(position.coords.latitude, position.coords.longitude);
    // x.innerHTML = "Latitude: " + position.coords.latitude +
    // "<br>Longitude: " + position.coords.longitude;
  }

  return (
    <>
      <form onSubmit={searchHandler}>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </form>

      <h1> CITY NAME : {weatherData?.name} </h1>
      <h1> CITY TEMP : {weatherData?.main?.temp} </h1>
      <img
        src={`https://openweathermap.org/img/w/${weatherData?.weather[0]?.icon}.png`}
        alt=""
      />
    </>
  );
}

export default App;

// https://we.tl/t-L6nyYNfgp2
