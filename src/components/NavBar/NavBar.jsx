import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./NavBar.module.css";

import Logo from "../Logo/Logo";

function NavBar() {
  const activeState = ({ isActive }) => {
    return {
      backgroundColor: isActive ? `#03594a` : "",
      borderRadius: isActive ? "6px" : "",
    };
  };

  return (
    <div className={styles.header}>
      <div className={styles.navigation}>
        <Logo />
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to="/" style={activeState}>
                Strona główna
              </NavLink>
            </li>
            <li>
              <NavLink to="/page" style={activeState}>
                Moblina wulkanizacja
              </NavLink>
            </li>
            <li>
              <NavLink>Usługi</NavLink>
            </li>
            <li>
              <NavLink>Kontakt</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
