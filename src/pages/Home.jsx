import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Greet from "../components/greet/Greet";
import NavBar from "../components/NavBar/NavBar";

function Home() {
  const [showGreet, setShowGreet] = useState(true);

  return (
    <div>
      <AnimatePresence>
        {showGreet ? (<Greet onClose={() => setShowGreet(false)} />) : (
          <div>
            <NavBar />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
