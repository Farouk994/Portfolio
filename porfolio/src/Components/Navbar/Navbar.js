import React from "react";
import "./Navbar.scss";

// import { NavLink } from "react-router-dom"

function Navbar() {
  const styler = {
    color : "white"
  }
  return (
    <>
      <nav className='navbar navbar-icon-top navbar-expand-lg'>
        <div className='container align-middle'>
          <h1 className='px-4 topper'><span className="glitch" data-text="Kisuule">Farouk</span></h1>

          <div>
            <ul className='navbar-nav mr-auto listy'>
              <li class='nav-item' style={styler}>
                <a className='nav-link active item' aria-current='page' id="item" href='/'>
                  .Home<span id="para">()</span>
                </a>
              </li>
              <li class='nav-item' style={styler}>
                <a className='nav-link active item' aria-current='page' id="item" href='/'>
                  .About<span id="para">()</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' href='/' id="item">
                  .Work<span id="para">()</span>
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
                  .Contact<span id="para">()</span>
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
