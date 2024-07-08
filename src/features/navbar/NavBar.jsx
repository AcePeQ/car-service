import styles from "./NavBar.module.css";

import Logo from "../../components/Logo/Logo";
import LinkNav from "./components/linknav/LinkNav";

function NavBar() {
  return (
    <div className={styles.header}>
      <div className={styles.navigation}>
        <Logo />
        <nav className={styles.nav}>
          <ul>
            <LinkNav to="/">Strona główna</LinkNav>
            <LinkNav to="/page1">Moblina wulkanizacja</LinkNav>
            <LinkNav to="/page2">Usługi</LinkNav>
            <LinkNav to="/page3">Kontakt</LinkNav>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
