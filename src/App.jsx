import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Greet from "./components/greet/Greet";

function App() {
  const [showGreet, setShowGreet] = useState(true);

  const handleGreetClose = () => {
    setShowGreet(false); // hide preloader after animation or button click
  };

  return (
    <div className="App">
      {/* {showGreet ? (
        <Greet onClose={handleGreetClose} />
      ) : (
        <Home />
      )} */}
      <Home/>
    </div>
  );
}

export default App;
