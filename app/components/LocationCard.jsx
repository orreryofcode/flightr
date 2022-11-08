import Image from "next/image";
import london from "../../public/imgs/london.jpg";
import styles from "../styles/locationCard.module.css";

export default function LocationCard({ name, size }) {
  return (
    <div className={styles.card__container}>
      <div className={styles.img__container}>
        <Image
          className={styles.card__img}
          src={london}
          width={400}
          alt='image of destination'></Image>
      </div>

      <div className={styles.card__text}>
        <h2 className={styles.card__heading}>{name}</h2>
        <p className={styles.card__body}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          quaerat excepturi officiis dicta illum accusantium perspiciatis? Sint
          ea tempora nesciunt voluptates ut, deserunt error veritatis adipisci
          quibusdam, reiciendis nam facere!
        </p>
      </div>
    </div>
  );
}
