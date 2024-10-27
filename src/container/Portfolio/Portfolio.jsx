import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import Work from "./Work";
import "./portfolio.scss";
import { images } from "../../constants";

const Portfolio = () => {
  return (
    <>
      <h2 className="head-text">
        My creative <span> Portfolio </span> section{" "}
      </h2>
      <motion.h3
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-filters"
      >
        It’s not how good you are, it’s how good you want to be
      </motion.h3>
      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        <Work
          portfolioImg={images.project1}
          tags={"MERN"}
          title={"Docmate"}
          description={"A medical consultancy application."}
          projectLink={`https://docauth.onrender.com/`}
          githubLink={`https://github.com/Imtiaz4530/DOC_MATE`}
        />
        <Work
          portfolioImg={images.project2}
          tags={"React"}
          title={`Clean Youtube`}
          description={
            "Clean interface for watch distraction-free youtube playlists."
          }
          projectLink={`https://cleanyoutube-sigma.vercel.app/`}
          githubLink={"https://github.com/Imtiaz4530/clean_youtube"}
        />
        <Work
          portfolioImg={images.project3}
          tags={"MERN"}
          title={"Forever"}
          description={"This is an e-commerce web application."}
          projectLink={`https://forever-frontend-hazel.vercel.app/`}
          githubLink={"https://github.com/Imtiaz4530/Forever"}
        />
        <Work
          portfolioImg={images.project4}
          tags={"React"}
          title={"Track Zone"}
          description={"This application for manage your clock."}
          projectLink={`https://trackzone-sand.vercel.app/`}
          githubLink={"https://github.com/Imtiaz4530/Track_Zone-"}
        />
        <Work
          portfolioImg={images.project5}
          tags={"HTML"}
          title={"Byju's"}
          description={"This is a education website."}
          projectLink={`https://dreamy-fudge-be5365.netlify.app`}
          githubLink={`https://github.com/Imtiaz4530/Educational-website`}
        />
        <Work
          portfolioImg={images.project6}
          tags={"React"}
          title={"Tic-Tac-Toe"}
          description={"A simple tic-tac-toe game."}
          projectLink={`https://0tic-tac-toe0.netlify.app/`}
          githubLink={`https://github.com/Imtiaz4530/tic_tac_toe`}
        />
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Portfolio, "app__portfolio"),
  "Portfolio",
  "app__primarybg"
);
