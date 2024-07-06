import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./LinkTo.module.css";

import CustomAnimatedComponent from "../../utils/CustomAnimatedComponent/CustomAnimatedComponent";

const path = {
  initial: {
    display: "none",
    alignItems: "center",
    clipPath: "circle(0% at 50% 50%)",
    transition: {
      duration: 1,
    },
  },
  animate: {
    display: "inline-block",
    alignItems: "center",
    clipPath: "circle(141% at 50% 50%)",
    transition: {
      duration: 1,
    },
  },
};

function LinkTo({ children, type, size }) {
  if (type === "primary") {
    return (
      <CustomAnimatedComponent
        as={Link}
        className={`${styles.link} ${styles[type]} ${styles[size]}`}
        to="/"
        initial="initial"
        whileHover="animate"
      >
        {children}

        <motion.div
          variants={path}
          className={`${styles.link} ${styles.clip_primary} ${styles.big}`}
        >
          {children}
        </motion.div>
      </CustomAnimatedComponent>
    );
  }

  if (type === "secondary") {
    return (
      <CustomAnimatedComponent
        as={Link}
        className={`${styles.link} ${styles[type]} ${styles[size]}`}
        to="/page"
        initial="initial"
        whileHover="animate"
      >
        {children}

        <motion.div
          variants={path}
          className={`${styles.link} ${styles.clip_secondary} ${styles.big}`}
        >
          {children}
        </motion.div>
      </CustomAnimatedComponent>
    );
  }
}

export default LinkTo;
