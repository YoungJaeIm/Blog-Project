// server.js (Express 서버 코드)
import express, { json } from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(json());

let posts = [];

// 게시글 목록 가져오기 (GET)
app.get('/posts', (req, res) => {
  res.json(posts);
});

// 게시글 추가 (POST)
app.post('/posts', (req, res) => {
  const newPost = req.body.post;
  posts.push(newPost);
  res.status(201).json(posts);
});

// 게시글 삭제 (DELETE)
app.delete('/posts/:index', (req, res) => {
  const index = req.params.index;
  posts = posts.filter((_, i) => i != index);
  res.status(200).json(posts);
});

app.listen(5000, () => {
  console.log('서버가 5000번 포트에서 실행 중입니다.');
});
