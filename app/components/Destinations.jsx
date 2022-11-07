import LocationCard from "./LocationCard";
import styles from "../styles/destinations.module.css";

export default function Destinations() {
  return (
    <div className={styles.destinations__container}>
      <h2 className={styles.destinations__heading}>Destinations</h2>
      <div className={styles.destinations__grid}>
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </div>
    </div>
  );
}
