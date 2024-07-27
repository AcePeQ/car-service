import { useEffect, useState } from "react";
import styles from "./TextSlider.module.css";
import AnimatedSpan from "./AnimatedSpan";

import { FadeIn } from "../../../../utils/Animations";
import { motion } from "framer-motion";

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
    <motion.div
      variants={FadeIn("down", 0.2, 50, 0.5)}
      initial="hidden"
      animate="show"
      className={styles.slider}
    >
      <AnimatedSpan
        windowWidth={windowWidth}
        duration="20"
        repeatDelay="10"
        keyNumber="1"
      >
        Moblina wulkanizacja dostępna pod numerem 664 234 322
      </AnimatedSpan>

      <AnimatedSpan
        windowWidth={windowWidth}
        duration="20"
        repeatDelay="10"
        delay="10"
        keyNumber="2"
      >
        Jesteśmy czynni 24/7, zadzwoń już teraz
      </AnimatedSpan>

      <AnimatedSpan
        windowWidth={windowWidth}
        duration="20"
        repeatDelay="10"
        delay="20"
        keyNumber="3"
      >
        Jeden z najlepszych mechaników w Grębkowkie
      </AnimatedSpan>
    </motion.div>
  );
}

export default TextSlider;
