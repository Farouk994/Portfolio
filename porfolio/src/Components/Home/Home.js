import React from "react";
import "./Home.css";
import Slide from 'react-reveal/Slide';

const Home = () => {
  return (
    <div className='container'>
      <div className='row upbox'>
          <Slide left>
        <div className='col-6 middle'>
          <h1 className='about'>I am Farouk Kisuule</h1>
          <p className="aboutMe">
            I'm Farouk, professional Web Developer with long time experience in
            building web applications<br></br><br></br>
            {/* <div class='btn-group' role='group' aria-label='Basic example'> */}
              <button type='button' class='btn btn-outline-success'>
                Portfolio
              </button>
              {/* <button type='button' class='btn btn-primary'>
                Middle
              </button>
              <button type='button' class='btn btn-primary'>
                Right
              </button> */}
            {/* </div> */}
          </p>
        </div>
        </Slide>
        <Slide right>

        <div className='col-6'>
          <img src='./me.png' alt='me'></img>
        </div>
        </Slide>
      </div>
    </div>
  );
};

export default Home;
