import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  const styler = {
    color: "white",
  };

  const activeStyle={
    color: "white"
  }
  return (
    <>
      <nav className='navbar navbar-icon-top navbar-expand-lg'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='container align-middle'>
          <h1 className='px-4 topper'>
            <span className='glitch' data-text='Kisuule'>
              <NavLink activeStyle={activeStyle} exact to="/">
                Farouk
              </NavLink>
            </span>
          </h1>

          <div>
            <ul className='navbar-nav mr-auto listy'>
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
                <NavLink className='nav-link active' activeStyle={activeStyle} to='/work' id='item'>
                  .Work<span id='para'>()</span>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                activeStyle={activeStyle}
                  className='nav-link active'
                  to='/'
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
