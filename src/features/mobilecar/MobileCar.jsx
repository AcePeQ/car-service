import styles from "./MobileCar.module.css";

import { FaMapLocationDot } from "react-icons/fa6";
import { GiCarWheel } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { FaOilCan } from "react-icons/fa";
import { GiFlatTire } from "react-icons/gi";
import { GiCarDoor } from "react-icons/gi";

import mobile1 from "/src/assets/mobile1.jpg";
import mobile2 from "/src/assets/mobile2.jpg";
import mobile6 from "/src/assets/mobile6.jpg";

function MobileCar() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <MobileCarInformations />
        <Gallery />
      </div>

      <MobileCarServces />
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
        dzwonić jesteśmy przygotowania na każdą okoliczność na drodze. Nasza
        Wulkanizacja czeka na twoje zgłoszenie.
      </p>

      <div>
        <p className={styles.call}>Zadzwoń już teraz</p>
        <p className={styles.number}>+48 664 137 245</p>
      </div>
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
      <div className={styles.slider}>
        <figure>
          <img src={mobile1} />
        </figure>
        <figure>
          <img src={mobile2} />
        </figure>
        <figure>
          <img src={mobile6} />
        </figure>
        <figure>
          <img src={mobile1} />
        </figure>
        <figure>
          <img src={mobile2} />
        </figure>
        <figure>
          <img src={mobile6} />
        </figure>
      </div>

      <div className={styles.slider}>
        <figure>
          <img src={mobile1} />
        </figure>
        <figure>
          <img src={mobile2} />
        </figure>
        <figure>
          <img src={mobile6} />
        </figure>
        <figure>
          <img src={mobile1} />
        </figure>
        <figure>
          <img src={mobile2} />
        </figure>
        <figure>
          <img src={mobile6} />
        </figure>
      </div>
    </div>
  );
}

export default MobileCar;
