import styles from "./Hero.module.css";

import NavBar from "../navbar/NavBar";
import MainScreen from "./components/mainscreen/MainScreen";
import TextSlider from "./components/textslider/TextSlider";

function Hero() {
  return (
    <section className={styles.hero}>
      <NavBar />
      <MainScreen />
      <TextSlider />
    </section>
  );
}

export default Hero;
