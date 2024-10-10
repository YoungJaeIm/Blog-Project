

import { useState } from 'react'
import PostInput from './PostInput'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  //게시글 추가
  const addPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // 게시글 삭제
  const deletePost = (indexToDelete) => {
    setPosts(posts.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="App">
      <h1>게시글 목록</h1>
      <PostInput onAddPost={addPost} />
      <ul className="post-list">
        {posts.map((post, index) => (
          <li key={index} className="post-item">{post}
          <button onClick={() => deletePost(index)}> 삭제 </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
