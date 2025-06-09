import React from "react";
import { news } from "../data/news";
import NewsPost from "../components/NewsPost";
import "../src/index.css";
import "../src/app.css";

function News() {
  return (
    <>
      <h2
        style={{
          fontFamily: "'Poiret One', sans-serif",
          fontSize: "40px",
          fontWeight: "900",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          textDecoration: "underline dotted",
          color: "#fff",
        }}
      >
        News
      </h2>
      {news.map((post) => (
        <NewsPost key={post.id} post={post} />
      ))}
    </>
  );
}
export default News;
