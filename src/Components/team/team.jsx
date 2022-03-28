import React from "react";
import "./team_style.css";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { Accordion, Card, Button } from "react-bootstrap";

export default function Team() {
  return (
    <div>
      <section id="team" className="team section-bg">
        <div className="container aos-init aos-animate">
          <div
            className="section-title"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2>Team</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="member d-flex align-items-start aos-init aos-animate">
                <div className="pic">
                  <img src="team-1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Explicabo voluptatem mollitia et repellat qui dolorum quasi
                  </p>
                  <div className="social">
                    <a href="#">
                      <AiOutlineTwitter className="icon" />
                    </a>
                    <a href="#">
                      <ImFacebook className="icon" />
                    </a>
                    <a href="#">
                      <GrInstagram className="icon" />
                    </a>
                    <a href="#">
                      <BsLinkedin className="icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="member d-flex align-items-start aos-init aos-animate">
                <div className="pic">
                  <img src="team-2.jpg" alt="" className="img-fluid" />
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <p>
                    Aut maiores voluptates amet et quis praesentium qui senda
                    para
                  </p>
                  <div className="social">
                    <a href="#">
                      <AiOutlineTwitter className="icon" />
                    </a>
                    <a href="#">
                      <ImFacebook className="icon" />
                    </a>
                    <a href="#">
                      <GrInstagram className="icon" />
                    </a>
                    <a href="#">
                      <BsLinkedin className="icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div
              className="col-lg-6"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="member d-flex align-items-start aos-init aos-animate">
                <div className="pic">
                  <img src="team-3.jpg" alt="" className="img-fluid" />
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>
                    {" "}
                    Quisquam facilis cum velit laborum corrupti fuga rerum quia{" "}
                  </p>
                  <div className="social">
                    <a href="#">
                      {" "}
                      <AiOutlineTwitter className="icon" />{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <ImFacebook className="icon" />
                    </a>
                    <a href="#">
                      <GrInstagram className="icon" />{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <BsLinkedin className="icon" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="member d-flex align-items-start aos-init aos-animate">
                <div className="pic">
                  <img src="team-1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Explicabo voluptatem mollitia et repellat qui dolorum quasi
                  </p>
                  <div className="social">
                    <a href="#">
                      <AiOutlineTwitter className="icon" />
                    </a>
                    <a href="#">
                      <ImFacebook className="icon" />
                    </a>
                    <a href="#">
                      <GrInstagram className="icon" />
                    </a>
                    <a href="#">
                      <BsLinkedin className="icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing ">
        <div className="section-title">
          <div className="container">
            <h2>Pricing</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
            <div className="row">
              <div
                className="col-lg-4 mt-5"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div className="box">
                  <h3>Free plan</h3>
                  <h4>
                    <sup>$</sup>0<span>per month</span>
                  </h4>

                  <ul>
                    <li> Quam adipiscing vitae proin</li>
                    <li>Nec feugiat nisl pretium</li>
                    <li>Nulla at volutpat diam uteera</li>
                    <li>Pharetra massa massa ultricies</li>
                    <li>Massa ultricies mi quis hendrerit</li>
                  </ul>
                  <a href="#" className="buy-btn">
                    Get started
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 mt-5"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div className="box">
                  <h3>Business Plan</h3>
                  <h4>
                    <sup>$</sup>29
                    <span>per month</span>
                  </h4>

                  <ul>
                    <li> Quam adipiscing vitae proin</li>
                    <li>Nec feugiat nisl pretium</li>
                    <li>Nulla at volutpat diam uteera</li>
                    <li>Pharetra massa massa ultricies</li>
                    <li>Massa ultricies mi quis hendrerit</li>
                  </ul>
                  <a href="#" className="buy-btn">
                    Get started
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 mt-5"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div className="box">
                  <h3>Developer Plan</h3>
                  <h4>
                    <sup>$</sup>49
                    <span>per month</span>
                  </h4>

                  <ul>
                    <li> Quam adipiscing vitae proin</li>
                    <li>Nec feugiat nisl pretium</li>
                    <li>Nulla at volutpat diam uteera</li>
                    <li>Pharetra massa massa ultricies</li>
                    <li>Massa ultricies mi quis hendrerit</li>
                  </ul>
                  <a href="#" className="buy-btn">
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="question">
        <div className="container">
          <div className="section-title">
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
           
          </div>
          <div>
          <Accordion className="accordion-list" defaultActiveKey="0">
              <Accordion.Item className="mt-4" eventKey="0"
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="false"
              >
                <Accordion.Header>
                  <strong>01</strong>Non consectetur a erat nam at lectus urna
                  duis?
                </Accordion.Header>
                <Accordion.Body className="text-align">
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="mt-4" eventKey="1"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <Accordion.Header>
                  <strong>02</strong>Feugiat scelerisque varius morbi enim nunc?
                </Accordion.Header>
                <Accordion.Body className="text-align">
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="mt-4" eventKey="2"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <Accordion.Header>
                  <strong>03</strong>Dolor sit amet consectetur adipiscing elit?
                </Accordion.Header>
                <Accordion.Body className="text-align">
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="mt-4" eventKey="2"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <Accordion.Header>
                  <strong>04</strong>Dolor sit amet consectetur adipiscing elit?
                </Accordion.Header>
                <Accordion.Body className="text-align">
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="mt-4" eventKey="2"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <Accordion.Header>
                  <strong>05</strong>Dolor sit amet consectetur adipiscing elit?
                </Accordion.Header>
                <Accordion.Body className="text-align">
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="mt-4" eventKey="2"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <Accordion.Header>
                  <strong>05</strong>Dolor sit amet consectetur adipiscing elit?
                </Accordion.Header>
                <Accordion.Body className="text-align">
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
