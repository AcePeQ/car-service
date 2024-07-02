import styles from "../styles/Hero.module.css";
import MainScreen from "./MainScreen";
import NavBar from "./NavBar";
import TextSlider from "./TextSlider";

function Hero() {
  return (
    <div className={styles.hero}>
      <NavBar />
      <MainScreen />
      <TextSlider />
    </div>
  );
}

export default Hero;
