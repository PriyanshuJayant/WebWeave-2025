import React from "react";
import { motion } from "framer-motion";
import Logo from '../images/Logo2.png'
import "./Greet.scss";

function Greet() {
  return (
    <div>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  
                        0 1 0 0 0  
                        0 0 1 0 0  
                        0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className="animation-container">
          {/* Logo text */}
          <motion.div
            className="hello-text"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: [100, 0, -20, -250], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              times: [0, 0.25, 0.75, 1],
              ease: "easeInOut",
            }}
          >
            <img src={Logo}/>
          </motion.div>

          {/* Main animated text */}
          <motion.div
            className="animated-text"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 4.2, duration: 2, ease: "easeOut" }}
          >
            Meet the <br /> Online Store, again
          </motion.div>

          {/* Button */}
          <motion.button
            className="action-button"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 6.7, duration: 0.8, ease: "easeOut" }}
          >
            <span className="arrow">→</span>
          </motion.button>
        </div>

        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </div>
  );
}

export default Greet;
