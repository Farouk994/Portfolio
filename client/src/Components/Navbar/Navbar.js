import React from "react";
import "./Navbar.scss";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const styler = {
    color: "white",
  };

  const activeStyle = {
    color: "white",
  };
  return (
    <>
      <nav className='navbar navbar-expand-md'>
        {/* <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
         >
          <span className='navbar-toggler-icon'></span>
        </button> */}
        <h1 className='px-4 topper'>
          <span className='glitch' data-text='Kisuule'>
            <NavLink activeStyle={activeStyle} exact to='/'>
              Farouk
            </NavLink>
          </span>
        </h1>
        <div className="navbutton">
        <button
          className='navbar-toggler nn'
          type='button'
          data-toggle='collapse'
          data-target='#navbarCollapse'
          aria-controls='navbarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon' style={{ color : "white"}}></span>
          <i class="fas fa-terminal"></i>
        </button>
        </div>
        <div className=' align-middle'>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav mr-auto px-5 listy'>
              <li class='nav-item' style={styler}>
                <NavLink
                  activeStyle={activeStyle}
                  className='nav-link active item'
                  aria-current='page'
                  id='item'
                  to='/'
                >
                  .Home<span id='para'>()</span>
                </NavLink>
              </li>
              <li class='nav-item' style={styler}>
                <NavLink
                  activeStyle={activeStyle}
                  className='nav-link active item'
                  aria-current='page'
                  id='item'
                  to='/about'
                >
                  .About<span id='para'>()</span>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link active'
                  activeStyle={activeStyle}
                  to='/work'
                  id='item'
                >
                  .Work<span id='para'>()</span>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  activeStyle={activeStyle}
                  className='nav-link active'
                  to='/contact'
                  tabindex='-1'
                  //   aria-active='true'
                  id='item'
                >
                  .Contact<span id='para'>()</span>
                </NavLink>
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
