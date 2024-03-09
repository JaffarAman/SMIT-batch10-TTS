import React from "react";
import { Outlet } from "react-router-dom";

const Example = () => {
  return (
    <div>
      Example
      <Outlet />
    </div>
  );
};

export default Example;
