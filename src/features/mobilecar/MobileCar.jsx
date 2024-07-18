import styles from "./MobileCar.module.css";

import GallerySlider from "./components/gallerySlider/GallerySlider";
import MobileCarInformations from "./components/mobileCarInformations/MobileCarInformations";
import MobileCarServces from "./components/mobileServices/MobileServices";

function MobileCar() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <MobileCarInformations />
        <GallerySlider />
      </div>

      <MobileCarServces />
    </div>
  );
}

export default MobileCar;
