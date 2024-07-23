import styles from "./MobileCarInformations.module.css";

import { FadeIn } from "../../../../utils/Animations";
import { motion } from "framer-motion";

function MobileCarInformations() {
  return (
    <div className={styles.textBox}>
      <motion.h3
        variants={FadeIn("up", 0.2, -50, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        Moblina wulkanizacja
      </motion.h3>
      <motion.p
        variants={FadeIn("left", 0.1, -75, 2, "spring")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        W naszej firmie mamy do dyspozycji profesjonalnie przygotowany pojazd
        mobilny który działa jak wulkanizacja. Działamy bardzo szybko i sprawnie
        natychmiast po telefonie ruszamy na miejsce aby Ci pomóc. Nie wachaj się
        dzwonić jesteśmy przygotowania na każdą okoliczność na drodze. Nasza
        Wulkanizacja czeka na twoje zgłoszenie.
      </motion.p>

      <motion.div
        variants={FadeIn("right", 0.1, 100, 2, "spring")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={styles.call}>Zadzwoń już teraz</p>
        <p className={styles.number}>+48 664 137 245</p>
      </motion.div>
    </div>
  );
}

export default MobileCarInformations;
