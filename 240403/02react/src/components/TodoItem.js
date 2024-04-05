import React, { useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, createDate }) => {
  console.log(`${id} TodoItem 업데이트`);
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createDate).toLocaleDateString()}
      </div>
      {/* <div className="date_col">{new Date().toLocaleDateString()}</div> */}
      {/* 우리가 사는 지역의 날짜까지만의 정보 불러오기 = toLocaleDateString() 
      년 월 일 요일까지 나오는 건 toDateString()*/}
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
