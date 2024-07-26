import { useService } from "../../contexts/ServiceContext";
import styles from "./ServiceBoxes.module.css";

import { FadeIn } from "../../../../utils/Animations";
import { motion } from "framer-motion";

function ServiceBoxes() {
  const { currentServices } = useService();

  return (
    <>
      {currentServices.map((service, index) => (
        <ServiceBox boxNr={index} key={index} service={service} />
      ))}
    </>
  );
}

function ServiceBox({ boxNr, service }) {
  return (
    <motion.div
      variants={FadeIn("up", 0.2, -50, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      exit={{ y: 40 }}
      className={`${styles.box} ${styles[`box${boxNr + 1}`]}`}
    >
      <div>{service.icon}</div>
      <div className={styles.additional_info}>
        <p>{service.additionalText}</p>
      </div>
      <p className={styles.titleBox}>{service.title}</p>
    </motion.div>
  );
}

export default ServiceBoxes;
