import Footer from "../../features/footer/Footer";
import Tire from "../../features/homepage/components/tireAnimation/Tire";
import Features from "../../features/homepage/Features";
import Hero from "../../features/homepage/Hero";

import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <section className={styles.feature}>
        <Tire />
        <Features />
      </section>
      <Footer />
    </>
  );
}

export default Homepage;
