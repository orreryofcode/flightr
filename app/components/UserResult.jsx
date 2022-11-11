import Image from "next/image";
import styles from "../styles/userResult.module.css";

export default function UserResult({ destination }) {
  console.log("From Result: " + destination);

  return (
    <div className={styles.container}>
      <Image
        className={styles.location__img}
        src={`/imgs/${destination.toLowerCase()}.jpg`}
        alt='Picture of Selected Destination'
        fill='true'
      />

      <div className={styles.location}>
        <h1 className={styles.location__title}>
          {destination ? destination : "Where to?"}
        </h1>
        <p className={styles.location__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          mollitia fugiat error nostrum modi laboriosam animi, voluptatibus ipsa
          nihil commodi aut rem ipsam fugit molestiae totam corrupti quaerat
          veritatis! Expedita.
        </p>
      </div>
    </div>
  );
}
