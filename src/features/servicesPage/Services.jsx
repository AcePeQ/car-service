import ServiceBoxes from "./components/serviceBoxes/ServiceBoxes";
import ServiceCar from "./components/serviceCar/ServiceCar";
import styles from "./Services.module.css";

function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.services}>
        <div className={styles.max_box}>
          <p className={styles.title}>Samochód osobowy</p>

          <Service />
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

export default Services;
