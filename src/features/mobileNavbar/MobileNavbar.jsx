import { useState } from "react";
import styles from "./MobileNavbar.module.css";

import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import LinkNav from "../navbar/components/linknav/LinkNav";
import Logo from "../../components/Logo/Logo";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
    console.log("elo");
  }

  return (
    <>
      <button onClick={handleOpen} className={styles.mobileNavBtn}>
        {!isOpen ? <FiMenu size={40} /> : <IoMdClose size={40} />}
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <Logo type="mobileNav" />

        <ul>
          <LinkNav onClick={handleOpen} to="/">
            Strona główna
          </LinkNav>
          <LinkNav onClick={handleOpen} to="/mobile-car">
            Moblina wulkanizacja
          </LinkNav>
          <LinkNav onClick={handleOpen} to="/services">
            Usługi
          </LinkNav>
          <LinkNav onClick={handleOpen} to="/contact">
            Kontakt
          </LinkNav>
        </ul>
      </nav>
    </>
  );
}

export default MobileNavbar;
