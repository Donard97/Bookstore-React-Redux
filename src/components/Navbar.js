import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light m-4">
    <div className="container-fluid">
      <Link className="navbar-brand  fw-bold" to="/">
        <h4 className="rangi"> Bookstore CMS </h4>
      </Link>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item m-3 text-black">
            <Link className="nav-link" to="/">
              Books
            </Link>
          </li>
          <li className="nav-item m-3 text-black">
            <Link className="nav-link" to="/categories">
              Categories
            </Link>
          </li>
        </ul>
      </div>
      <div className="d-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill rangi" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
      </div>
    </div>
  </nav>
);

export default Navbar;
