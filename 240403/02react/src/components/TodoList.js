import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todo } = useContext(TodoStateContext);
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
    // toLowerCase() : 소문자로 입력해도 나오게 해줌 근데 앞에만 넣어주면 또 대문자로 치면 안나오니까 search 뒤에도 넣어줌
  };
  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  const { totalCount, doneCount, notDoneCount } = analyzeTodo;
  return (
    <div className="TodoList">
      <h4>Todo List ..🏃‍♂️</h4>
      <div>
        <div>총 개수 : {totalCount}</div>
        <div>✅ 완료된 할 일 : {doneCount}</div>
        <div>🆖 아직 완료하지 못한 할 일 : {notDoneCount}</div>
      </div>
      <input
        value={search}
        className="searchbar"
        placeholder="검색어를 입력하세요 !"
        onChange={onChangeSearch}
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// TodoList.defaultProps = {
//   todo: [],
// };

export default TodoList;
