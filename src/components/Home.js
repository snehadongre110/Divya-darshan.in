import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from './header'
import FooterComponent from './footer';


const Home = () => {
  return (
    <div>
      {/* Navigation content */}
        <HeaderComponent />
        {/* main Body of home page */}
      <div className="container-fluid">
        <div className="row mt-5 mb-5 d-flex">
          <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center d-flex justify-content-center align-items-center">
            <img
              className="fit-image imageClass"
              src="./assets/logo11.jpg"
              width="80%"
              alt="Logo"
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
            <div className="block">
              {/* Add your carousel code or other content here */}
              <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <video autoplay muted loop class="vedicVideo" width="100%">
                    <source src="./assets/video1.mp4" type="video/mp4" />
                  </video>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100 imageClass"
                    src="./assets/slider.jpeg"
                    
                    alt="Second slide"
                  />
                </div>
                
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
            <div className="position-relative">
              <div className="position-absolute top-0 end-0">
                <a className="fit-image" href="#">
                  <img
                    src="./assets/playstore.png"
                    width="100"
                    className="mt-2"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Download App"
                  />
                </a>
              </div>
            </div>
            <div>
              <p className="mt-5">
                A versatile Android app that caters to the needs of individuals
                interested in following the Vedic culture. Daily panchang with
                auspicious and inauspicious timings, engaging pandit for various
                religious activities, shopping necessary pooja items, birthday
                reminders based on the lunisolar calendar and lot more.
              </p>
            </div>
          </div>
        </div>
        {/* Add more sections as needed */}
      </div>

      {/* More home content */}
      <div className="divider"></div>
      <div className="row mt-5 mb-5 d-flex">
        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center d-flex justify-content-center align-items-center">
          <img
            className="fit-image imageClass"
            src="./assets/logo2.jpeg"
            alt="Logo"
            width="80%"
          />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <div className="block">
            {/* Add another carousel or other content here */}
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100 imageClass"
                    src="./assets/slider1.jpeg"
                    alt="First slide"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          {/* Add more sections as needed */}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <div className="launching-soon float-right">
            <h4>Launching soon...</h4>
          </div>
          <div>
            <p className="mt-5">
              DivyaDarshan is an innovative Android app that revolutionizes the
              way we connect with Indian temples. It allows users to virtually
              visit any temple in India and perform various religious rituals
              such as pooja, archan, and abhishek from the comfort of their own
              homes. Additionally, the app provides a unique opportunity to
              actively engage in live events and festivals taking place at
              temples, enhancing the spiritual experience for devotees across
              the globe.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="divider"></div> */}
      {/* footer section  */}
      <FooterComponent />
    </div>
  );
}

export default Home