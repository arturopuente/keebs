import Link from "next/link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div>
      <ul className={styles.container}>
        <li className={styles.item}>
          <Link href="/gb">
            <a className={styles.link}>Group Buys</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/ic">
            <a className={styles.link}>Interest Checks</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
