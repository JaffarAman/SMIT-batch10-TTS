import React, { useEffect } from "react";

const Header = () => {
  //   useEffect(() => {
  //     console.log("first time");

  //     return () => {
  //       console.log("khatam tata bye bye!");
  //     };
  //   }, []);

  useEffect(() => {
    console.log("Online");

    return () => {
      console.log("offline");
    };
  }, []);
  
  return <h1>Header</h1>;
};

export default Header;
