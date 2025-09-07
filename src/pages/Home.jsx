import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Greet from "../components/Greet";

function Home() {
  const [showGreet, setShowGreet] = useState(true);

  return (
    <div>
      <AnimatePresence>
        {showGreet && <Greet onClose={() => setShowGreet(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default Home;
