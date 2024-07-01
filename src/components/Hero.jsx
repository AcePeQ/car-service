import styles from "../styles/Hero.module.css";
import MainScreen from "./MainScreen";
import NavBar from "./NavBar";

function Hero() {
  return (
    <div className={styles.hero}>
      <NavBar />
      <MainScreen />
    </div>
  );
}

export default Hero;
