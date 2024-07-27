import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import styles from "./Map.module.css";

const SERVICE_POSITION = [52.261697, 21.902037];

export default function Map() {
  return (
    <div className={styles.map_container}>
      <MapContainer
        className={styles.map}
        center={SERVICE_POSITION}
        zoom={15.5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={SERVICE_POSITION}>
          <Popup>
            Wulkanizacja WOAS <br />
            07-110 Grębków <br />
            ul.Warszawska 22
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
