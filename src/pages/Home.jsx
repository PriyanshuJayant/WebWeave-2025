import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Greet from "../components/greet/Greet";
import NavBar from "../components/NavBar/NavBar";
import ChooseButton from "../components/ChooseButton/ChooseButton";
import "../banner.css";
import "./Home.css"


function Home() {
  const greetShownRef = useRef(false);

  const [showGreet, setShowGreet] = useState(() => {
    const hasBeenShown = sessionStorage.getItem("greetShown") === "true";
    if (hasBeenShown) {
      greetShownRef.current = true;
    }
    return !hasBeenShown;
  });

  useEffect(() => {
    if (showGreet) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showGreet]);

  const handleCloseGreet = () => {
    sessionStorage.setItem("greetShown", "true");
    greetShownRef.current = true;
    setShowGreet(false);
  };

  return (
    <div className="HomeComponent">
      <AnimatePresence mode="wait">
        {showGreet && !greetShownRef.current ? (
          <Greet onClose={handleCloseGreet} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <ChooseButton/>
            <div className="banner">
              <div className="slider" style={{ "--quantity": 5 }}>
                <div className="item" style={{ "--position": 1 }}>
                  <img src="/images/dragon_1.jpg" alt="Dragon 1" />
                </div>
                <div className="item" style={{ "--position": 2 }}>
                  <img src="/images/dragon_2.jpg" alt="Dragon 2" />
                </div>
                <div className="item" style={{ "--position": 3 }}>
                  <img src="/images/dragon_3.jpg" alt="Dragon 3" />
                </div>
                <div className="item" style={{ "--position": 4 }}>
                  <img src="/images/dragon_4.jpg" alt="Dragon 4" />
                </div>
                <div className="item" style={{ "--position": 5 }}>
                  <img src="/images/dragon_5.jpg" alt="Dragon 5" />
                </div>
              </div>
              <div className="content">
                <h1 data-content="AURORA">AURORA</h1>
                <div className="model"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
