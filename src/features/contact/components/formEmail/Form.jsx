import styles from "./Form.module.css";

import { FadeIn } from "../../../../utils/Animations";
import { motion } from "framer-motion";

function Form() {
  return (
    <form className={styles.form_email}>
      <motion.h3
        variants={FadeIn("down", 0.2, 50, 0.75)}
        initial="hidden"
        animate="show"
      >
        Napisz do nas
      </motion.h3>

      <motion.div
        variants={FadeIn("down", 0.4, 50, 0.75)}
        initial="hidden"
        animate="show"
        className={styles.form_row}
      >
        <input id="name" type="text" required placeholder="Imie" />
        <label htmlFor="name">Imie</label>
      </motion.div>

      <motion.div
        variants={FadeIn("down", 0.6, 50, 0.75)}
        initial="hidden"
        animate="show"
        className={styles.form_row}
      >
        <input id="email" type="email" required placeholder="Adres e-mail" />
        <label htmlFor="email">Adres e-mail</label>
      </motion.div>

      <motion.div
        variants={FadeIn("down", 0.8, 50, 0.75)}
        initial="hidden"
        animate="show"
        className={styles.form_row}
      >
        <textarea placeholder="Wiadomość" />
        <label>Wiadomość</label>
      </motion.div>

      <motion.div
        variants={FadeIn("down", 1, 50, 0.75)}
        initial="hidden"
        animate="show"
        className={styles.form_buttons}
      >
        <button type="submit">Wyślij</button>
      </motion.div>
    </form>
  );
}

export default Form;
