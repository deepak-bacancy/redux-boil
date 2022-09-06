import React from 'react';
import {Link} from "react-router-dom"


function Header() {
  return (
    <div>
     <h1>Header</h1>
     <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/products">Product Listing</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Header;
