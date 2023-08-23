import { useState } from "react";
import "./App.css";

function App() {
  let [counter, updateCounter] = useState(0);
  return (
    <>
      <div className="wrapper">
        <h1>Stock Counting App</h1>
        <div className="first-conter">
          <button
            className="minus"
            disabled={counter === 0}
            onClick={() => updateCounter(counter - 1)}
          >
            -
          </button>
          <p>{counter}</p>
          <button
            className="plus"
            disabled={counter === 100}
            onClick={() => updateCounter(counter + 1)}
          >
            +
          </button>
          <div>
          <button
            className="clear"
            onClick={() => updateCounter(0)}
          >
            Dispose
          </button>
          </div>
        </div>
      </div>
      <div className="note">
      <p><b>Note:</b> Min-Stock: 0, Max-Stock: 100</p>
      </div>
      
    </>
  );
}

export default App;
