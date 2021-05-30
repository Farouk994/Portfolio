import React from "react";
import "./Portfolio.css";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";

const Portfolio = () => {
  return (
    <div class='portfolio container'>
      <h1>
        <strong className='strong'>.work( )</strong>
      </h1>
      <div className='row big'>
        <div className='col-md-6 port '>
          <Fade bottom cascade>
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
                their friends to join in as well
              </p>
            </strong>
            <ul>
              <li>
                a database for finanace operations to manage their wallets and
                have a rough idea of how much users spend on a monthly basis
              </li>
              <li>
                a marketplace for end-customers to plan for events by having one
                wallet to keep track of expenses.
              </li>
            </ul>
            <button>More Details...</button>
            <br></br>
          </Fade>
        </div>
        <Roll right cascade>
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
        </Roll>
      </div>
      <div className='row big'>
        <div className='col-md-6 port '>
          <Fade bottom cascade>
            <h2>
              GAIDO<strong className='strong'>.work( )</strong>
            </h2>
            <p className='lead '>
              Keep track of your finances and SAVE UP with all your collegues
              and friends
            </p>
            <strong>
              <p>
                Splittish is a web platform that enables users to keep track of
                their finances and expenditure from anywhere and also inviting
                their friends to join in as well
              </p>
            </strong>
            <ul>
              <li>
                a database for finanace operations to manage their wallets and
                have a rough idea of how much users spend on a monthly basis
              </li>
              <li>
                a marketplace for end-customers to plan for events by having one
                wallet to keep track of expenses.
              </li>
            </ul>
            <button>More Details...</button>
          </Fade>
          <br></br>
        </div>

        <Roll right cascade>
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
        </Roll>
      </div>
    </div>
  );
};

export default Portfolio;
