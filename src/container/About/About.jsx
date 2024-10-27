import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./about.scss";

const About = () => {
  return (
    <section className="about__section" id="#About">
      <h5 className="section__h5">Get to know</h5>
      <h1 className="head-text">
        Abo<span className="section__h1-span">ut</span> Me
      </h1>

      <div className="container about__container">
        <motion.div
          whileInView={{ y: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="about__me"
        >
          <div className="about__me-img">
            <img src={images.profile1} alt="me" />
          </div>
        </motion.div>

        <div className="about__content">
          <div className="about__cards">
            <motion.article
              whileInView={{ x: [-100, 0] }}
              transition={{ duration: 0.5 }}
              className="about__card"
            >
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </motion.article>
            <motion.article
              whileInView={{ y: [-100, 0] }}
              transition={{ duration: 0.5 }}
              className="about__card"
            >
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>60+ Worldwide</small>
            </motion.article>
            <motion.article
              whileInView={{ x: [100, 0] }}
              transition={{ duration: 0.5 }}
              className="about__card"
            >
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </motion.article>
          </div>

          <p>
            What's up, Dear reader. I'm Imtiaz Rubayet, a passionate MERN stack
            developer. I strive to create experiences where design, interface,
            and language harmonize—human-friendly, emotive, aesthetically
            pleasing, and always on-brand. With every touch, I aim for clarity
            and usability, wrapped in a smooth, mellow finish. While my heart
            lies in web design, I have a strong grasp of web development
            (Node/Express). Though it remains a bit of a mystery to me—a
            captivating, alluring mystery at that. ❤️ <br />{" "}
            <h5>imtiaz.array@gmail.com || +8801323-12153</h5>{" "}
          </p>

          <a href="#Contact" className="btn btn_primary">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppWrap(MotionWrap(About), "About", "app__whitebg");
