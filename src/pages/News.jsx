import { news } from "../data/news";
import NewsPost from "../components/NewsPost";

function News() {
  return (
    <>
      <h2> News & blogg</h2>
      {news.map((post) => (
        <NewsPost key={post.id} post={post} />
      ))}
    </>
  );
}
export default News;
