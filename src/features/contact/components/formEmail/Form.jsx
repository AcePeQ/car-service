import styles from "./Form.module.css";

import { FadeIn } from "../../../../utils/Animations";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [sending, isSending] = useState(false);
  const form = useRef();

  async function sendEmail(e) {
    e.preventDefault();
    try {
      isSending(true);
      setMessage("");
      await emailjs
        .sendForm(
          import.meta.env.VITE_SERVER_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_PUBLIC_EMAIL_KEY,
          }
        )
        .then(() => {
          setColor("#00bd83");
          setMessage(`Wiadomość wysłana`);
          isSending(false);
          e.target.reset();
        });
    } catch {
      setColor("red");
      setMessage(`Wiadomość nie została wysłana`);
      isSending(false);
      e.target.reset();
    } finally {
      isSending(false);
      console.log("Finally");
    }
  }

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form_email}>
      {sending && (
        <div className={styles.loader}>
          <div className={styles.loader_spinner}></div>
        </div>
      )}

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
        <input
          id="name"
          name="from_name"
          type="text"
          required
          placeholder="Imie"
        />
        <label htmlFor="name">Imie</label>
      </motion.div>

      <motion.div
        variants={FadeIn("down", 0.6, 50, 0.75)}
        initial="hidden"
        animate="show"
        className={styles.form_row}
      >
        <input
          id="email"
          type="email"
          name="from_email"
          required
          placeholder="Adres e-mail"
        />
        <label htmlFor="email">Adres e-mail</label>
      </motion.div>

      <motion.div
        variants={FadeIn("down", 0.8, 50, 0.75)}
        initial="hidden"
        animate="show"
        className={styles.form_row}
      >
        <textarea required placeholder="Wiadomość" name="message" />
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

      <motion.p
        variants={FadeIn("right", 1, 50, 0.75)}
        initial="hidden"
        animate="show"
        style={{ color: `${color}` }}
        className={`${styles.messageText}`}
      >
        {message !== "" && message}
      </motion.p>
    </form>
  );
}

export default Form;
