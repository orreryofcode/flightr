import Image from "next/image";
import london from "../../public/imgs/london.jpg";

import styles from "../styles/userResult.module.css";

export default function UserResult() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.location__img}
        src={london}
        alt='Picture of London, UK'
        fill='true'
      />

      <div className={styles.location}>
        <h1 className={styles.location__title}>London</h1>
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
