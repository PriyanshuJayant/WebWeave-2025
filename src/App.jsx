import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Greet from "./components/greet/Greet";
import {Routes, Route,BrowserRouter } from "react-router-dom";
import PC from "./pages/PCProducts/PC";
import Console from "./pages/ConsoleProducts/Console";

function App() {
  const [showGreet, setShowGreet] = useState(true);

  const handleGreetClose = () => {
    setShowGreet(false); // hide preloader after animation or button click
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pc" element={<PC />} />
          <Route path="/console" element={<Console />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
