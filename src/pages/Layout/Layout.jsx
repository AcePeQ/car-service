import { Outlet } from "react-router-dom";
import NavBar from "../../features/navbar/NavBar";
import Footer from "../../features/footer/Footer";

import { useMediaQuery } from "react-responsive";
import styles from "./Layout.module.css";
import MobileNavbar from "../../features/mobileNavbar/MobileNavbar";

function Layout() {
  const isMedium = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <div className={styles.layout}>
      <header>
        {!isMedium ? <NavBar transparent="true" /> : <MobileNavbar />}
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
