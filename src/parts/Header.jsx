import React from "react";

import { NavLink } from "react-router-dom";
import Button from "elements/Button";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand">
            <h1 className="m-0">
              <NavLink to="/" className="title-logo">
                Lan<span style={{ color: "#01c7da" }}>d</span>er
              </NavLink>
              <span className="line-logo"></span>
            </h1>
          </div>
          <button id="header-nav-toggle" className="header-nav-toggle">
            <span className="screen-reader">Menu</span>
            <span className="hamburger">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <nav id="header-nav" className="header-nav">
            <div className="header-nav-inner">
              <ul className="list-reset text-xxs header-nav-right">
                <li>
                  <NavLink to="">Home</NavLink>
                </li>
                <li>
                  <NavLink to="">Pricing</NavLink>
                </li>
                <li>
                  <NavLink to="">Showcase</NavLink>
                </li>
                <li>
                  <NavLink to="">Partner</NavLink>
                </li>
              </ul>
              <ul className="list-reset header-nav-right">
                <li>
                  <Button isPrimary isWideMobile isSmall>
                    Explore with us
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
