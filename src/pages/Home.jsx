// Home.jsx (Updated)
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Greet from "../components/greet/Greet";
import NavBar from "../components/NavBar/NavBar";
import "../banner.css"; // Import the banner CSS

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
            {/* Integrated Banner Component */}
            <div className="banner">
              <div className="slider" style={{"--quantity": 5}}>
                <div className="item" style={{"--position": 1}}>
                  <img src="/images/dragon_1.jpg" alt="Dragon 1" />
                </div>
                <div className="item" style={{"--position": 2}}>
                  <img src="/images/dragon_2.jpg" alt="Dragon 2" />
                </div>
                <div className="item" style={{"--position": 3}}>
                  <img src="/images/dragon_3.jpg" alt="Dragon 3" />
                </div>
                <div className="item" style={{"--position": 4}}>
                  <img src="/images/dragon_4.jpg" alt="Dragon 4" />
                </div>
                <div className="item" style={{"--position": 5}}>
                  <img src="/images/dragon_5.jpg" alt="Dragon 5" />
                </div>
              </div>
              <div className="content">
                <h1 data-content="AURORA">AURORA</h1>
                <div className="model"></div>
              </div>
            </div>



            {/* <Footer/> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;