import { useEffect, useState } from "react";

function* generateId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const genId = generateId();

const initialInputState = {
  a: 20,
  b: 10,
};

const App = () => {
  const [inputState, setInputState] = useState({ ...initialInputState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoredHistory, setRestoredHistory] = useState(null);
  // useEffect(() => {
  //   if (restoredHistory != null) {
  //     handleArithmethicOps(restoredHistory.operations);
  //   }
  // }, [inputState]);

  const handleChangeField = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
      /**
       * same logic
       * a: e.target.value
       * b: e.target.value
       */
    });
  };

  const handleClear = () => {
    setInputState({
      ...initialInputState,
    });
    setResult(0);
    setHistories([]);
  };

  const handleArithmethicOps = (operations) => {
    if (!inputState.a || !inputState.b) {
      alert("invalid input");
      return;
    }

    const f = new Function(
      "operations",
      `return ${inputState.a} ${operations}  ${inputState.b}`
    );
    const result = f(operations);
    setResult(result);
    // setResult(eval(`${inputState.a} ${operations} ${inputState.b}`));

    const history = {
      id: genId.next().value,
      inputs: { ...inputState },
      operations,
      result,
      date: new Date(),
    };

    setHistories([history, ...histories]);
  };

  const generateHistory = (operations, result) => {
    const history = {
      id: genId.next().value,
      inputs: { ...inputState },
      operations,
      result,
      date: new Date(),
    };

    setHistories([history, ...histories]);
  };

  const handleRestore = (historyItem) => {
    setInputState({ ...historyItem.inputs });
    setResult(historyItem.result);
    setRestoredHistory(historyItem);
    // handleArithmethicOps(historyItem.operations);
  };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Result: {result}</h1>

      <div>
        <p>Inputs</p>
        <input
          type="number"
          value={inputState.a}
          onChange={handleChangeField}
          name="a"
        />
        <input
          type="number"
          value={inputState.b}
          onChange={handleChangeField}
          name="b"
        />
      </div>
      <div>
        <p>Operators</p>
        <button onClick={() => handleArithmethicOps("+")}>+</button>
        <button onClick={() => handleArithmethicOps("-")}>-</button>
        <button onClick={() => handleArithmethicOps("*")}>*</button>
        <button onClick={() => handleArithmethicOps("/")}>/</button>
        <button onClick={() => handleArithmethicOps("%")}>%</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div>
        <p>History</p>
        {histories.length === 0 ? (
          <p>
            <small>There is no history</small>
          </p>
        ) : (
          <ul>
            {histories.map((historyItem) => (
              <li key={historyItem.id}>
                <p>
                  Operations: {historyItem.inputs.a} {historyItem.operations}{" "}
                  {historyItem.inputs.b}
                </p>
                <p>Result: {historyItem.result}</p>
                <small>
                  {historyItem.date.toLocaleDateString()}
                  {" -> "}
                  {historyItem.date.toLocaleTimeString()}
                </small>
                <button
                  onClick={() => handleRestore(historyItem)}
                  disabled={
                    restoredHistory != null &&
                    restoredHistory.id === historyItem.id
                  }
                >
                  restore
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;

/**
 * we can find direct time from console panel 
 * new Date().toLocaleDateString()
 '6/10/2022'
 */
