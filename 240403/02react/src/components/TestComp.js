import { useReducer } from "react";
import("./TestComp.css");

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "INIT":
      return 0;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
};

const TestComp = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  //useState()에서의 배열 중 뒤에 오는 값은 (set~~) 단순히 앞에있는 요소를 컨트롤 하는 역할이었다면 dispatch 함수 는 상태 변화 감지 후 어떻게 변화하였는지 객체로 값을 받아서 reduce에게 값을 토스함, 그 토스를 받은 함수를 첫번째 매개함수로 받아옴
  return (
    <div>
      <h4>테스트 컴포넌트..</h4>
      <div>
        <bold>{count}</bold>
        <div className="buttons">
          <button
            onClick={() =>
              dispatch({
                type: "INCREASE",
                data: 1,
              })
            }
          >
            +
          </button>
          <button
            onClick={() =>
              dispatch({
                type: "INIT",
              })
            }
          >
            {" "}
            reset{" "}
          </button>
          <button
            onClick={() =>
              dispatch({
                type: "DECREASE",
                data: 1,
              })
            }
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestComp;
