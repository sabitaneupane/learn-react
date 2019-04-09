import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div> 
          <ul className="nav">
            <li className="nav-item">
              <NavLink to="/" activeClassName="activeLink" exact={true}> Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/topics" activeClassName="activeLink"> Topics </NavLink>
            </li>
          </ul> <hr/>
      </div>
    );
  }
}

export default Navbar;
