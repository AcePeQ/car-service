import ServiceBoxes from "./components/serviceBoxes/ServiceBoxes";
import ServiceCar from "./components/serviceCar/ServiceCar";
import styles from "./Services.module.css";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import { useMediaQuery } from "react-responsive";
import { useService } from "./contexts/ServiceContext";

function Services() {
  const isMedium = useMediaQuery({ query: "(max-width: 800px)" });
  const { currentCarType, index, dispatch, carTypes } = useService();
  const carTypesLength = carTypes.length - 1;

  function handleNextService() {
    if (index === carTypesLength) {
      dispatch({ type: "service/start" });
      return;
    }

    dispatch({ type: "service/nextService" });
  }

  function handlePreviousService() {
    if (index === 0) {
      dispatch({ type: "service/end" });
      return;
    }

    dispatch({ type: "service/previousService" });
  }

  return (
    <div className={styles.container}>
      <div className={styles.services}>
        <div className={styles.max_box}>
          <p className={styles.title}>{currentCarType.type}</p>
          <div className={styles.btns}>
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
          </div>

          {!isMedium ? <Service /> : <ServiceMobile />}
        </div>
      </div>
    </div>
  );
}

function Service() {
  const { index } = useService();

  return (
    <div className={styles.service}>
      <p className={styles.subtext}>
        To nie wszystkie usługi które oferujemy
        <br />
        Zadzwoń i zobacz co jeszcze oferujemy
      </p>

      <ServiceCar />
      <ServiceBoxes key={index} />
    </div>
  );
}

function ServiceMobile() {
  return (
    <div className={styles.service}>
      <ServiceCar />
      <div className={styles.flexBoxes}>
        <ServiceBoxes />
      </div>
    </div>
  );
}

export default Services;
