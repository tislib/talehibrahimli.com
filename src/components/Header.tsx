import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Link className="site-header__logo" to="/">
              Taleh Ibrahimi
            </Link>

            <ul className="site-header__nav hidden-xs">
              <li>
                <Link to="/">About Me</Link>
              </li>

              <li>
                <Link to="/resume">Resume</Link>
              </li>

              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>

              <li>
                <Link to="/blog">Blog</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <button className="offcanvas-toggle visible-xs">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
