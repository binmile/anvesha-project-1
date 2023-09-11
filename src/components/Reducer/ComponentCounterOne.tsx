import react, { useReducer } from "react";

import { INCREMENT, DECREMENT,RESET } from "./utils/constants/Dummydata";

const initialState = 0;
const reducer = (state: number, action: string) => {
  switch (action) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return initialState;
    default:
      return state;
  }
};

const ComponentCounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count}</div>
      <button
        onClick={() => {
          dispatch(INCREMENT);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(DECREMENT);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(RESET);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ComponentCounterOne;
