import Link from "next/link";
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
    <div className={"container h-screen px-5 mx-auto"}>
      <Header />
      <ul>
        {pages.map(page => (
          <li className={"my-5"} key={page.url}>
            <Link href={page.url}>
              <a>
                <h2
                  className={
                    "text-2xl font-medium text-green-300 hover:text-yellow-300"
                  }
                >
                  {page.title}
                </h2>
                <p>{page.subtitle}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
