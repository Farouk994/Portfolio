import React from "react";
import "./Navbar.css";
// import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav className='navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark'>
        <div className='container align-middle'>
          <h2 className='px-4 '> Farouk<span><i class="fas fa-circle"></i></span>Kisuule </h2>

          <div>
            <ul className='navbar-nav mr-auto '>
              <li class='nav-item'>
                <a class='nav-link active' aria-current='page' href='/'>
                  Home
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link active' href='/'>
                  About
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link active' href='/'>
                  Skills
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link active'
                  href='/'
                  tabindex='-1'
                //   aria-active='true'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* <span class="navbar-text">
        Navbar text with an inline element
      </span> */}
        </div>
      </nav>

    </>
  );
}
export default Navbar;
