import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Greet from "../components/greet/Greet";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/footer/Footer";

function Home() {
  const [showGreet, setShowGreet] = useState(true);
  useEffect(() => {
    if (showGreet) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showGreet]);

  return (
    <div>
      <AnimatePresence mode="wait">
        {showGreet ? (
          <motion.div
            key="greet"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="gradient-bg fixed inset-0"
          >
            <Greet onClose={() => setShowGreet(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <NavBar />



            <Footer/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;