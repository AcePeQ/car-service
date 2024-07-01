import Hero from "../components/Hero";
import styles from "../styles/Homepage.module.css";

function Homepage() {
  return (
    <section className={styles.homepage}>
      <Hero />
    </section>
  );
}

export default Homepage;
