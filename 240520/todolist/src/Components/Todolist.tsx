import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector, categoryState, Categories } from "./atoms";
import Todo from "./Todo";

// event가 발생하면, target도 존재하고, currentTarget도 존재
// currentTarget : event 핸들러가 바인딩되어있는 요소의 value값을 찾아오고자 할 때
// target : 실제 event가 발생한 요소의 value값을 찾아오고자 할 때
// React.js에서는 currentTarget을 사용해서 value값을 찾을 때에는 FormEvent라는 속성을 써도 됨,, 근데 그냥 target을 사용해서 value값을 찾고자 할 때는 ChangeEvent를 사용한다

const Todolist = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>Todo's</h1>
      <hr />
      <CreateToDo />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>ToDo</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      {toDos?.map((toDo) => (
        <Todo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
};

export default Todolist;
