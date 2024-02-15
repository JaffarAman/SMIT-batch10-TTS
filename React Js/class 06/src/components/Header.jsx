import React from "react";
import App from "../App";

// const Header = (props) => {
const Header = ({ myNumber, myNumber2 }) => {
  // 1st way
  //   console.log("props", props.myNumber);
  //   console.log("props", props.myNumber2);
  // 2nd way
  //   const { myNumber, myNumber2 } = props;
  console.log("myNumber, myNumber2", myNumber, myNumber2);
  return (
    <div>
      <h1>HEADER {myNumber} </h1>
   
    </div>
  );
};

export default Header;
