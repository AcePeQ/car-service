import styles from "./ServiceBoxes.module.css";

import { GiCarWheel } from "react-icons/gi";

const ICON_SIZE = 96;

function ServiceBoxes() {
  return (
    <>
      <ServiceBox title="Naprawa opon" boxNr="box1">
        <div>
          <GiCarWheel size={ICON_SIZE} />
        </div>
        <div className={styles.additional_info}>
          <p>
            To tutaj naprawisz opony. Jesteśmy tu po to aby ci to ułatwić daj
            nam znać a my tam będziemy
          </p>
        </div>
      </ServiceBox>

      <ServiceBox title="Naprawa opon" boxNr="box2">
        <div>
          <GiCarWheel size={ICON_SIZE} />
        </div>
        <div className={styles.additional_info}>
          <p>
            To tutaj naprawisz opony. Jesteśmy tu po to aby ci to ułatwić daj
            nam znać a my tam będziemy
          </p>
        </div>
      </ServiceBox>

      <ServiceBox title="Naprawa opon" boxNr="box3">
        <div>
          <GiCarWheel size={ICON_SIZE} />
        </div>
        <div className={styles.additional_info}>
          <p>
            To tutaj naprawisz opony. Jesteśmy tu po to aby ci to ułatwić daj
            nam znać a my tam będziemy
          </p>
        </div>
      </ServiceBox>

      <ServiceBox title="Naprawa opon" boxNr="box4">
        <div>
          <GiCarWheel size={ICON_SIZE} />
        </div>
        <div className={styles.additional_info}>
          <p>
            To tutaj naprawisz opony. Jesteśmy tu po to aby ci to ułatwić daj
            nam znać a my tam będziemy
          </p>
        </div>
      </ServiceBox>

      <ServiceBox title="Naprawa opon" boxNr="box5">
        <div>
          <GiCarWheel size={ICON_SIZE} />
        </div>
        <div className={styles.additional_info}>
          <p>
            To tutaj naprawisz opony. Jesteśmy tu po to aby ci to ułatwić daj
            nam znać a my tam będziemy
          </p>
        </div>
      </ServiceBox>
    </>
  );
}

function ServiceBox({ boxNr, title, children }) {
  return (
    <div className={`${styles.box} ${styles[boxNr]}`}>
      {children}
      <p className={styles.titleBox}>{title}</p>
    </div>
  );
}

export default ServiceBoxes;
