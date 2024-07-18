import styles from "./MobileServices.module.css";

import { FaMapLocationDot } from "react-icons/fa6";
import { GiCarWheel } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { FaOilCan } from "react-icons/fa";
import { GiFlatTire } from "react-icons/gi";
import { GiCarDoor } from "react-icons/gi";

const ICON_SIZE = 84;
const ICON_FILL = `#fff`;

function MobileCarServces() {
  return (
    <div className={styles.services}>
      <Service title="Dojazd do klienta">
        <FaMapLocationDot size={ICON_SIZE} fill={ICON_FILL} />
      </Service>

      <Service title="Wymiana opon">
        <GiCarWheel size={ICON_SIZE} fill={ICON_FILL} />
      </Service>

      <Service title="Naprawy silnikowe">
        <PiEngineFill size={ICON_SIZE} fill={ICON_FILL} />
      </Service>

      <Service title="Naprawa opon">
        <GiFlatTire size={ICON_SIZE} fill={ICON_FILL} />
      </Service>

      <Service title="Wymiana oleju">
        <FaOilCan size={ICON_SIZE} fill={ICON_FILL} />
      </Service>

      <Service title="Wymiana szyby">
        <GiCarDoor size={ICON_SIZE} fill={ICON_FILL} />
      </Service>
    </div>
  );
}

function Service({ children, title }) {
  return (
    <div className={styles.service}>
      <div>{children}</div>
      <p>{title}</p>
    </div>
  );
}

export default MobileCarServces;
