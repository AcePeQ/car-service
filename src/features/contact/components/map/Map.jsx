import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import styles from "./Map.module.css";

const SERVICE_POSITION = [52.261697, 21.902037];

export default function Map() {
  return (
    <div className={styles.map_container}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.5526818940225!2d21.756282776921413!3d52.197003171978345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f30c2b4edbb1b%3A0x684186c5a394fced!2sMobilna%20Wulkanizacja%20Serwis%20i%20sprzeda%C5%BC%20opon!5e0!3m2!1spl!2spl!4v1720976710909!5m2!1spl!2spl"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.map}
      ></iframe>
    </div>
  );
}
