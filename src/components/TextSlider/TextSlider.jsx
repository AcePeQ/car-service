import { useEffect, useState } from "react";
import styles from "./TextSlider.module.css";
import AnimatedSpan from "./AnimatedSpan";

function TextSlider() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(function () {
    function fallback() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", fallback);

    return () => {
      window.removeEventListener("resize", fallback);
    };
  }, []);

  return (
    <div className={styles.slider}>
      <AnimatedSpan
        windowWidth={windowWidth}
        duration="10"
        repeatDelay="5"
        keyNumber="1"
      >
        Moblina wulkanizacja dostępna pod numerem 664 234 322
      </AnimatedSpan>

      <AnimatedSpan
        windowWidth={windowWidth}
        duration="10"
        repeatDelay="5"
        delay="5"
        keyNumber="2"
      >
        Jesteśmy czynni 24/7, zadzwoń już teraz
      </AnimatedSpan>

      <AnimatedSpan
        windowWidth={windowWidth}
        duration="10"
        repeatDelay="5"
        delay="10"
        keyNumber="3"
      >
        Jeden z najlepszych mechaników w Grębkowkie
      </AnimatedSpan>
    </div>
  );
}

export default TextSlider;
