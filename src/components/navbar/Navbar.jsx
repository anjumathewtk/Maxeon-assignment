import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">Maxeon</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span />
          <span />
          <span />
        </label>
      </div>
      <div className="nav-links">
        <a href="#" target="_blank">
          Products
        </a>
        <a href="#" target="_blank">
          Features
        </a>
        <a href="#" target="_blank">
          Use Cases
        </a>
        <a href="#" target="_blank">
          Pricing
        </a>
        <a className="Login-button" href="#" target="_blank">
          Login
        </a>
      </div>
    </div>
  );
};
