import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../config";

const Dashboard = () => {
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${BASE_URL}/getpost`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("res", res);
    })();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
