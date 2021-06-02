/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Portfolio.css";
import "./Portfolio.scss";
import Slide from "react-reveal/Slide";
import { NavLink } from "react-router-dom"
// import Roll from "react-reveal/Roll";

const Portfolio = () => {
  return (
    <div class='portfolio container'>
      {/* <h1> */}
        {/* <strong className='strong'>.work( )</strong> */}
      {/* </h1> */}
      <br></br>
      <br></br>
      <div className='row big'>
        <div className='col-md-12 port '>
          <Slide bottom cascade>
            <h2>
              Splittish<strong className='strong'>.work( )</strong>
            </h2>
            <p className='lead '>
              Keep track of your finances and SAVE UP with all your collegues
              and friends
            </p>
            <h3>Description</h3>
            <div>
              <p>
                <em>
                  <strong>
                    ' Splittish is a cost sharing app that helps its users to
                    monitor their finances by allowing them to split bills with
                    friends, family, roommates etc. A new wallet can be created,
                    an expense added and the group can decide how to split the
                    bill. The app also allows its users to track their expenses,
                    spending and budgeting.'
                  </strong>
                </em>
              </p>
            </div>
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
            <h3>Technologies</h3>
            <ul>
              <li>Bootstrap/CSS3/HTML5</li>
              <li>JQuery</li>
              <li>Git/GitHub</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Express-session</li>
              <li>Bcrypt.js</li>
              <li>Handlebars</li>
              <li>Heroku</li>
              <li>MySQL</li>
              <li>Sequelize ORM</li>
            </ul>
            <div class='content'>
              <div class='buttoon'>
                <span className='robo'>Link</span>
              </div>
            </div>

            <br></br>
          </Slide>
        </div>
        <Slide right cascade>
          <div className='col boxy'>
            {/* <img src="./split.jpg" alt="" className="fix-img"></img> */}
            <img
              src='./split.jpg'
              className='img-fluid'
              alt='Responsive image'
            ></img>
            <br></br>
            {/* <div className='buttons btn-group'>
              <button>Javascript</button>
              <button>MySQL</button>
              <button>Nodejs</button>
            </div> */}
          </div>
        </Slide>
      </div>
      <div className='row big'>
        <div className='col-md-12 port '>
          <Slide bottom cascade>
            <h2>
              GAIDO<strong className='strong'>.work( )</strong>
            </h2>
            <p className='lead '>
              Keep track of your finances and SAVE UP with all your collegues
              and friends
            </p>
            <h3>Description</h3>
            <div>
              <p>
                <em>
                  <strong>
                    ' Gaido is a restaurant app that helps its users to
                    locate their favourite restaurants by allowing them to filter and rate different restaurants 
                    they would like to visit in different cities. A user can add their location to 
                    the app and they will get all restaurants in the area around them.'
                  </strong>
                </em>
              </p>
            </div>
            <ul>
              <li>
               Used Zomato API for getting restaurants and also filter according to cities,cuisines, categories and many more.

              </li>
              <li>
               Enables travelers to locate restaurants with ease by enabling them choose from a wide selection
              </li>
            </ul>
            <h3>Technologies</h3>
            <ul>
              <li>Bootstrap/CSS3/HTML5</li>
              <li>JQuery</li>
              <li>Git/GitHub</li>
              <li>Heroku</li>
              <li>APIs</li>
            </ul>
            <div class='content'>
              <div class='buttoon'>
                <span className='robo'>Link</span>
              </div>
            </div>
            <br></br>
            <br></br>
            <hr></hr>
          </Slide>
        </div>

        <Slide right cascade>
          <div className='col boxy'>
            {/* <img src="./split.jpg" alt="" className="fix-img"></img> */}
            <img
              src='./gaido.JPEG'
              className='img-fluid'
              // alt='Responsive image'
            ></img>
            <br></br>
            {/* <div className='buttons btn-group'>
              <button>Javascript</button>
              <button>JQUERY</button>
              <button>HTML/CSS</button>
            </div> */}
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Portfolio;
