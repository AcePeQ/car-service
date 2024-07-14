import { Outlet } from "react-router-dom";
import NavBar from "../../features/navbar/NavBar";

import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.layout}>
      <NavBar transparent="true" />
      <Outlet />
    </div>
  );
}

export default Layout;
