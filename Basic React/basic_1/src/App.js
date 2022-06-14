import { useState } from "react";
import useCounter from "./hooks/useCounter";

function App() {
  // const [counter1, setCounter1] = useState(0);
  const { count, handleInc, handleDec } = useCounter();
  const count1 = useCounter();

  const CounterController = ({ count, handleInc, handleDec }) => {
    return (
      <div>
        <button onClick={handleInc}>+</button>
        <span>{count}</span>
        <button onClick={handleDec}>-</button>
      </div>
    );
  };

  return (
    <div>
      <h1>App</h1>
      <CounterController
        count={count}
        handleInc={handleInc}
        handleDec={handleDec}
      />
      <CounterController
        count={count1.count}
        handleInc={count1.handleInc}
        handleDec={count1.handleDec}
      />
    </div>
  );
}

export default App;
