import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className={styles.nav__container}>
          <h2 className={styles.nav__logo}>Travlr</h2>
          <ul className={styles.nav__list}>
            <li>
              <a className={styles.nav__item} href='#'>
                Destinations
              </a>
            </li>
            <li>
              <a className={styles.nav__item} href='#'>
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
