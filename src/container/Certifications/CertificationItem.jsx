import { motion } from "framer-motion";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";

import "./certifications.scss";

const CertificationItem = ({ certImg, title, description, certLink }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <div
        className="app__certification-item app__flex"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="app__certification-img app__flex">
          <img src={certImg} alt={title} />
          <motion.div
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="app__certification-hover app__flex"
          >
            <a href={certLink} target="_blank" rel="noreferrer">
              <motion.div
                animate={{ scale: isHovering ? 1 : 0 }}
                whileHover={{ scale: 0.9 }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                className="app__flex"
              >
                <AiFillEye />
              </motion.div>
            </a>
          </motion.div>
        </div>
        <div className="app__certification-content app__flex">
          <h4 className="bold-text app__certification-title">{title}</h4>
          <p className="p-text" style={{ marginTop: 10 }}>
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default CertificationItem;
