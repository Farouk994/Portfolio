/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./Home.css";
import Slide from "react-reveal/Slide";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        <div className='container cover'>
          <div className='row upbox'>
            <Slide left>
              <div className='col-lg-6 middle'>
                <h1 className='about'>
                  <em className='slide'>f</em>arouk
                  <strong className='strong'>
                    .is<i class='fas fa-angle-left fa-lg'></i>
                    <i class='fas fa-angle-right fa-lg'></i>
                  </strong>
                </h1>

                <p className='aboutMe'>
                  /** Full Stack Web Developer specialized in both front-end and
                  back-end.*/{" "}
                  <span className='fof'>
                    <em></em>
                  </span>
                  {/* <span classame="fof"></span> */}
                  <br></br>
                  <br></br>
                
                </p>
              </div>
            </Slide>
            <Slide right>
              <div className='col-lg-6'>
                <img
                  src='./me.png'
                  data-src-600px='me-600px.png'
                  data-src-800px='me-800px.png'
                  alt='me'
                  className='image image-fluid'
                ></img>
              </div>
            </Slide>
          </div>
          {/* <hr classNme='mt-0'></hr> */}
          <div className='row container align'>
            <div className='col-lg-12'>
              <NavLink to='/about'>
                <button className=' button-3 px-5'>View</button>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
