import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import "./navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>
          <a href="#Home">IMTIAZ</a>
        </h1>
      </div>
      <ul className="app__navbar-links">
        {[
          "Home",
          "About",
          "Portfolio",
          "Skills",
          "Experience",
          "Certifications",
          "Contact",
        ].map((item) => [
          <>
            <li key={`link-${item}`} className="app__flex p-text">
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          </>,
        ])}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4
          onClick={() => {
            setToggle(true);
          }}
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            <HiX
              onClick={() => {
                setToggle(false);
              }}
            />
            <ul className="app__navbar-links">
              {[
                "Home",
                "About",
                "Portfolio",
                "Skills",
                "Experience",
                "Certifications",
                "Contact",
              ].map((item) => [
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    {item}
                  </a>
                </li>,
              ])}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
