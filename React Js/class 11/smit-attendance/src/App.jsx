import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
