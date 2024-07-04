import styles from "./Hero.module.css";

import NavBar from "../NavBar/NavBar";
import MainScreen from "../MainScreen/MainScreen";
import TextSlider from "../TextSlider/TextSlider";

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
