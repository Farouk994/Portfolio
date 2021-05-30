import React from "react";
import "./Home.css";
import Slide from "react-reveal/Slide";

const Home = () => {
  return (
    <>
      <header>
        <div className='container cover'>
          <div className='row upbox'>
            <Slide left>
              <div className='col-lg-6 middle'>
                <h1 className='about'>farouk.is( )</h1>
                <p className='aboutMe'>
                  Full Stack Web Developer specialized in both
                  front-end and back-end.
                  <br></br>
                  <br></br>
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
                <img src='./me.png' alt='me' className='image'></img>
              </div>
            </Slide>
          </div>
          <hr classNme='mt-0'></hr>
        </div>
      </header>
      
    </>
  );
};

export default Home;
