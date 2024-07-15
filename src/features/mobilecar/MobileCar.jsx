import styles from "./MobileCar.module.css";

import { FaMapLocationDot } from "react-icons/fa6";
import { GiCarWheel } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { FaOilCan } from "react-icons/fa";
import { GiFlatTire } from "react-icons/gi";
import { GiCarDoor } from "react-icons/gi";

import mobile1 from "/src/assets/mobile1.jpg";
import mobile2 from "/src/assets/mobile2.jpg";
import mobile3 from "/src/assets/mobile3.jpg";
import mobile4 from "/src/assets/mobile4.jpg";
import mobile5 from "/src/assets/mobile5.jpg";
import mobile6 from "/src/assets/mobile6.jpg";
import mobile7 from "/src/assets/mobile7.jpg";

function MobileCar() {
  return (
    <div className={styles.container}>
      <MobileCarLayout />

      <MobileCarServces />
    </div>
  );
}

function MobileCarLayout() {
  return (
    <div className={styles.mobile_car}>
      <MobileCarInformations />
      <Gallery />
    </div>
  );
}

function MobileCarInformations() {
  return (
    <div className={styles.textBox}>
      <h3>Moblina wulkanizacja</h3>
      <p>
        W naszej firmie mamy do dyspozycji profesjonalnie przygotowany pojazd
        mobilny który działa jak wulkanizacja. Działamy bardzo szybko i sprawnie
        natychmiast po telefonie ruszamy na miejsce aby Ci pomóc. Nie wachaj się
        dzwonić jesteśmy przygotowania na każdą okoliczność na drodze .Nasza
        Wulkanizacja czeka na twoje zgłoszenie.
      </p>

      <p className={styles.call}>Zadzwoń już teraz</p>
      <p className={styles.number}>+48 664 137 245</p>
    </div>
  );
}

function MobileCarServces() {
  return (
    <div className={styles.services}>
      <div className={styles.service}>
        <div>
          <FaMapLocationDot size={84} fill="#fff" />
        </div>
        <p>Dojazd do klienta</p>
      </div>

      <div className={styles.service}>
        <div>
          <GiCarWheel size={84} fill="#fff" />
        </div>
        <p>Wymiana opon</p>
      </div>

      <div className={styles.service}>
        <div>
          <PiEngineFill size={84} fill="#fff" />
        </div>
        <p>Naprawy silnikowe</p>
      </div>

      <div className={styles.service}>
        <div>
          <GiFlatTire size={84} fill="#fff" />
        </div>
        <p>Naprawa opon</p>
      </div>

      <div className={styles.service}>
        <div>
          <FaOilCan size={84} fill="#fff" />
        </div>
        <p>Wymiana oleju</p>
      </div>

      <div className={styles.service}>
        <div>
          <GiCarDoor size={84} fill="#fff" />
        </div>
        <p>Wymiana szyby</p>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className={styles.gallery}>
      {/* <img src={mobile1} />
      <img src={mobile2} />
      <img src={mobile7} />
      <img src={mobile3} />
      <img src={mobile4} />
      <img src={mobile5} />
      <img src={mobile6} /> */}
    </div>
  );
}

export default MobileCar;
