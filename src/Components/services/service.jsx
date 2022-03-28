import React, { useEffect } from "react";
import "./services_style.css";
import { FaGlobeAsia } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {

  AOS.init();
  AOS.refresh();


  return (
    <div>
      
      <section id="services" className="services">
        <div className="container"
           data-aos="fade-up"
           data-aos-offset="200"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="false"
        >
          <div className="section-title">
            <h2>Services</h2>
            <p >
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 d-flex align-items-stretch"
               data-aos="fade-up"
               data-aos-offset="200"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
            >
              <div className="icon-box">
                <div className="icon">
                  <FaGlobeAsia></FaGlobeAsia>
                </div>
                <h4>
                  <a>Lorem Ipsum</a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" 
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            // data-aos-anchor-placement="top-center"
            >
              <div className="icon-box">
                <div className="icon">
                  <FaGlobeAsia></FaGlobeAsia>
                </div>
                <h4>
                  <a>Lorem Ipsum</a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 d-flex align-items-stretch"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
            >
              <div className="icon-box">
                <div className="icon">
                  <FaGlobeAsia></FaGlobeAsia>
                </div>
                <h4>
                  <a>Lorem Ipsum</a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 d-flex align-items-stretch"
               data-aos="fade-up"
               data-aos-offset="200"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
            >
              <div className="icon-box">
                <div className="icon">
                  <FaGlobeAsia></FaGlobeAsia>
                </div>
                <h4>
                  <a>Lorem Ipsum</a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="cta">
       <div className="container">
         <div className="row" >
           <div className="col-lg-9 text-center text-lg-start"
             data-aos="zoom-in"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"
           >
             <h3>Call To Action</h3>
             <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           </div>
           <div className="col-lg-3 cta-btn-container text-center"
             data-aos="fade-up"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"
           >
            <a className="cta-btn align-middle">
            Call To Action
            </a>
           </div>
         </div>
       </div>
        </section>
    </div>
  );
}
