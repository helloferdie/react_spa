import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const style = {
        color: 'white',
        textDecoration: 'none'
    }

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
          <li><Link to='/' style={style}>Home</Link></li>
          <li><Link to='/about' style={style}>About</Link></li>
          <li><Link to='/shop' style={style}>Shop</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
