import React from "react";
import { motion } from "framer-motion";
import './navbar.css'

function NavBar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }} // Start off-screen above
      animate={{ y: 0, opacity: 1 }} // Slide into place
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="NavBar"
    >
  <div className="Logo">MyStore</div>

  <div className="NavTabs">
    <div className="NavItem">Home</div>
    <div className="NavItem">Products</div>
    <div className="NavItem">Contact</div>
  </div>

  <div className="CartButton">🛒</div>
    </motion.div>
  );
}

export default NavBar;
