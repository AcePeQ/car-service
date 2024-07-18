import { Outlet } from "react-router-dom";
import NavBar from "../../features/navbar/NavBar";
import Footer from "../../features/footer/Footer";

import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.layout}>
      <header>
        <NavBar transparent="true" />
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
