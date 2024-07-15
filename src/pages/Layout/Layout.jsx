import { Outlet } from "react-router-dom";
import NavBar from "../../features/navbar/NavBar";

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
    </div>
  );
}

export default Layout;
