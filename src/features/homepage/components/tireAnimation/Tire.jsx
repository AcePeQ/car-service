import styles from "./Tire.module.css";

function Tire() {
  return (
    <img
      className={styles.tire}
      src="/src/assets/3dtire.png"
      alt="3D Tire with rotate 360 animation while scrolling page"
    />
  );
}

export default Tire;
