import { useState } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const Progress = ({ done, name, bgColor }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="skills__main">
      <h3>{name}</h3>
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="skills__progress"
      >
        <div className={`skills__progress-done ${bgColor}`} style={style}>
          {done}%
        </div>
      </motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="head-text skills__h2"> Skills </h2>
      <div className="app__skill-container">
        <div className="skills__progress-component">
          <Progress bgColor="bg1" name="HTML" done="90" />
          <Progress bgColor="bg2" name="CSS" done="80" />
          <Progress bgColor="bg3" name="JavaScript" done="90" />
          <Progress bgColor="bg4" name="Bootstrap" done="80" />
          <Progress bgColor="bg5" name="React" done="90" />
          <Progress bgColor="bg6" name="Redux" done="75" />
          <Progress bgColor="bg7" name="Node.js" done="85" />
          <Progress bgColor="bg8" name="MongoDB" done="75" />
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skill"),
  "Skills",
  "app__whitebg"
);
