import React from "react";
import "./Navbar.css";

// import { NavLink } from "react-router-dom"

function Navbar() {
  const styler = {
    color : "white"
  }
  return (
    <>
      <nav className='navbar navbar-icon-top navbar-expand-lg'>
        <div className='container align-middle'>
          <h2 className='px-4 '><span><strong className="dot">.</strong>me( )</span></h2>

          <div>
            <ul className='navbar-nav mr-auto listy'>
              <li class='nav-item' style={styler}>
                <a className='nav-link active item' aria-current='page' id="item" href='/'>
                  Home
                </a>
              </li>
              <li class='nav-item' style={styler}>
                <a className='nav-link active item' aria-current='page' id="item" href='/'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' href='/' id="item">
                  Skills
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link active'
                  href='/'
                  tabindex='-1'
                //   aria-active='true'
                id="item"
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
