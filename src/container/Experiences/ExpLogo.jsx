import { motion } from "framer-motion";

const ExpLogo = ({ img, alt, name }) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__skills-item app__flex"
      key={Math.random()}
    >
      <div className="app__flex">
        <img src={img} alt={alt} />
      </div>
      <p className="p-text">{name}</p>
    </motion.div>
  );
};

export default ExpLogo;
