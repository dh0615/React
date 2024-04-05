import React, { useReducer, useRef, useCallback, useMemo } from "react";
// components 안에 input요소가 있으면 무조건 useState 써주기
import "./App.css";
// import TestComp from "./components/TestComp";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

// Context
export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

// state function
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
};

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React.js 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "후추 산책하기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "운동하기",
    createDate: new Date().getTime(),
  },
];

function App() {
  // const [todo, setTodo] = useState(mockTodo);
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createDate: new Date().getTime(),
      },
    });
    // const newItem = {
    //   id: idRef.current,
    //   // console.log(idRef)하면 current라는 요소가 받고 있음을 알 수 있음
    //   isDone: false,
    //   content,
    //   createDate: new Date().getTime(),
    // };
    // setTodo([newItem, ...todo]);
    idRef.current += 1;
    // 하나를 더 추가하면서 끝냄 다음번은 idRef가 하나가 추가된 상태를 받을 수 있도록
  };

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
    // setTodo(
    //   todo.map(
    //     (it) => (it.id === targetId ? { ...it, isDone: !it.isDone } : it)
    //     // if (it.id === targetId) {
    //     //   return { ...it, isDone: !it.isDone };
    //     // } else {
    //     //   return it;
    //     // } 라는 내용을 삼항조건연산자로 만들면 위와 같이 쓸 수 있음
    //   )
    // ); //새로운 배열을 만들기 위해 .map
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
    // setTodo(todo.filter((it) => it.id !== targetId));
  }, []);
  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);
  return (
    <div className="App">
      {/* <TestComp /> */}
      <Header />
      <TodoStateContext.Provider value={{ todo }}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
