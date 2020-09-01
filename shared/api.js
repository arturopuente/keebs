import cheerio from "cheerio";

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const BASE_BOARD_URL = "https://geekhack.org/index.php?board=";
const BASE_TOPIC_URL = "https://geekhack.org/index.php?topic=";

const boardUrl = (boardId, page) => {
  return PROXY_URL + BASE_BOARD_URL + boardId + "." + page;
};

const topicUrl = topicUrl => {
  return PROXY_URL + BASE_TOPIC_URL + topicUrl;
};

const rawTopicUrl = topicUrl => {
  return BASE_TOPIC_URL + topicUrl;
};

const extractList = data => {
  if (!data) return [];
  const items = [];
  const query = cheerio.load(data);
  const listingQuery =
    "#messageindex tbody tr td.subject:not(.stickybg):not(.stickybg2)";
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
        .split("topic=")[1]
    });
  }
  return items;
};

const extractTopic = data => {
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

const fetcher = (...args) => fetch(...args).then(res => res.text());

export { boardUrl, topicUrl, rawTopicUrl, extractList, extractTopic, fetcher };
