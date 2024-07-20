import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link className={styles.anchor} to="/">
      <img
        src="/src/assets/logo.png"
        alt="Logo wulkanizacji woas"
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
