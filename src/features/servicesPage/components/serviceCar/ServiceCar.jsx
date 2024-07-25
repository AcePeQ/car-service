import styles from "./ServiceCar.module.css";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useService } from "../../contexts/ServiceContext";

function ServiceCar() {
  const { currentImage, currentImageAlt, index, dispatch, carTypes } =
    useService();
  const carTypesLength = carTypes.length;

  function handleNextService() {
    if (index === carTypesLength - 1) return;

    dispatch({ type: "service/nextService" });
  }

  function handlePreviousService() {
    if (index === 0) return;

    dispatch({ type: "service/previousService" });
  }

  return (
    <figure className={styles.car}>
      <button
        onClick={handlePreviousService}
        className={`${styles.btn} ${styles.left}`}
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={handleNextService}
        className={`${styles.btn} ${styles.right}`}
      >
        <FaChevronRight />
      </button>

      <img src={currentImage} alt={currentImageAlt} />
    </figure>
  );
}

export default ServiceCar;
