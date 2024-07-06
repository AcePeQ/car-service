import { Link } from "react-router-dom";
import { motion, motionValue } from "framer-motion";

import styles from "./LinkTo.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";

import CustomAnimatedComponent from "../../utils/CustomAnimatedComponent/CustomAnimatedComponent";

function LinkTo({ children, type, size, to }) {
  const path = {
    initial: {
      display: "none",
      alignItems: "center",
      clipPath: `circle(0% at 50% 50%)`,
      transition: {
        duration: 1,
      },
    },
    animate: {
      display: "inline-block",
      alignItems: "center",
      clipPath: `circle(142% at 50% 50%)`,
      transition: {
        duration: 1,
      },
    },
  };

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
        className={`${styles.link} ${
          type === "primary" ? styles.clip_primary : styles.clip_secondary
        } ${styles.big}`}
      >
        {children}
      </motion.div>
    </CustomAnimatedComponent>
  );
}

export default LinkTo;
