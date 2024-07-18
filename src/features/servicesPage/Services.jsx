import styles from "./Services.module.css";

import { GiCarWheel } from "react-icons/gi";

function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.services}>
        {/* <h3>Nasze usługi</h3>
        <p className={styles.subtext}>
          Od prostych usług wymiany opon aż po najcięższe przypadki
        </p> */}

        <div className={styles.boxaa}>
          <p className={styles.title}>Samochód osobowy</p>
          <div className={styles.service}>
            <figure className={styles.box4}>
              <img src="/src/assets/car1.jpg" />
            </figure>

            <div className={`${styles.box} ${styles.box1}`}>
              <div>
                <GiCarWheel size={84} />
              </div>
              <p className={styles.titleBox}>Naprawa opony</p>
            </div>

            <div className={`${styles.box} ${styles.box2}`}>
              <div>
                <GiCarWheel size={84} />
              </div>
              <p className={styles.titleBox}>Naprawa opony</p>
            </div>

            <div className={`${styles.box} ${styles.box3}`}>
              <div>
                <GiCarWheel size={84} />
              </div>
              <p className={styles.titleBox}>Naprawa opony</p>
            </div>
            <div className={`${styles.box} ${styles.box6}`}>
              <div>
                <GiCarWheel size={84} />
              </div>
              <p className={styles.titleBox}>Naprawa opony</p>
            </div>
            <div className={`${styles.box} ${styles.box5}`}>
              <div>
                <GiCarWheel size={84} />
              </div>
              <p className={styles.titleBox}>Naprawa opony</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
