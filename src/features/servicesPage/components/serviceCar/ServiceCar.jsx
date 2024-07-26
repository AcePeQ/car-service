import styles from "./ServiceCar.module.css";

import { useService } from "../../contexts/ServiceContext";

function ServiceCar() {
  const { currentImage, currentImageAlt } = useService();

  return (
    <figure className={styles.car}>
      <img src={currentImage} alt={currentImageAlt} />
    </figure>
  );
}

export default ServiceCar;
