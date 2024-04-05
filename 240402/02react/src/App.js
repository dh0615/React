import "./App.css";
import { useState } from "react";

function App() {
  // console.log("Update..");
  // const [count, setCount] = useState(0);
  // const onIncrease = () => {
  //   setCount(count + 1);
  // };
  // const [text, setText] = useState("");
  // const handleOnChange = (e) => {
  //   setText(e.target.value);
  // };
  // const [date, setDate] = useState("");
  // const handleOnChage = (e) => {
  //   setDate(e.target.value);
  // };
  // const [option, setOption] = useState("");
  // const handleOnChange = (e) => {
  //   setOption(e.target.value);
  // };
  // const [text, setText] = useState("");
  // const handleOnChage = (e) => {
  //   setText(e.target.value);
  // };
  /*  */
  // const [name, setName] = useState("");
  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const [gender, setGender] = useState("");
  // const onChangeGender = (e) => {
  //   setGender(e.target.value);
  // };

  // const [birth, setBirth] = useState("");
  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value);
  // };

  // const [bio, setBio] = useState("");
  // const onChangeBio = (e) => {
  //   setBio(e.target.value);
  // };

  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      // 전개연산자 : handleOnChange 작동한다면
    });
  };
  return (
    <div className="container">
      {/* <h2>{count}</h2>
      <button onClick={onIncrease}>➕</button> */}
      {/* <input value={text} onChange={handleOnChange}></input>
      <div>{text}</div> */}
      {/* <input value={date} type="date" onChange={handleOnChage} /> */}
      {/* <select value={option} onChange={handleOnChange}>
        <option key={"1번"}>1번</option>
        <option key={"2번"}>2번</option>
        <option key={"3번"}>3번</option>
      </select> */}
      {/* <textarea value={text} onChange={handleOnChage}></textarea> */}
      <div>
        <input
          name="name"
          value={state.name}
          placeholder="이름..💭"
          onChange={handleOnChange}
        />
      </div>

      <div>
        <select name="gender" value={state.gender} onChange={handleOnChange}>
          <option key={""}></option>
          <option key={"여성"}>여성</option>
          <option key={"남성"}>남성</option>
        </select>
      </div>

      <div>
        <input
          name="birth"
          value={state.birth}
          type="date"
          onChange={handleOnChange}
        />
      </div>

      <div>
        <textarea name="bio" value={state.bio} onChange={handleOnChange} />
      </div>
    </div>
  );
}
// 숫자 하단에 버튼을 생성하고, 그 버튼이 클릭될 때마다 값이 증가하게 만들고 싶다.
export default App;
