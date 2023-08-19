import React from "react";
import Article from "./Article";
import PropTypes from "prop-types";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

ArticleList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      date: PropTypes.string,
      preview: PropTypes.string,
      minutes: PropTypes.numberstring,
    })
  ).isRequired,
};

export default ArticleList;
