import { useState } from "react";
import "../todo.css";

function TODO() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]); // todo들을 저장할 배열
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo(""); // 입력창 비우기
    setTodos((currentArray) => [todo, ...currentArray]); // todo들 추가하기
  };
  return (
    <div className="frame">
      <h1>My TO DOS : {todos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your to do"
          onChange={onChange}
          value={todo}
        ></input>
        <button>Add</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TODO;
