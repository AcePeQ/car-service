import styles from "./MainScreen.module.css";

import LinkTo from "../../../../components/LinkTo/LinkTo";

import { FadeIn } from "../../../../utils/Animations";
import { motion } from "framer-motion";

function MainScreen() {
  return (
    <motion.div
      variants={FadeIn("right", 0, -150, 0.9)}
      initial="hidden"
      animate="show"
      className={styles.main}
    >
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
          <LinkTo type="primary" size="big" clip="clip_primary" to="/contact">
            Kontakt
          </LinkTo>
          <LinkTo
            type="secondary"
            size="big"
            clip="clip_secondary"
            to="/mobile-car"
          >
            Moblina wulkanizacja
          </LinkTo>
        </div>
      </div>
    </motion.div>
  );
}

export default MainScreen;
