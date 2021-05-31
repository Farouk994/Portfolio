import React from "react";
import "./Tech.css";
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';

const Tech = () => {
  return (
    <div className="">
      <h1 className='lang' id=''>
      <strong className='strong'>.about( )</strong>
      </h1>
      <p className='info'>
        I am a Full Stack Web Developer specialized in both front-end and
        back-end.
      </p>
      <div className='cardly'></div>

      <div className='newWrapper row'>
        <div className='skill col-md-6'>
          <div class='wrapper'>
          <Roll left cascade>
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
                style={{ width: "90%" }}
              >
                <span>90%</span>
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
        <div className='col-md-5'>
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
