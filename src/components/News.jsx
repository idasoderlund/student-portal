import React from "react";
import { news } from "../data/news";
import NewsPost from "./NewsPost";

function News() {
  return (
    <div>
      {news.map((post) => (
        <NewsPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default News;
