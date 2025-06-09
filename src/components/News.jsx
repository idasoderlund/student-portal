import React from "react";
import { newsArray } from "../data/news";
import NewsPost from "./NewsPost";

function News() {
  return (
    <div>
      {newsArray.map((post) => (
        <NewsPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default News;
