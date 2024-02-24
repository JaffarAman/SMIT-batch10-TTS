import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Home copy";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/notFound";
import JobDetails from "./pages/JobDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}

      <Routes>
        <Route index element={<Home />} />

        {/* <Route path="/jobdetail/:id" element={<JobDetails />} /> */}
        <Route path="/jobdetail/:jid" element={<JobDetails />} />
      </Routes>

      {/* <Home />
      <About />
      <Contact /> */}
    </>
  );
}

export default App;

// https://we.tl/t-LMAIVqjp4w
