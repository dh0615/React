// import React from "react";

import "./Body.css";

const Body = ({ name, location, favorList }) => {
  // const { name, location } = props; const Body = (props){const {name, location}} 이렇게 쓰나 위에서 구조분해할당해주나 똑같은데 위가 더 간단한
  return (
    <div>
      <h1>
        {/* {props.name} {props.location}에 살고 있습니다 위에서 const {name,location}으로 구조분해할당해줬으니까 아래처럼 써줘도됨*/}
        {name}이는 {location}에 살고 있습니다.
        <br />
        {name}이는 {favorList.length}개의 최애 메뉴가 있습니다. 바로바로..
        <br />
        {favorList[0]}, {favorList[1]}, {favorList[2]}을 좋아합니다.
      </h1>
    </div>
  );
};

Body.defaultProps = {
  favorList: [
    "뭘까요?",
    "알아맞춰보세요",
    "^^..",
  ] /* favorList가 없으면 빈 배열로라도 배치하겠다는 뜻 */,
};

export default Body;
