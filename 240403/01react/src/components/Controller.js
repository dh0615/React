const Controller = ({ handleSetCount }) => {
  return (
    <div>
      <button onClick={() => handleSetCount(-1)}>-1</button>
      <button onClick={() => handleSetCount(-10)}>-10</button>
      <button onClick={() => handleSetCount(-100)}>-100</button>
      <button onClick={() => handleSetCount(100)}>+100</button>
      <button onClick={() => handleSetCount(10)}>+10</button>
      <button onClick={() => handleSetCount(1)}>+1</button>
      {/* 매개변수가 있는 함수니까 콜백함수를 이벤트핸들러로 넣어줘야함 */}
    </div>
  );
};

export default Controller;
