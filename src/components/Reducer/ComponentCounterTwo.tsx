import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const reducer = (
  state: { firstCounter: number; secondCounter: number },
  action: { type: string; value: number }
) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    default:
      return state;
  }
};

const ComponentCounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count.firstCounter}</div>
      <div>Count - {count.secondCounter}</div>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset", value: 1 });
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          dispatch({ type: "increment", value: 5 });
        }}
      >
        Increment 5
      </button>

      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 5 });
        }}
      >
        Decrement 5
      </button>

      <div>
        <button
          onClick={() => {
            dispatch({ type: "increment2", value: 1 });
          }}
        >
          Increment Counter 2
        </button>

        <button
          onClick={() => {
            dispatch({ type: "decrement2", value: 1 });
          }}
        >
          Decrement Counter 2
        </button>
      </div>
    </div>
  );
};

export default ComponentCounterTwo;
