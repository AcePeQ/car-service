import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { BsDoorOpen } from "react-icons/bs";

import styles from "./Informations.module.css";
import getDate from "../../utils/FormatDate";

export default function Informations({ type }) {
  const isOpen = getDate();

  return (
    <div className={`${styles.information_box} ${styles[type]}`}>
      <div className={styles.column}>
        <p>
          <span className={styles.icon}>
            <BsTelephone size={28} color="#00bd83" />
          </span>
          Kontakt
        </p>
        <p>
          Wulkanizacja <span>+48 664 132 452</span>
        </p>
        <p>
          Wulkanizacja moblina<span>+48 664 132 452</span>
        </p>
      </div>

      <div className={styles.column}>
        <p>
          <span className={styles.icon}>
            <FiMapPin size={28} color="#00bd83" />
          </span>
          Adres
        </p>
        <p>
          07-110, Grębków <span>ul. Warszawska 22</span>
        </p>
        <p>
          Wulkanizacja aktulanie
          {isOpen ? (
            <span className={styles.statusOpen}>Jest CZYNNA</span>
          ) : (
            <span className={styles.statusClose}>Jest NIECZYNNA</span>
          )}
        </p>
      </div>

      <div className={styles.column}>
        <p>
          <span className={styles.icon}>
            <BsDoorOpen size={28} color="#00bd83" />
          </span>
          Godziny pracy
        </p>
        <p>
          Poniedziałek - Piątek <span>6:00 - 21:00</span>
        </p>
        <p>
          Sobota <span>6:00 - 16:00</span>
        </p>
      </div>
    </div>
  );
}
