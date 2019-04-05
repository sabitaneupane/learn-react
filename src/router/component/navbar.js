import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div> 
          <ul className="nav">
            <li className="nav-item">
              <NavLink to="/" exact={true}> Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" > About </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" > Contact </NavLink>
            </li>
          </ul> <hr/>
      </div>
    );
  }
}

export default Navbar;
