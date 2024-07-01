import { Link } from "react-router-dom";

import styles from "../styles/Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/src/assets/logo.png"
        alt="Logo wulkanizacji woas"
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
