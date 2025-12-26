import { Helmet } from "react-helmet-async";
import { usePagePosition } from "../../hooks/usePagePosition";
import { motion } from "motion/react";

const PageMain = ({ children, className }) => {
  const { initialX } = usePagePosition(770, 1030, 2000);

  return (
    <motion.section initial={{ x: initialX }} animate={{ x: 0, transition: { type: "spring", duration: 0.5, damping: 15 } }} className={className}>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://codthathing-dev.vercel.app" />
      </Helmet>
      {children}
    </motion.section>
  );
};

export default PageMain;