import styles from "./MainScreen.module.css";

import ButtonNavigate from "../ButtonNavigate/ButtonNavigate";

function MainScreen() {
  return (
    <div className={styles.main}>
      <div className={styles.mainScreen}>
        <h1>
          Wulkanizacja
          <p>WOAS</p>
        </h1>

        <p className={styles.subText}>
          Najlepszy mechanik w okolicy Grębkowa <br />
          Jesteśmy przygotowani na wszystko
        </p>

        <p className={`${styles.subText} ${styles.subTextLower}`}>
          Zadzwoń już teraz i umów się na naprawę
        </p>

        <div className={styles.buttons}>
          <ButtonNavigate type="primary" size="big">
            Kontakt
          </ButtonNavigate>
          <ButtonNavigate type="secondary" size="big">
            Moblina wulkanizacja
          </ButtonNavigate>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
