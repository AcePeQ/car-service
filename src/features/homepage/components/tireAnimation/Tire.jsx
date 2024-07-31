import { useRef } from "react";
import styles from "./Tire.module.css";

import { motion, useScroll, useSpring } from "framer-motion";

function Tire() {
  const img = useRef(null);
  let { scrollY } = useScroll({
    target: img,
    offset: ["start end", "end end"],
  });
  const rotate = useSpring(scrollY);

  return (
    <motion.img
      ref={img}
      style={{ rotate: rotate, translateX: "-50%" }}
      className={styles.tire}
      src="/3dtire.png"
      alt="3D Tire with rotate 360 animation while scrolling page"
    />
  );
}

export default Tire;
