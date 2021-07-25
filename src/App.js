import Header from "./components/Header/index.js";
import Counter from "./components/Counter.js";
import { useState } from "react";
import "./App.css";
import { div } from "prelude-ls";

function App() {
  let [counters, setCounters] = useState(1);
  let displayCounters = <div></div>;
  if (counters === 1) {
    displayCounters = (
      <div className="counters">
        <Counter />
      </div>
    );
  } else if (counters === 2) {
    displayCounters = (
      <div className="counters">
        <Counter />
        <Counter />
      </div>
    );
  } else if (counters === 3) {
    displayCounters = (
      <div className="counters">
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
  return (
    <div>
      <Header />
      {counters === 1 || counters === 2 ? (
        <div
          className="reset"
          style={{ width: "250px" }}
          onClick={() => {
            setCounters(counters + 1);
          }}
        >
          Add counter
        </div>
      ) : (
        <div className="noAddCounter"></div>
      )}

      <div>{displayCounters}</div>

      <div className="footer">
        Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
        <span>Adeline</span>
      </div>
    </div>
  );
}

export default App;
