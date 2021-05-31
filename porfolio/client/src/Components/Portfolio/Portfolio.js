/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Portfolio.css";
import "./Portfolio.scss";
import Slide from "react-reveal/Slide";
// import Roll from "react-reveal/Roll";

const Portfolio = () => {
  return (
    <div class='portfolio container'>
      <h1>
        <strong className='strong'>.work( )</strong>
      </h1>
      <div className='row big'>
        <div className='col-md-6 port '>
          <Slide bottom cascade>
            <h2>
              Splittish<strong className='strong'>.work( )</strong>
            </h2>
            <p className='lead '>
              Keep track of your finances and SAVE UP with all your collegues
              and friends
            </p>
            <strong>
              <p>
                Splittish is a web platform that enables users to keep track of
                their finances and expenditure from anywhere and also inviting
                new friends to join in as well
              </p>
            </strong>
            <ul>
              <li>
                a database for finance operations to manage their wallets and
                have a rough idea of how much users spend on a monthly basis
              </li>
              <li>
                a marketplace for end-customers to plan for events by having one
                wallet to keep track of expenses.
              </li>
            </ul>
            <div class='content'>
              <div class='buttoon'><span className="robo">More</span></div>
            </div>
            
            <br></br>
          </Slide>
        </div>
        <Slide right cascade>
          <div className='col-md-6 boxy'>
            {/* <img src="./split.jpg" alt="" className="fix-img"></img> */}
            <img
              src='./split.jpg'
              className='img-fluid'
              alt='Responsive image'
            ></img>
            <br></br>
            <div className='buttons btn-group'>
              <button>Javascript</button>
              <button>MySQL</button>
              <button>Nodejs</button>
            </div>
          </div>
        </Slide>
      </div>
      <div className='row big'>
        <div className='col-md-6 port '>
          <Slide bottom cascade>
            <h2>
              GAIDO<strong className='strong'>.work( )</strong>
            </h2>
            <p className='lead '>
              Plan your next vacation destination by searching for your best
              cuisines and filtering out your best categories.
            </p>
            <strong>
              <p>
                This is a web application for searching for restaurants in any
                given area and also allows the user to view ratings and also
                grant user access in filtering out restaurants according to
                their
              </p>
            </strong>
            <ul>
              <li>Responsive web applications</li>
              <li>Explore new destinations and culture through cuisines</li>
            </ul>
            <div class='content'>
              <div class='buttoon'><span className="robo">More</span></div>
            </div>
            <br></br>
            <br></br>
            <hr></hr>
          </Slide>
        </div>

        <Slide right cascade>
          <div className='col-md-6 boxy'>
            {/* <img src="./split.jpg" alt="" className="fix-img"></img> */}
            <img
              src='./gaido.JPEG'
              className='img-fluid'
              // alt='Responsive image'
            ></img>
            <br></br>
            <div className='buttons btn-group'>
              <button>Javascript</button>
              <button>MySQL</button>
              <button>Nodejs</button>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Portfolio;
