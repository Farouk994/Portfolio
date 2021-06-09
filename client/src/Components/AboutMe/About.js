/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import * as Icons from '@fortawesome/fontawesome-free-solid'
// import { MBDIcon } from ""
// import Slide from "react-reveal/Slide";
// import { withRouter } from "react-router";
import "./Tech.css"

const About = () => {
  return (
    <div>
      {/* <div className='container'> */}
        <div className="">
          <div className='row wider mt-0'>
            <div className='col-md-6 col1'>
              <h1 className="intro">
                Hi. I’m Farouk, nice to meet <br></br>you. Please take a look <br></br>around!
              </h1>
            </div>
            <div className='col-md-4 col2'>
              <br></br>
              <p className="passion">
              {/* <i class="fas fa-camera"></i> */}
              {/* <MDBIcon icon="address-book" /> */}
              {/* <i class="fas fa-camera-retro"></i> */}

                I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small-businesses. What would you do if
                you had a software expert available at your fingertips?
              </p>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default About;
