import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

import styles from "./Footer.module.css";
import Informations from "../../components/informations/Informations";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />

      <Informations />

      <nav>
        <ul>
          <li className={styles.nav_item}>
            <Link to="/">Strona główna</Link>
          </li>
          <li className={styles.nav_item}>
            <Link>Mobilna wulkanizacja</Link>
          </li>
          <li className={styles.nav_item}>
            <Link>Usługi</Link>
          </li>
          <li className={styles.nav_item}>
            <Link>Kontakt</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
