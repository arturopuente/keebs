import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
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
    <div className={"px-5 max-w-screen-lg mx-auto"}>
      <div className={"py-5"}>
        <NavBar />
      </div>
      {posts.map(post => (
        <div key={post.title} className={""}>
          <Head>
            <title>{post.title}</title>
          </Head>
          <h1 className={"text-2xl font-medium"}>{post.title}</h1>
          <span>Author: {post.author}</span>
          <h2 className={"space-x-3 mb-5"}>
            <a
              className={"text-green-300 hover:text-yellow-300"}
              target="_blank"
              href={rawTopicUrl(id)}
            >
              View original on GeekHack
            </a>
          </h2>
          <div
            className={"text-lg overflow-hidden pb-10"}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      ))}
    </div>
  );
}
