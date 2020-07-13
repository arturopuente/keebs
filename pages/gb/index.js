import Link from "next/link";
import useSWR from "swr";
import cheerio from "cheerio";
import styles from "../listings.module.css";

const fetcher = (...args) => fetch(...args).then(res => res.text());

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = "https://geekhack.org/index.php?board=70.0";

const extract = data => {
  if (!data) return [];
  const items = [];
  const query = cheerio.load(data);
  const listingQuery = "#messageindex tbody tr td.subject:not(.locked_sticky2)";
  const listings = query(listingQuery);
  for (var i = 0; i < listings.length; i++) {
    const qx = cheerio.load(listings[i]);
    items.push({
      title: qx("span a").text(),
      link: qx("span a")
        .attr("href")
        .replace(/PHPSESSID=.+\&/, ""),
      topic: qx("span a")
        .attr("href")
        .split("topic=")[1],
      author: qx("p > a:first-child").text()
    });
  }
  return items;
};

export default function GroupBuys() {
  const { data, error } = useSWR(PROXY_URL + BASE_URL, fetcher, {
    revalidateOnFocus: false
  });
  const listings = extract(data);

  return (
    <div className={styles.listings}>
      <h1>Group Buys</h1>
      <Link href="/ic">
        <a>Interest Checks</a>
      </Link>
      <ul className={styles.list}>
        {listings.map(listing => (
          <li key={listing.title} className={styles.topic}>
            <Link href={`/topic/${listing.topic}`}>
              <a>
                {listing.title} [{listing.author}]
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
