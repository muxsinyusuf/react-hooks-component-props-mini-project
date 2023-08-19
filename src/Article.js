import React from "react";
import PropTypes from "prop-types";

function Article({ title, date, preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  minutes: PropTypes.number.isRequired,
};

export default Article;
