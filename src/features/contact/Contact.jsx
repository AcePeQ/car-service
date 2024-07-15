import styles from "./Contact.module.css";

import Informations from "../../components/informations/Informations";
import Map from "./components/map/Map";
import Form from "./components/formEmail/Form";

function Contact() {
  return (
    <div className={styles.container}>
      <Form />

      <div className={styles.informations}>
        <Informations />
        <Map />
      </div>
    </div>
  );
}

export default Contact;
