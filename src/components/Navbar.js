import { Component } from "react";
import "./NavbarStyles.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import Travel from "../assets/logo3.png"

class Navbar extends Component {
  // Set state
  // Make Handleclick Function

  render() {
    return (
      <header id="header">
      <div className="main-container">
        <div className="row-100">
          <div className="logo-section">
            <a href="">
              <figure>
                <img src={Travel} alt="logo" />
              </figure>
            </a>
          </div>
          <div className="nav-menu">
            <ul className="menu-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Navbar;
