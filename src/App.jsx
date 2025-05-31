import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        {count > 0 && <h2>count is {count}</h2>}
        <button onClick={() => setCount((count) => count - 1)}>-</button>
      </div>
    </>
  );
}

export default App;
