import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./experience.scss";
import ExpLogo from "./ExpLogo";
import { images } from "../../constants";
import ExpJobs from "./ExpJobs";

const Experience = () => {
  return (
    <>
      <h2 className="head-text"> Experiences </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          <ExpLogo img={images.javascript} alt="Js" name="Javascript" />
          <ExpLogo img={images.react} alt="git" name="Git" />
          <ExpLogo img={images.node} alt="react" name="React" />
          <ExpLogo img={images.redux} alt="redux" name="Redux" />
          <ExpLogo img={images.git} alt="node" name="Node" />
        </motion.div>

        <motion.div className="app__skills-exp">
          <ExpJobs year="2022" name="Backend Developer" company="Fiverr" />
          <ExpJobs year="2022" name="Fontend Developer" company="Fiverr" />
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__experience"),
  "Experience",
  "app__primarybg"
);
