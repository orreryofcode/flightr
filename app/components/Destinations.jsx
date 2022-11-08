import LocationCard from "./LocationCard";
import locations from "../src/data";
import styles from "../styles/destinations.module.css";

export default function Destinations() {
  return (
    <div className={styles.destinations__container}>
      <h2 className={styles.destinations__heading}>Destinations</h2>
      <div className={styles.destinations__grid}>
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            name={location.name}
            img={location.name.toLowerCase()}
            size={location.size}
          />
        ))}
      </div>
    </div>
  );
}
