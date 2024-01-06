import { useState } from "react";
import "../TodoInput/index.css";

const TodoInput = (props) => {
  const [content, setContent] = useState("");
  const changeContent = (event) => {
    setContent(event.target.value);
  };

  const onSubmit = () => {
    props.onAdd(content);
    setContent("");
  };

  return (
    <>
    <input
    className="todo-input"
    value={content}
    onChange={changeContent}
    placeholder="할 일을 입력하세요 (19자 이내)"
  />
    <div className="todo-box">
      <button className="todo-submit" onClick={onSubmit}>
        확인
      </button>
    </div>
    </>
  );
};
export default TodoInput;
