import styles from "./Header.module.css";

export default function Header() {
  return (
    <h1 className={styles.title}>
      keyboards <a href="https://arturo.pe/">by @arturopuente</a>
    </h1>
  );
}
