import Hero from "../../components/Hero/Hero";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <section className={styles.homepage}>
      <Hero />
    </section>
  );
}

export default Homepage;
