import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "./topic.module.css";
import { Header, NavBar } from "../../components";
import { extractTopic, fetcher, topicUrl, rawTopicUrl } from "../../shared/api";

export default function Topic() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(topicUrl(id), fetcher, {
    revalidateOnFocus: false
  });
  const posts = extractTopic(data);

  return (
    <div className={styles.container}>
      <Header />
      <NavBar />
      {posts.map(post => (
        <div key={post.title} className={styles.topic}>
          <h1 className={styles.title}>{post.title}</h1>
          <h2 className={styles.author}>
            Posted by: {post.author}
            <a
              className={styles.externalLink}
              target="_blank"
              href={rawTopicUrl(id)}
            >
              View original on GeekHack
            </a>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
}
