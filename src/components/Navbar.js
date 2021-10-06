import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/books',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <header>
      <nav>
        <div className="menu">
          <h1>Bookstore CMS</h1>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className="nav-link"
                  exact="true"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
