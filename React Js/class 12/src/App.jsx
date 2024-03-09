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
import Dashboard from "./pages/Dashboard";
import Example from "./pages/Example";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthRoute from "./routes/AuthRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/abc" element={<ABC />} />
          <Route path="/abc1" element={<ABC1 />} />
        </Route>
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

const ABC = () => {
  return <h1>ABC</h1>;
};

const ABC1 = () => {
  return <h1>ABC1</h1>;
};

export default App;
