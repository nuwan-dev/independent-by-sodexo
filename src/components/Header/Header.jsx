import React from "react";
import "./Header.css";
import sodexo_top_navhamburger_icon from "../../assets/Icons/sodexo-top-nav-hamburger-icon.svg"
import sodexo_top_nav_logo from "../../assets/Icons/sodexo-top-nav-logo.svg"

function Header() {
  return (
    <div>
      {/* header */}
      <header className="sodexo-header-container">
        <div className="sodexo-header">
          <nav className="sodexo-top-nav-container">
            <div className="sodexo-top-nav-hamburger">
              <img
                src={sodexo_top_navhamburger_icon}
                alt=""
              />
              <p>Menu</p>
            </div>
            <ul className="sodexo-top-nav"></ul>
            <img
              src={sodexo_top_nav_logo}
              alt="sodexo logo"
              className="sodexo-top-nav-logo"
            />
            <a href="/" className="sodexo-top-nav-btn">
              Partner with us
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
