import styles from "./Footer.module.css";

import Logo from "../../components/Logo/Logo";
import Informations from "../../components/informations/Informations";
import FooterNav from "./components/FooterNav";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <Informations />
      <FooterNav />
    </footer>
  );
}

export default Footer;
