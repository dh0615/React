const Box = ({ title, item, result }) => {
  console.log(title);
  if (title === "Computer" && result !== "tie" && result !== "") {
    result = result === "win" ? "lose" : "win";
  } else {
    result = result;
  }
  return (
    <div className={`box ${result}`}>
      <h1>{title}</h1>
      {/* 부모요소한테 가져오는 족족 props 써줄 수는 없으니까 const Box = (props) 써준걸 구조분해할당으로 const Box = ({ title }) 써주고 <h1>{props.title}</h1>이 아니라  <h1>{title}</h1>라고 써주기 */}
      <img className="item-img" src={item?.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
