import "../TodoItem/TodoItem.css";
const TodoItem = (props) => {
  const onTogle = () => {
    props.onToggle(props.id);
  };

  const onDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="list-container">
      <div className="list-box">
        <div
          className={`props ${props.completed ? "line-through" : ""}`}
          id="props"
          onClick={onTogle}
        >
          <input
            type="checkbox"
            className="check"
            checked={props.completed}
            oninput="handleOnInput(this, 17)"
          />
          {props.content}
        </div>
        <div>
          <button className="del-btn" onClick={onDelete}>
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
