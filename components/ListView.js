import styles from "./ListView.module.css";
import Link from "next/link";

export default function ListView({ items }) {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.title} className={styles.topic}>
          <Link href={`/topic/${item.topic}`}>
            <a className={styles.link}>
              <h2 className={styles.listingTitle}>{item.title}</h2>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
