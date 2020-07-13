import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import cheerio from "cheerio";
import styles from "./topic.module.css";

const fetcher = (...args) => fetch(...args).then(res => res.text());

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = "https://geekhack.org/index.php?topic=";

const extract = data => {
  if (!data) return [];
  const items = [];
  const query = cheerio.load(data);
  const postsQuery = ".post_wrapper";
  const posts = query(postsQuery);
  const qx = cheerio.load(posts[0]);
  items.push({
    title: qx(".keyinfo h5 a").text(),
    author: qx(".poster h4 a").text(),
    content: qx(".post .inner").html()
  });
  return items;
};

export default function Topic() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(PROXY_URL + BASE_URL + id, fetcher, {
    revalidateOnFocus: false
  });
  const posts = extract(data);

  return (
    <div>
      <ul>
        <li>
          <Link href="/gb">
            <a>Group Buys</a>
          </Link>
        </li>
        <li>
          <Link href="/ic">
            <a>Interest Checks</a>
          </Link>
        </li>
      </ul>
      {posts.map(post => (
        <div key={post.title} className={styles.topic}>
          <h1 className={styles.title}>{post.title}</h1>
          <h2 className={styles.author}>{post.author}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
}
