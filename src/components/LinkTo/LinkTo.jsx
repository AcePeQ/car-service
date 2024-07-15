import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./LinkTo.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";

import CustomAnimatedComponent from "../../utils/CustomAnimatedComponent/CustomAnimatedComponent";

const path = {
  initial: {
    display: "none",
    clipPath: `circle(0% at 50% 50%)`,
    transition: {
      duration: 1,
      ease: "linear",
    },
  },
  animate: {
    display: "block",
    clipPath: `circle(145% at 50% 50%)`,
    transition: {
      duration: 1,
      ease: "linear",
    },
  },
};

function LinkTo({ children, type, size, to, clip }) {
  return (
    <CustomAnimatedComponent
      as={Link}
      className={`${styles.link} ${styles[type]} ${styles[size]}`}
      to={to}
      initial="initial"
      whileHover="animate"
    >
      {type === "secondary" && <FaExternalLinkAlt />}
      {children}
      <motion.div
        variants={path}
        className={`${styles.link} ${styles[clip]} ${styles[size]}`}
      >
        {children}
      </motion.div>
    </CustomAnimatedComponent>
  );
}

export default LinkTo;
