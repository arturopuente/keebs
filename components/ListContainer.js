import { Header, NavBar } from "./index";
import styles from "./ListContainer.module.css";

export default function ListContainer({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <NavBar />
      {children}
    </div>
  );
}
