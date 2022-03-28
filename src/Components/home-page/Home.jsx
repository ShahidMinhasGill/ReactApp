import React from "react";
import "./Home_style.css";
import { BsPlayCircle } from "react-icons/bs";

export default function Home() {
  return (
    <div>
 
        <section id="home" className="d-flex align-items-center">
          <div className="container">
            <div className="row ">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <h1 className="text-white fw-bolder">
                  Better Solutions For Your Business
                </h1>
                <p className="text_home">
                  We are team of talented designers making websites with
                  Bootstrap
                </p>

                <div className="Button_Link d-flex justify-content-center justify-content-lg-start">
                  <button className="btn bnt_home_page_here">
                    Get Started
                  </button>
                  <div>
                    <a
                      href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                      target="_blank"
                    >
                      <BsPlayCircle className="video_btn" />{" "}
                      <span>Watch Video</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <img src="hero-img.png" className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </section>
      <section className="home-page-section">
        <div
          className="container"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center clients">
              <img src="client-1.png" className="img-fluid"></img>
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center clients">
              <img src="client-2.png" className="img-fluid"></img>
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center clients">
              <img src="client-3.png" className="img-fluid"></img>
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center clients">
              <img src="client-4.png" className="img-fluid"></img>
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center clients">
              <img src="client-5.png" className="img-fluid"></img>
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center clients">
              <img src="client-6.png" className="img-fluid"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
