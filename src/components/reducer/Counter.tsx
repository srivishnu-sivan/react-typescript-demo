import { useReducer } from "react";


type CounterState = {
  count: number
  
}

type CounterAction = {
  type: "increment" | "decrement" | "reset";
  payload: number;
};


const initialState = { count: 0 }

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: action.payload + state.count };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return {count: state.count = 0}
    default:
      return state;
  }
};

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
      <div>
        Count : {state.count}
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 m-5 border border-blue-500 hover:border-transparent rounded"
          onClick={() => dispatch({ type: "increment", payload: 10 })}
        >
          Increase By 10
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 m-5 border border-blue-500 hover:border-transparent rounded"
          onClick={() => dispatch({ type: "decrement", payload: 10 })}
        >
          Decrease By 10
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 m-5 border border-blue-500 hover:border-transparent rounded"
          onClick={() => dispatch({ type: "reset", payload: 0 })}
        >
          Reset 
        </button>
      </div>
    );
}