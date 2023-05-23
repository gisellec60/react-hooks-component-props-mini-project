import React from "react"
import Article from "./Article"

function ArticleList ({post}) {
console.log("this is post",post)    
const posts = post.map((postInfo) => {
    return <Article key={postInfo.id} date={postInfo.date} minutes={postInfo.minutes} preview={postInfo.preview} title={postInfo.title}  />
})
    return (
        <main>
          {posts}
        </main>
    )
}
export default ArticleList