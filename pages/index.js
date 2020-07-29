import Link from "next/link";
import styles from "./index.module.css";
import { Header } from "../components";

const pages = [
  {
    url: "/gb",
    title: "Group Buys",
    subtitle: "Pre-orders & community projects"
  },
  {
    url: "/ic",
    title: "Interest Checks",
    subtitle: "Initial feedback & discussions"
  }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <ul className={styles.list}>
        {pages.map(page => (
          <li className={styles.item}>
            <Link href={page.url}>
              <a className={styles.link}>
                <h2>{page.title}</h2>
                <p>{page.subtitle}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
