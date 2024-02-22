import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>NAVBAR</h1>
        {/* <a href="/">HOME</a>
        <a href="/about">About</a> */}
        <Link to={"/"}>HOME</Link>
        <Link to={"/about"}>ABOUT</Link>
      </div>
      <Routes>
        <Route path="*" element={<NotFOund />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

const NotFOund = () => {
  return <h1>404 not found</h1>;
};

export default App;

// today class
// https://we.tl/t-uyRTBBV3U8

//last class
// https://we.tl/t-FKPc9877Xs
