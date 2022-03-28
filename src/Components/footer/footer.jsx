import React from "react";
import "./FooterStyles.css";
import { ImTwitter } from "react-icons/im";
import { CgFacebook } from "react-icons/cg";
import { SiInstagram } from "react-icons/si";
import { TiSocialSkype } from "react-icons/ti";
import { SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <div>
      <footer class="footer" id="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form>
                  <input type="email" />
                  <input type="submit" />
                </form>
              </div>
            </div>
          </div>
          <div className="footer-top mt-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>Arsha</h3>
                  <p>
                    A108 Adam Street
                    <br></br>
                    New York, NY 535022
                    <br></br>
                    United States
                    <br></br>
                    <br></br>
                    <strong>Phone:</strong>
                    +1 5589 55488 55
                    <br></br>
                    <strong>Email:</strong>
                    info@example.com
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">About Us</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#services">Terms of service</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">Product Management</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                    <li>
                      <a href="#">Graphic Design</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Social Networks</h4>
                 <p>
                 Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies
                 </p>
                 <div className="social-links mt-4">
                     <a href=""><ImTwitter/></a>
                     <a href=""><CgFacebook/></a>
                     <a href=""><SiInstagram/></a>
                     <a href=""><TiSocialSkype/></a>
                     <a href=""><SiLinkedin/></a>
                     
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-bottom clearfix">
            <div className="copyright">      
        © Copyright 
        <strong>
            <span>Arsha</span>
        </strong>
        . All Rights Reserved
      
            </div>
            
        </div>
      </footer>
    </div>
  );
}
