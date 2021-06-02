/* eslint-disable no-undef */
import React from "react";
import "./Tech.css";
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import About from "./About"

const Tech = () => {
  return (
    <div className="">
  
       <About/>
    
      <div className='newWrapper row'>
        <div className='skill col-md-12'>
          <div class='wrapper'>
          <Roll left cascade>
            <h1>Skills</h1>
            <span class='title'>JAVASCRIPT</span>
            <div class='progress'>
              <div
                class='progress-bar'
                role='progressbar'
                aria-valuenow='90'
                aria-valuemin='0'
                aria-valuemax='100'
                style={{ width: "77%" }}
              >
                <span>77%</span>
              </div>
            </div>

            <span class='title'>HTML/CSS</span>
            <div class='progress'>
              <div
                class='progress-bar'
                role='progressbar'
                aria-valuenow='40'
                aria-valuemin='0'
                aria-valuemax='100'
                style={{ width: "83%" }}
              >
                <span>83%</span>
              </div>
            </div>

            <span class='title'>REACT</span>
            <div class='progress'>
              <div
                class='progress-bar'
                role='progressbar'
                aria-valuenow='40'
                aria-valuemin='0'
                aria-valuemax='100'
                style={{ width: "65%" }}
              >
                <span>65%</span>
              </div>
            </div>


            <span class='title'>NODE / EXPRESS</span>
            <div class='progress'>
              <div
                class='progress-bar'
                role='progressbar'
                aria-valuenow='60'
                aria-valuemin='0'
                aria-valuemax='100'
                style={{ width: "70%" }}
              >
                <span>70%</span>
              </div>
            </div>

            <span class='title'>MySQL</span>
            <div class='progress'>
              <div
                class='progress-bar'
                role='progressbar'
                aria-valuenow='60'
                aria-valuemin='0'
                aria-valuemax='100'
                style={{ width: "65%" }}
              >
                <span>65%</span>
              </div>
            </div>

            <span class='title'>MONGO</span>
            <div class='progress'>
              <div
                class='progress-bar'
                role='progressbar'
                aria-valuenow='70'
                aria-valuemin='0'
                aria-valuemax='100'
                style={{ width: "73%" }}
              >
                <span>73%</span>
              </div>
            </div>
          </Roll>
          </div>
        </div>
        <div className='container'>
        <Fade bottom cascade>
          <p id='tools'>
            My current toolset includes Javascript Language, Nodejs, Express,
            React, Redux, and all the other various frameworks, libraries and
            technologies related to them.
          </p>
          <ul>
            <li>Responsive Web Design</li>
            <li>leading/co-developing the back-end and front-end,</li>
            <li>setting up the CI/CD,</li>
            <li>mentoring the team</li>
            <li>estimating tasks</li>
            <li>researching possible techs</li>
            <li>leading, launching and monitoring the project</li>
          </ul>
          </Fade>
        </div>
      </div>
      <hr style={{ color :"white" }}></hr>
    </div>
  );
};

export default Tech;
