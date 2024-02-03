import React from "react";

const Header = (props) => {
  console.log("Header props", props.myName);
  return (
    <div>
      <h1>HEADER: {props.myName} </h1>
    </div>
  );
};

export default Header;
