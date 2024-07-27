import styles from "./ServiceCar.module.css";

import { useService } from "../../contexts/ServiceContext";
import { useMediaQuery } from "react-responsive";

import { FadeIn } from "../../../../utils/Animations";
import { motion } from "framer-motion";

function ServiceCar() {
  const isMedium = useMediaQuery({ query: "(max-width: 800px)" });
  const { currentImage, currentImageAlt } = useService();

  if (isMedium)
    return (
      <motion.div
        variants={FadeIn("up", 0.2, -50, 0.8)}
        initial="hidden"
        animate="show"
        className={styles.boxCar}
      >
        <figure className={styles.car}>
          <img src={currentImage} alt={currentImageAlt} />
        </figure>
      </motion.div>
    );

  return (
    <motion.figure
      variants={FadeIn("up", 0.2, -50, 0.8)}
      initial="hidden"
      animate="show"
      className={styles.car}
    >
      <img src={currentImage} alt={currentImageAlt} />
    </motion.figure>
  );
}

export default ServiceCar;
