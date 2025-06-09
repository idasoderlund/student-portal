import React from "react";
import { newsArray } from "../data/news";
import NewsPost from "../components/NewsPost";

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
          color: "#EEEFE0",
          zIndex: 10,
        }}
      >
        News
      </h2>
      {newsArray.map((post) => (
        <NewsPost key={post.id} post={post} />
      ))}
    </>
  );
}
export default News;
