import { motion } from "framer-motion";

const ExpJobs = ({ year, name, company }) => {
  return (
    <motion.div className="app__skills-exp-item" key={Math.random()}>
      <div className="app__skills-exp-year">
        <p className="bold-text">{year}</p>
      </div>
      <motion.div className="app__skills-exp-works">
        <>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-exp-work"
            key={Math.random()}
            data-tip
            data-for={name}
          >
            <h4 className="bold-text">{name}</h4>
            <p className="p-text">{company}</p>
          </motion.div>
        </>
      </motion.div>
    </motion.div>
  );
};

export default ExpJobs;
