import { useState } from 'react'
import './PostInput.css' // CSS 파일을 가져옵니다.

function PostInput({ onAddPost }) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onAddPost(inputValue)
      setInputValue('') // 입력 후 초기화
    }
  }

  return (
    <form className="post-input-form" onSubmit={handleSubmit}>
      <input
        className="post-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="게시글을 입력하세요"
      />
      <button className="post-button" type="submit">추가</button>
    </form>
  )
}

export default PostInput
