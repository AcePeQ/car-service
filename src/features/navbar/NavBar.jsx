import styles from "./NavBar.module.css";

import Logo from "../../components/Logo/Logo";
import LinkNav from "./components/linknav/LinkNav";

function NavBar({ transparent = false }) {
  return (
    <div
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
    </div>
  );
}

export default NavBar;
