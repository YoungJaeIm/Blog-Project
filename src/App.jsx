

import { useState } from 'react'
import PostInput from './PostInput'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  const addPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <h1>게시글 목록</h1>
      <PostInput onAddPost={addPost} />
      <ul className="post-list">
        {posts.map((post, index) => (
          <li key={index} className="post-item">{post}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
