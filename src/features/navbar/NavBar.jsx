import styles from "./NavBar.module.css";

import Logo from "../../components/Logo/Logo";
import LinkNav from "./components/linknav/LinkNav";

import { FadeIn } from "../../utils/Animations";
import { motion } from "framer-motion";

function NavBar({ transparent = false }) {
  return (
    <motion.div
      variants={FadeIn("up", 0.2, -50, 0.5)}
      initial="hidden"
      animate="show"
      className={`${styles.header} ${transparent ? styles.transparentBG : ""}`}
    >
      <div className={styles.navigation}>
        <Logo />
        <nav className={styles.nav}>
          <ul>
            <LinkNav to="/">Strona główna</LinkNav>
            <LinkNav to="/mobile-car">Moblina wulkanizacja</LinkNav>
            <LinkNav to="/services">Usługi</LinkNav>
            <LinkNav to="/contact">Kontakt</LinkNav>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}

export default NavBar;
