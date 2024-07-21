import styles from "./Hero.module.css";

import NavBar from "../navbar/NavBar";
import MainScreen from "./components/mainscreen/MainScreen";
import TextSlider from "./components/textslider/TextSlider";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../mobileNavbar/MobileNavbar";

function Hero() {
  const isMedium = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <section className={styles.hero}>
      {!isMedium ? <NavBar /> : <MobileNavbar />}
      <MainScreen />
      <TextSlider />
    </section>
  );
}

export default Hero;
