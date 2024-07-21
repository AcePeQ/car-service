import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

function Logo({ type }) {
  return (
    <Link className={styles.anchor} to="/">
      <img
        src="/src/assets/3.png"
        alt="Logo wulkanizacji woas"
        className={`${styles.logo} ${styles[type]}`}
      />
    </Link>
  );
}

export default Logo;
