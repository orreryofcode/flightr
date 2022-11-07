import UserForm from "./UserForm";
import UserResult from "./UserResult";
import styles from "../styles/userSelection.module.css";
export default function UserDashboard() {
  return (
    <div className={styles.container}>
      <UserForm />
      <UserResult />
    </div>
  );
}
