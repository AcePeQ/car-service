import styles from "./MobileCarInformations.module.css";

function MobileCarInformations() {
  return (
    <div className={styles.textBox}>
      <h3>Moblina wulkanizacja</h3>
      <p>
        W naszej firmie mamy do dyspozycji profesjonalnie przygotowany pojazd
        mobilny który działa jak wulkanizacja. Działamy bardzo szybko i sprawnie
        natychmiast po telefonie ruszamy na miejsce aby Ci pomóc. Nie wachaj się
        dzwonić jesteśmy przygotowania na każdą okoliczność na drodze. Nasza
        Wulkanizacja czeka na twoje zgłoszenie.
      </p>

      <div>
        <p className={styles.call}>Zadzwoń już teraz</p>
        <p className={styles.number}>+48 664 137 245</p>
      </div>
    </div>
  );
}

export default MobileCarInformations;
