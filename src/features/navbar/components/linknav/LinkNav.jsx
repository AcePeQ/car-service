import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./LinkNav.module.css";

const controls = {
  initial: {
    display: "none",
    backgroundColor: "#00bd83",
    width: "0%",
    height: "2px",

    position: "absolute",
    bottom: "0px",
  },
  animate: {
    display: "block",
    width: "100%",
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};

export default function LinkNav({ children, to }) {
  const activeState = ({ isActive }) => {
    return {
      borderBottom: isActive ? `2px solid #03594a` : "",
    };
  };

  return (
    <motion.li
      initial="initial"
      whileHover="animate"
      className={styles.li_temp}
    >
      <NavLink to={to} style={activeState}>
        {children}
      </NavLink>
      <motion.div variants={controls}></motion.div>
    </motion.li>
  );
}
