import styles from "./Footer.module.css";

import Logo from "../../components/Logo/Logo";
import Informations from "../../components/informations/Informations";
import FooterNav from "./components/FooterNav";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const isMedium = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <footer className={styles.footer}>
      <Logo type="footer" />
      <Informations />
      {!isMedium && <FooterNav />}
    </footer>
  );
}

export default Footer;
