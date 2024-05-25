import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { BASE_URL } from "../config";

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [fullName, setfullName] = useState("");
  const [gender, setgender] = useState("");
  const [age, setage] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const navigate = useNavigate();

  const handlerSignup = async () => {
    console.log(email, password, fullName, gender, age, phoneNumber);

    try {
      const obj = {
        fullName,
        email,
        password,
        age,
        phoneNumber,
        gender,
      };
      const response = await axios.post(`${BASE_URL}/signup`, obj);
      console.log("response", response);

      navigate("/otp", {
        state: {
          email,
        },
      });
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      const msg = error?.response?.data?.message || error.message;
      toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div>
      <h1>Signup</h1>
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
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setfullName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="age"
        value={age}
        onChange={(e) => setage(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Phone number"
        value={phoneNumber}
        onChange={(e) => setphoneNumber(e.target.value)}
      />
      <br />
      <br />

      <input
        type="text"
        placeholder="Gender"
        value={gender}
        onChange={(e) => setgender(e.target.value)}
      />
      <br />
      <br />

      <Link to="/">Already Account?</Link>

      <br />
      <br />
      <button onClick={handlerSignup}>Signup</button>
    </div>
  );
};

export default Signup;
