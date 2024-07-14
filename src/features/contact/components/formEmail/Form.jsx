import styles from "./Form.module.css";

function Form() {
  return (
    <form className={styles.form_email}>
      <h3>Napisz do nas</h3>

      <div className={styles.form_row}>
        <input id="name" type="text" required placeholder="Imie" />
        <label htmlFor="name">Imie</label>
      </div>

      <div className={styles.form_row}>
        <input id="email" type="email" required placeholder="Adres e-mail" />
        <label htmlFor="email">Adres e-mail</label>
      </div>

      <div className={styles.form_row}>
        <textarea placeholder="Wiadomość" />
        <label>Wiadomość</label>
      </div>

      <div className={styles.form_buttons}>
        <button type="submit">Wyślij</button>
      </div>
    </form>
  );
}

export default Form;
