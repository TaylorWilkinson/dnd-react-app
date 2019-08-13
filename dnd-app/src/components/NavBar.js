import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/skills">Skills</Link>
      </li>
      <li>
        <Link to="/equipment">Equipment</Link>
      </li>
      <li>
        <Link to="/actions">Actions</Link>
      </li>
      <li>
        <Link to="/spells">Spells</Link>
      </li>
    </ul>
  </nav>
)

export default NavBar;
