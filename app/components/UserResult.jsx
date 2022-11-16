import Image from "next/image";
import styles from "../styles/userResult.module.css";

export default function UserResult({ destination }) {
  return (
    <div className={styles.container}>
      {destination && (
        <Image
          className={styles.location__img}
          src={`/imgs/${destination.toLowerCase()}.jpg`}
          alt='Picture of Selected Destination'
          fill='true'
        />
      )}

      <div className={styles.location}>
        <h1 className={styles.location__title}>
          {destination ? destination : "Where to?"}
        </h1>
        <p className={styles.location__text}>
          {destination
            ? `Lectus quam id leo in vitae turpis. Sed adipiscing diam donec
          adipiscing tristique. Donec ac odio tempor orci dapibus. Scelerisque
          varius morbi enim nunc faucibus a pellentesque sit amet. Platea
          dictumst quisque sagittis purus sit amet volutpat. Volutpat blandit
          aliquam etiam erat. Dolor sed viverra ipsum nunc aliquet bibendum enim
          facilisis gravida. Faucibus scelerisque eleifend donec pretium
          vulputate sapien nec. Ut porttitor leo a diam. Eu facilisis sed odio
          morbi quis. Dignissim enim sit amet venenatis urna cursus eget nunc
          scelerisque. Suspendisse faucibus interdum posuere lorem ipsum dolor
          sit. Tellus molestie nunc non blandit massa enim nec dui nunc.`
            : "Please select a few options from the area on the left."}
        </p>
      </div>
    </div>
  );
}
