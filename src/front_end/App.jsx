import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  // 서버에서 게시글 목록 불러오기
  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  // 게시글 추가 함수
  const addPost = (newPost) => {
    fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post: newPost }),
    })
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };

  // 게시글 삭제 함수
  const deletePost = (index) => {
    fetch(`http://localhost:5000/posts/${index}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };

  return (
    <div className="App">
      <h1>게시글 목록</h1>

      {/* 게시글 추가 버튼 */}
      <button onClick={() => addPost('새로운 게시글')}>게시글 추가</button>

      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            {post}
            <button onClick={() => deletePost(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
