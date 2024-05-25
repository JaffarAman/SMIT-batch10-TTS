import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handlerlogin = async () => {
    console.log(email, password);
    try {
      const obj = {
        email,
        password,
      };
      const response = await axios.post(`${BASE_URL}/login`, obj);
      console.log("response", response);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log("error", error.message);
    }
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <br />
      <br />

      <Link to="/signup">Account Signup?</Link>

      <br />
      <br />
      <button onClick={handlerlogin}>LOGIn</button>
    </div>
  );
};

export default Login;
