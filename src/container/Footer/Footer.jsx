import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="body_footer">
      <footer>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>

        <ul className="footer__social-icon">
          <li>
            <a href="https://www.linkedin.com/in/imtiaz-opu-50885b23a?fbclid=IwAR2FxdViVj99JixJajSwwHnfrFBX6tIgUu1XiJvHIWoHuB1nG3yFiQ5ejz4">
              <BsLinkedin />
            </a>
          </li>

          <li>
            <a href="https://github.com/Imtiaz4530">
              <BsGithub />{" "}
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/imtiaz.rubayet.7">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/imtiaz__lx">
              <BsInstagram />
            </a>
          </li>
        </ul>

        <ul className="footer__menu-nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#Certifications">Certification</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>

        <p>
          © Imtiaz 2024 || All rights reserved. No part of this website may be
          reproduced without permission.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
