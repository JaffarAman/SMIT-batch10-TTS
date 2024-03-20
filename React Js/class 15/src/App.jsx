import { useState } from "react";

import "./App.css";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import Example from "./pages/Example";
import AdminProtectedRoute, { StdProtectedRoute } from "./routes/ProtectedRoute";
import AuthRoute from "./routes/AuthRoute";
import StdList from "./pages/StdList";
import StdPortal from "./pages/Portal";
import StdLayout from "./components/StdLayout";
import Settings from "./pages/Settings";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route index element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Route>

        <Route element={<AdminProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stdlist" element={<StdList />} />
        </Route>

        <Route element={<StdProtectedRoute />}>
          <Route path="/portal" element={<StdPortal />} />
          <Route path="/setting" element={<Settings />} />
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


export default App;
