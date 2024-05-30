import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { addCounter } from "../store/slices/counter/counterSlice";
import { loginAction } from "../store/slices/auth/authActions";
// import { loginAction } from "../store/slices/auth/autSlice";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);
  console.log("selector", value);

  const [isloading, setIsloading] = useState(false);

  const { loading, isError } = useSelector((state) => state.auth);
  console.log("isError", isError);
  const handlerlogin = async () => {
    console.log(email, password);
    try {
      // setIsloading(true);
      const obj = {
        email,
        password,
      };
      dispatch(loginAction(obj));
      // const response = await axios.post(`${BASE_URL}/login`, obj);
      // setIsloading(false);

      // console.log("response", response);
      // localStorage.setItem("token", response.data.token);
      // navigate("/dashboard");
    } catch (error) {
      // setIsloading(false);
      console.log("error", error.message);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          dispatch(addCounter("jAFFAR"));
        }}
      >
        COUNTER
      </button>
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
      <button onClick={handlerlogin}>{loading ? "loading..." : "LOGIn"}</button>
    </div>
  );
};

export default Login;
