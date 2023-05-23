import React from "react"
import Article from "./Article"

function ArticleList ({posts}) {
console.log("this is post",posts)  
const post = posts.map((postInfo) => {
     return <Article key={postInfo.id} date={postInfo.date} minutes={postInfo.minutes} preview={postInfo.preview} title={postInfo.title}  />
 })  
    return (
        <main>
          {post}
        </main>
    )
}
export default ArticleList

