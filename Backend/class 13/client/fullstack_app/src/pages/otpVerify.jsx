import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";

const OtpVerify = () => {
  const { state } = useLocation();
  console.log("location", state);
  const navigate = useNavigate();
  const [code, setcode] = useState("");

  useEffect(() => {
    if (!state?.email) {
      navigate("/");
    }
  }, []);

  const otpHandler = async () => {
    try {
      const obj = {
        email: state?.email,
        otp: code,
      };
      const res = await axios.post(`${BASE_URL}/otpverification`, obj);
      console.log("res", res);
      navigate("/");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <h1>otpVerify</h1>
      <input
        type="text"
        placeholder="CODE"
        value={code}
        onChange={(e) => setcode(e.target.value)}
      />

      <br />
      <br />
      <button onClick={otpHandler}>otpVerify</button>
    </div>
  );
};

export default OtpVerify;
