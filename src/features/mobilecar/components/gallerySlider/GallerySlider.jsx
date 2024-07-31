import styles from "./GallerySlider.module.css";

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
        <img src="/sliderIMG1.jpg" />
      </figure>
      <figure>
        <img src="/sliderIMG2.jpg" />
      </figure>
      <figure>
        <img src="/sliderIMG3.jpg" />
      </figure>
      <figure>
        <img src="/sliderIMG4.jpg" />
      </figure>
      <figure>
        <img src="/sliderIMG1.jpg" />
      </figure>
      <figure>
        <img src="/sliderIMG2.jpg" />
      </figure>
    </div>
  );
}

export default GallerySlider;
