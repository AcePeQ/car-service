import styles from "./ServiceCar.module.css";

import { useService } from "../../contexts/ServiceContext";
import { useMediaQuery } from "react-responsive";

function ServiceCar() {
  const isMedium = useMediaQuery({ query: "(max-width: 800px)" });
  const { currentImage, currentImageAlt } = useService();

  if (isMedium)
    return (
      <div className={styles.boxCar}>
        <figure className={styles.car}>
          <img src={currentImage} alt={currentImageAlt} />
        </figure>
      </div>
    );

  return (
    <figure className={styles.car}>
      <img src={currentImage} alt={currentImageAlt} />
    </figure>
  );
}

export default ServiceCar;
