import React, { useReducer } from "react";
const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, counter: state.counter + 10 };
      case 'DECREMENT':
        return { ...state, counter: state.counter - 10 };
      default:
        return state;
    }
  };
  // An action is a plain js object that has a type and may or may not have a payload
  // Call the useReducer hook
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <div className="container">
      <h1>Increase/Decrease by 10</h1>
      <h2>{state.counter}</h2>
      <div className="button-div">
        <button
          onClick={() => {
            return dispatch({ type: 'INCREMENT' });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            return dispatch({
              type: 'DECREMENT',
            });
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};
export default App;
