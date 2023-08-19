import React from "react";
import About from "./About";
import ArticleList from "../ArticleList";
import blogData from "../data/Header";

function App() {
  return (
    <div className="App">
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
