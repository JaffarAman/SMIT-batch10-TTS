import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  return localStorage.getItem("uid") ?
    JSON.parse(localStorage.getItem("user")).type == "admin" ?
      < Outlet />
      : <Navigate to={"/portal"} />
    : <Navigate to={"/"} />;
};


const StdProtectedRoute = () => {
  return localStorage.getItem("uid") ?
    JSON.parse(localStorage.getItem("user")).type == "std" ?
      < Outlet />
      : <Navigate to={"/dashboard"} />
    : <Navigate to={"/"} />;
};


export default AdminProtectedRoute;
export {
  StdProtectedRoute
}