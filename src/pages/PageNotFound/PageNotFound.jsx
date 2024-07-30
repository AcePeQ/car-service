import { useMediaQuery } from "react-responsive";
import LinkTo from "../../components/LinkTo/LinkTo";
import Footer from "../../features/footer/Footer";
import NavBar from "../../features/navbar/NavBar";
import styles from "./PageNotFound.module.css";
import MobileNavbar from "../../features/mobileNavbar/MobileNavbar";

function PageNotFound() {
  const isMedium = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <div className={styles.main}>
      {!isMedium ? <NavBar transparent="true" /> : <MobileNavbar />}

      <div className={styles.container}>
        <span>Upps</span>
        <h1>Page not found</h1>
        <LinkTo to="/" type="primary" size="custom" clip="clip_primary">
          Back Home
        </LinkTo>
      </div>

      <Footer />
    </div>
  );
}

export default PageNotFound;
