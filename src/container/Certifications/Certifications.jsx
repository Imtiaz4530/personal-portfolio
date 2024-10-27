import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { certifications } from "./certifications";
import CertificationItem from "./CertificationItem";
import "./certifications.scss";

const Certifications = () => {
  return (
    <section className="certification__section" id="#Certifications">
      <h2 className="head-text">
        My <span>Certifications</span>
      </h2>
      <motion.h3
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__certifications-subtitle"
      >
        Acquired knowledge through learning and development
      </motion.h3>
      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__certifications-container"
      >
        {certifications.length !== 0 &&
          certifications.map((item) => (
            <CertificationItem
              key={item?.id}
              certImg={item?.img.img}
              certLink={item?.link}
              description={item?.completed}
              title={item?.title}
            />
          ))}
      </motion.div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Certifications, "app__certifications"),
  "Certifications",
  "app__primarybg"
);
