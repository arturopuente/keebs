import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

const options = [
  {
    path: "/gb",
    name: "Group Buys"
  },
  {
    path: "/ic",
    name: "Interest Checks"
  }
];

export default function NavBar() {
  const router = useRouter();
  const current = options.find(el => el.path === router.pathname);
  const sorted = options.filter(el => el.path !== (current || {}).path);
  if (current) {
    sorted.unshift(current);
  }
  return (
    <div className={styles.container}>
      {sorted.map(opt => (
        <div className={styles.option} key={opt.path}>
          {opt.path !== router.pathname ? (
            <Link href={opt.path}>
              <a>{opt.name}</a>
            </Link>
          ) : (
            <span>{opt.name}</span>
          )}
        </div>
      ))}
    </div>
  );
}
