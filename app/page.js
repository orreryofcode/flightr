"use client";

import Destinations from "./components/Destinations";
import Navbar from "./components/Navbar";
import UserSelection from "./components/UserSelection";
import styles from "./styles/page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <Navbar />
      <UserSelection />
      <Destinations />
    </div>
  );
}
