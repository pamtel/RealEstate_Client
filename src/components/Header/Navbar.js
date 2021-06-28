import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" activeClassName="active" className="nav-logo">
            Real Estate
          </NavLink>
        

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink exact to="/forSale" activeClassName="active" className="nav-links" onClick={handleClick}>
              Sale
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink exact to="/toRent" activeClassName="active" className="nav-links" onClick={handleClick}>
              Rent
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink exact to="/sellProperty" activeClassName="active" className="nav-links" onClick={handleClick}>
              Property
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink exact to="/contact" activeClassName="active" className="nav-links" onClick={handleClick}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars" } aria-hidden="true"></i>
        </div>
       </div>
      </nav>
    </>
  );
};

export default Navbar;
