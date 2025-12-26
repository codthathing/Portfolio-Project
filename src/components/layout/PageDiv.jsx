import { motion } from "motion/react";

const PageDiv = ({ className, children, animate, initial, exit, transition }) => {
  return (
    <motion.div animate={animate} initial={initial} exit={exit} transition={transition} className={`flex ${className}`}>
      {children}
    </motion.div>
  );
};

export default PageDiv;
