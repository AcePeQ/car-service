import LinkTo from "../../components/LinkTo/LinkTo";
import styles from "./Features.module.css";

import car1 from "../../assets/car1.jpg";

function Features() {
  return (
    <div className={styles.features}>
      <h2 className={styles.title}>Zobacz co oferujemy</h2>

      <Row
        title="Wulkanizacja WOAS"
        buttonTitle="Usługi"
        imgSrc={car1}
        imgAlt="Photo 1"
      >
        Nasza wulkanizacja działa już od X lat. Jesteśmy pewni swoich
        umiejętności i naprawimy każdą usterkę jaką napotkałeś w swoim aucie.
        Przekonaj się sam do czego jesteśmy zdolni Jeżeli nie znalazłeś swojej
        usterki nie martw się zadzwoń do nas a napewno ci pomożemy.
      </Row>

      <Row
        title="Zobacz gdzie nas znajdziesz"
        buttonTitle="Zadzwoń teraz"
        imgSrc={car1}
        imgAlt="Photo 1"
      >
        Nie wiesz gdzie się znajdujemy, chcesz umówić się na naprawę lub zapytać
        o dostępność towaru?
        <br /> Zadzwoń już teraz a odpowiemy na każde twoje pytanie i pomożemy
        ci z każdym problemem. Nie zajmujemy się tylko naprawą aut, kupisz także
        u nas nowe opony, felgi i wiele wiele innych
      </Row>

      <Row
        title="Zadzwoń a my ci pomożemy"
        buttonTitle="Mobilna wulkanizacja"
        imgSrc={car1}
        imgAlt="Photo 1"
      >
        Nasza wulkanizacja działa już od X lat. Jesteśmy pewni swoich
        umiejętności i naprawimy każdą usterkę jaką napotkałeś w swoim aucie.
        Przekonaj się sam do czego jesteśmy zdolni Jeżeli nie znalazłeś swojej
        usterki nie martw się zadzwoń do nas a napewno ci pomożemy.
      </Row>
    </div>
  );
}

function Row({ title, buttonTitle, imgSrc, imgAlt, children }) {
  return (
    <div className={styles.row}>
      <div className={styles.text_box}>
        <h3>{title}</h3>
        <p>{children}</p>
        <LinkTo type="row">{buttonTitle}</LinkTo>
      </div>
      <div className={styles.img_box}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
}

export default Features;
