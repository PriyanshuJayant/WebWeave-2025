import React from "react";
import { motion } from "framer-motion";
import './navbar.scss'
import { Search, User, Heart, ShoppingCart } from 'lucide-react';

function NavBar() {
  return (
    <nav className="merto-navbar">
      {/* Main navbar */}
      <div className="merto-navbar__container">
        <div className="merto-navbar__header">
          {/* Logo */}
          <div className="merto-navbar__logo">
            Merto
          </div>
          
          {/* Search bar */}
          <div className="merto-navbar__search">
            <div className="merto-navbar__search-container">
              <input
                type="text"
                placeholder="Search for products"
                className="merto-navbar__search-input"
              />
              <button className="merto-navbar__search-button">
                <Search />
              </button>
            </div>
          </div>
          
          {/* Right side icons */}
          <div className="merto-navbar__actions">
            <button className="merto-navbar__action-btn">
              <User />
              <span>Account</span>
            </button>
            
            <button className="merto-navbar__action-btn merto-navbar__action-btn--icon-only">
              <Heart />
              <span className="merto-navbar__badge">0</span>
            </button>
            
            <button className="merto-navbar__action-btn merto-navbar__action-btn--icon-only">
              <ShoppingCart />
              <span className="merto-navbar__badge">0</span>
            </button>
          </div>
        </div>
      </div>
      
    </nav>
  );
}

export default NavBar;
