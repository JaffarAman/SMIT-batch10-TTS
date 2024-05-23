import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { io } from "socket.io-client";

function App() {
  const socket = useMemo(() => io("http://localhost:8000"), []);

  const [socketID, setSocketID] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [room, setroom] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket", socket.id);
      setSocketID(socket.id);
    });

    socket.on("welcome", (payload) => console.log(payload));

    // socket.on("welcome", (payload) => {
    //   console.log(payload);
    // });

    // socket.on("send", (payload) => {
    //   console.log("send", payload);
    // });
    socket.on("message", (payload) => {
      console.log("message", payload);
    });
  }, []);

  const sendMessage = () => {
    // socket.emit("user-message", inputValue);
  
    
  
  };

  return (
    <>
      <h1>SOCKET ID :{socketID}</h1>

      <input
        type="text"
        placeholder="room"
        onChange={(e) => setroom(e.target.value)}
      />

      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={sendMessage}>SUBMIT</button>
    </>
  );
}

export default App;
