import styles from "./ButtonNavigate.module.css";

function ButtonNavigate({ children, onClick, type, size }) {
  return (
    <button
      className={`${styles.btn} ${styles[type]} ${styles[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonNavigate;
