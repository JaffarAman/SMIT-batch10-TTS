import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [userName, setUserName] = useState("Jaffar Aman");

  return (
    <>
      <Header myName={userName} age={20} />
    </>
  );
}

export default App;
