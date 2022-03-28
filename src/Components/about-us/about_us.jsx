import React from "react";
import "./about_us.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { Accordion, Card, Button } from "react-bootstrap";
export default function AboutUs() {
  AOS.init();
  AOS.refresh();
  return (
    <div>
      <section id="about" className="about">
        <div className="container aos-init aos-animate">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2>About Us</h2>
          </div>
          <div
            className="row content"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="col-lg-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ol>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                </li>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              </ol>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a href="" className="btn-learn-more align-left">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          id="mainId"
          className="main bg-color container-fluid aos-init aos-animate"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="row">
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
              <div className="content">
                <h3>
                  Eum ipsam laborum deleniti{" "}
                  <strong>velit pariatur architecto aut nihil</strong>{" "}
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p>
              </div>
              <Accordion className="accordion-list" defaultActiveKey="0">
                <Accordion.Item className="mt-4" eventKey="0">
                  <Accordion.Header>
                    <strong>01</strong>Non consectetur a erat nam at lectus urna
                    duis?
                  </Accordion.Header>
                  <Accordion.Body className="text-align">
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                    volutpat lacus laoreet non curabitur gravida. Venenatis
                    lectus magna fringilla urna porttitor rhoncus dolor purus
                    non.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="mt-4" eventKey="1">
                  <Accordion.Header>
                    <strong>02</strong>Feugiat scelerisque varius morbi enim
                    nunc?
                  </Accordion.Header>
                  <Accordion.Body className="text-align">
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="mt-4" eventKey="2">
                  <Accordion.Header>
                    <strong>03</strong>Dolor sit amet consectetur adipiscing
                    elit?
                  </Accordion.Header>
                  <Accordion.Body className="text-align">
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                    sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                    nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                    pellentesque eu tincidunt. Lectus urna duis convallis
                    convallis tellus. Urna molestie at elementum eu facilisis
                    sed odio morbi quis
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div
              class=" why-s col-lg-5 align-items-stretch order-1 order-lg-2 img aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <img src="why-us.png" alt="" width={"100%"} />
            </div>
          </div>
        </div>
      </section>
      <div
        className=" main container-fluid aos-init aos-animate"
        data-aos="fade-up"
      >
        <div className="row">
          <div
            class="col-lg-5 align-items-stretch 
            order-1 order-lg-2 img aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <img src="skills.png" width={"100%"}></img>
          </div>
          <div
            class="col-lg-7 align-items-stretch 
            order-1 order-lg-2 img aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="content">
              <h3>
                <strong>
                  Voluptatem dignissimos provident quasi corporis voluptates
                </strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
