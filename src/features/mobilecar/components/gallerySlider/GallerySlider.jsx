import styles from "./GallerySlider.module.css";

import mobile1 from "/src/assets/mobile1.jpg";
import mobile2 from "/src/assets/mobile2.jpg";
import mobile6 from "/src/assets/mobile6.jpg";

function GallerySlider() {
  return (
    <div className={styles.padding}>
      <div className={styles.gallery}>
        <Slider />
        <Slider />
      </div>
    </div>
  );
}

function Slider() {
  return (
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
  );
}

export default GallerySlider;
