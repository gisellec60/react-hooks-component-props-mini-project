import React from "react";
import blogData from "../data/blog"
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"
// import Article from "./Article"

function App() {
  const posts = blogData.posts
  return (
    <div className="App">
      <Header />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts = {posts} /> 
    </div>
  );
}
 export default App;


