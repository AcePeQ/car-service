import styles from "./Contact.module.css";

import Informations from "../../components/informations/Informations";
import Map from "./components/map/Map";
import Form from "./components/formEmail/Form";

import { FadeIn } from "../../utils/Animations";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Form />

        <motion.div
          variants={FadeIn("down", 0.1, 50, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={styles.informations}
        >
          <Informations type="contact_page" />
          <Map />
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
