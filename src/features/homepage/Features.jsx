import LinkTo from "../../components/LinkTo/LinkTo";
import styles from "./Features.module.css";

import { FadeIn } from "../../utils/Animations";
import { motion } from "framer-motion";

function Features() {
  return (
    <div className={styles.features}>
      <h2 className={styles.title}>Zobacz co oferujemy</h2>

      <Row
        title="Wulkanizacja WOAS"
        buttonTitle="Usługi"
        imgSrc="/heroBG.jpg"
        imgAlt="Photo 1"
        to="/services"
      >
        Nasza wulkanizacja działa już od X lat. Jesteśmy pewni swoich
        umiejętności i naprawimy każdą usterkę jaką napotkałeś w swoim aucie.
        Przekonaj się sam do czego jesteśmy zdolni Jeżeli nie znalazłeś swojej
        usterki nie martw się zadzwoń do nas a napewno ci pomożemy.
      </Row>

      <Row
        title="Zobacz gdzie nas znajdziesz"
        buttonTitle="Zadzwoń teraz"
        imgSrc="/heroBG.jpg"
        imgAlt="Photo 1"
        to="/contact"
      >
        Nie wiesz gdzie się znajdujemy, chcesz umówić się na naprawę lub zapytać
        o dostępność towaru? Zadzwoń już teraz a odpowiemy na każde twoje
        pytanie i pomożemy ci z każdym problemem. Nie zajmujemy się tylko
        naprawą aut, kupisz także u nas nowe opony, felgi i wiele wiele innych
      </Row>

      <Row
        title="Zadzwoń a my ci pomożemy"
        buttonTitle="Mobilna wulkanizacja"
        imgSrc="/heroBG.jpg"
        imgAlt="Photo 1"
        to="mobile-car"
        type="last"
      >
        Nasza wulkanizacja działa już od X lat. Jesteśmy pewni swoich
        umiejętności i naprawimy każdą usterkę jaką napotkałeś w swoim aucie.
        Przekonaj się sam do czego jesteśmy zdolni Jeżeli nie znalazłeś swojej
        usterki nie martw się zadzwoń do nas a napewno ci pomożemy.
      </Row>
    </div>
  );
}

function Row({ title, buttonTitle, imgSrc, imgAlt, children, to, type }) {
  return (
    <motion.div
      variants={FadeIn("left", 0.2, 100, 1, "spring")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.row} ${type === "last" ? styles.row_last : ""}`}
    >
      <div className={styles.text_box}>
        <h3>{title}</h3>
        <p>{children}</p>
        <div>
          <LinkTo to={to} type="row" size="big" clip="clip_row">
            {buttonTitle}
          </LinkTo>
        </div>
      </div>
      <figure className={styles.img_box}>
        <img src={imgSrc} alt={imgAlt} />
      </figure>
    </motion.div>
  );
}

export default Features;
