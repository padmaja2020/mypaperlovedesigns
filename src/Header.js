import React from "react";
import "./Header.css";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <img
        src="/assets/images/mypaperlove-logo.jpg"
        alt="Logo"
        className="header__logo"
      ></img>
      <div className="header__nav">
        <div className="header__options">
          <span>Home</span>
        </div>
        <div className="header__options">
          <span>Shop</span>
        </div>
        <div className="header__options">
          <span>Wedding Stationary</span>
        </div>
        <div className="header__options">
          <span>Birthday Stationary</span>
        </div>
        <div className="header__options">
          <span>Holidays</span>
        </div>
        <div className="header__options">
          <span>About</span>
        </div>
        <div className="header__options">
          <span>Contact</span>
        </div>
      </div>
      <div className="header__basket">
        <ShoppingCartIcon />
      </div>
    </div>
  );
}

export default Header;
