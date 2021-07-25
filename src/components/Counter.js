import "../App.css";
import { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <div className="counter">
        {counter > 0 ? (
          <button
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            -
          </button>
        ) : (
          <div className="noButton"></div>
        )}

        <div className="num">{counter}</div>
        {counter < 10 ? (
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            +
          </button>
        ) : (
          <div className="noButton"></div>
        )}
      </div>
      <div
        className="reset"
        onClick={() => {
          setCounter((counter = 0));
        }}
      >
        Reset
      </div>
    </div>
  );
};

export default Counter;
