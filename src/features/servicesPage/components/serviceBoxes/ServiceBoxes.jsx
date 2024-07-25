import { useService } from "../../contexts/ServiceContext";
import styles from "./ServiceBoxes.module.css";

import { GiCarWheel } from "react-icons/gi";

const ICON_SIZE = 96;

function ServiceBoxes() {
  const { currentServices } = useService();

  return (
    <>
      <ServiceBox service={currentServices[0]} boxNr="box1">
        <div>
          <GiCarWheel size={ICON_SIZE} />
        </div>
      </ServiceBox>

      <ServiceBox service={currentServices[1]} boxNr="box2">
        <div>
          <GiCarWheel size={ICON_SIZE} />
        </div>
      </ServiceBox>

      <ServiceBox service={currentServices[2]} boxNr="box3">
        <div>
          <GiCarWheel size={ICON_SIZE} />
        </div>
      </ServiceBox>

      <ServiceBox service={currentServices[3]} boxNr="box4">
        <div>
          <GiCarWheel size={ICON_SIZE} />
        </div>
      </ServiceBox>

      <ServiceBox service={currentServices[4]} boxNr="box5">
        <div>
          <GiCarWheel size={ICON_SIZE} />
        </div>
      </ServiceBox>
    </>
  );
}

function ServiceBox({ boxNr, service, children }) {
  return (
    <div className={`${styles.box} ${styles[boxNr]}`}>
      {children}
      <div className={styles.additional_info}>
        <p>{service.additionalText}</p>
      </div>
      <p className={styles.titleBox}>{service.title}</p>
    </div>
  );
}

export default ServiceBoxes;
