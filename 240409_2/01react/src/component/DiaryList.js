import React from "react";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const DiaryList = ({ data }) => {
  console.log(data);
  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]);
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  const navigate = useNavigate();
  const onClickNew = () => {
    navigate("/new");
  };
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);
  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={sortType} onChange={onChangeSortType}>
            {/* <option value={"latest"}>최신순</option>
            <option value={"oldest"}>오래된순</option> 이렇게 안쓰고 위에 배열로 써주고 map함수로 실행하는 방식으로 써줄 수 있음*/}
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>
        </div>
        <div className="right_col">
          <Button text="새 일기 쓰기" type="positive" onClick={onClickNew} />
        </div>
      </div>
      <div className="list_wrapper">
        {sortedData.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
