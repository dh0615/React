import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./TodoEditor.css";

const TodoEditor = () => {
  // 객체 안에 있는 값을 끌어오기 위해서 구조분해할당
  // console.log(props); 해보면 객체의 키값으로 onCreate가 있음을 알 수 있음
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState();
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    } else {
      onCreate(content);
      // inputRef.current.value = ""; 리셋하는 방법 1 근데 이게 실행되려면 onCreate 안에 있어야한다
      // setContent("");로 써도된다
      setContent("");
    }
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit(); // 구글 찾아보면 엔터키의 키코드가 13번임을 알 수 있음
    }
  };
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 📓</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="새로운 Todo.."
        />
        <button onClick={onSubmit}>+</button>
      </div>
    </div>
  );
};

export default TodoEditor;
