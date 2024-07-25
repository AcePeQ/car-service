import ServiceBoxes from "./components/serviceBoxes/ServiceBoxes";
import ServiceCar from "./components/serviceCar/ServiceCar";
import styles from "./Services.module.css";

import { useMediaQuery } from "react-responsive";
import { useService } from "./contexts/ServiceContext";

function Services() {
  const isMedium = useMediaQuery({ query: "(max-width: 800px)" });
  const { currentCarType } = useService();

  return (
    <div className={styles.container}>
      <div className={styles.services}>
        <div className={styles.max_box}>
          <p className={styles.title}>{currentCarType.type}</p>

          {!isMedium ? <Service /> : <ServiceMobile />}
        </div>
      </div>
    </div>
  );
}

function Service() {
  return (
    <div className={styles.service}>
      <p className={styles.subtext}>
        To nie wszystkie usługi które oferujemy
        <br />
        Zadzwoń i zobacz co jeszcze oferujemy
      </p>

      <ServiceCar />
      <ServiceBoxes />
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
