import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

  return(
    <nav>
      <ul>
        <li>
          <Link to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/users">
            Users
          </Link>
        </li>
        <li>
          <Link to="/repositories">
            Repositories
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;