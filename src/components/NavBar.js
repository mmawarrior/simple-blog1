import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
  <NavLink to="/" className="title">
  </NavLink>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/reviews" onClick={closeMenu} activeClassName="active">
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" onClick={closeMenu} activeClassName="active">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" onClick={closeMenu} activeClassName="active">
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/forum" onClick={closeMenu} activeClassName="active">
            Forum
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" onClick={closeMenu} activeClassName="active">
            signUp
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
