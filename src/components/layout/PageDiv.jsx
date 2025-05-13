import BackgroundStyle from "../ui/BackgroundStyle";
import { motion } from "framer-motion";

const PageDiv = ({ className, children, animate, initial, exit, transition }) => {
  return (
    <motion.div animate={animate} initial={initial} exit={exit} transition={transition} className={`flex ${className}`}>
      {/* <BackgroundStyle /> */}
      {children}
    </motion.div>
  );
};

export default PageDiv;
