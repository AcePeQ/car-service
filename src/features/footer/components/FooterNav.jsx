import styles from "./FooterNav.module.css";

import { Link } from "react-router-dom";

function FooterNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.nav_item}>
          <Link to="/">Strona główna</Link>
        </li>
        <li className={styles.nav_item}>
          <Link to="/mobile-car">Mobilna wulkanizacja</Link>
        </li>
        <li className={styles.nav_item}>
          <Link to="/services">Usługi</Link>
        </li>
        <li className={styles.nav_item}>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
